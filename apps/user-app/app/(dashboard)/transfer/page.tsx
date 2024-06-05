import AddMoneyCard from "../../../components/AddMoneyCard";
import BalanceCard from "../../../components/BalanceCard";
import OnRampTransaction from "../../../components/OnRampTransaction";
import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth"; 1
import addMoney from "../../lib/actions/addMoney";

async function getBalance() {
  const session = await getServerSession(authOptions);

  const balance = await db.balance.findFirst({
    where: {
      userId: Number(session?.user?.id)
    }
  })

  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0
  }
}

async function getOnRampTransactions() {
  enum OnRampStatus {
    Success,
    Failure,
    Processing
  }
  const session = await getServerSession(authOptions);
  const txns = await db.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id)
    }
  })


  return txns.map(txn => ({
    id: txn.id,
    status: txn.status,
    amount: txn.amount,
    startTime: txn.startTime,
    provider: txn.provider
  }
  ))
}

export default async function () {

  const balance = await getBalance();
  const txns = await getOnRampTransactions();

  return (
    <div className="w-full h-full">
      <p className="text-4xl text-purple-400 font-bold my-5">Transfer</p>
      <div className="grid grid-cols-2  w-full h-full">
        <div className="w-full h-max">
          <AddMoneyCard addMoney={addMoney}></AddMoneyCard>
        </div>
        <div className="grid grid-rows-5 mr-4 gap-5 h-full">
          <div className="row-span-1 w-full h-full">
            <BalanceCard amount={balance.amount} locked={balance.locked}></BalanceCard>
          </div>
          <div className="row-span-4 h-full">
            <OnRampTransaction OnRampTransactions={txns}></OnRampTransaction>
          </div>
        </div>
      </div>
    </div>
  )
}

