import express from "express";
import prisma from "@repo/db/client";
import { TxnStatus } from "@repo/db/client";
const app = express();
app.use(express.json())


app.post("/hdfcWebhook", async (req, res) => {
  const paymentInformation: {
    token: string;
    userId: string;
    amount: string
  } = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount
  };
  const txnInFocus = prisma.onRampTransaction.findUnique({
    where: {
      token: req.body.token
    }
  })

  if (txnInFocus.status !== TxnStatus.Processing) {
    return res.status(400).json({
      msg: "This transaction has already been completed"
    });
  }
  try {
    await prisma.$transaction([
      prisma.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId)
        },
        data: {
          amount: {
            // You can also get this from your DB
            increment: Number(paymentInformation.amount)
          }
        }
      }),
      prisma.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token
        },
        data: {
          status: "Success",
        }
      })
    ]);

    res.json({
      message: "Captured"
    })
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook"
    })
  }
});

console.log("Server running of 3002")

app.listen(3002);
