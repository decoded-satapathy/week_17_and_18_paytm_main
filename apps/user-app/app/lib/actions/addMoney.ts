'use server';
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";
import db from "@repo/db/client"
import { TxnStatus } from "@repo/db/client";

export default async function addMoney(currentBank: string, amount: number) {
  // do the bank api request thing
  const session = await getServerSession(authOptions);
  const randomToken = Math.random().toString();
  const txn = await db.onRampTransaction.create({
    data: {
      status: TxnStatus.Processing,
      token: randomToken,
      provider: currentBank,
      amount: amount * 100,
      startTime: new Date(),
      userId: Number(session?.user?.id)

    }
  })
}
