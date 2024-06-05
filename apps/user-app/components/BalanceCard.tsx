"use client"
import Card from "@repo/ui/card";

export default function({ amount, locked }: { amount: number, locked: number }) {
  function BalanceItem({ label, value }: { label: string, value: number }): JSX.Element {
    return (
      <div className="border-b-2 flex items-center justify-between mx-2">
        <p>
          {label}
        </p>
        <p>
          {value}
          {" " + "INR"}
        </p>
      </div>
    )

  }
  return (
    <Card title="Balance">
      <BalanceItem label="Unlocked Balance" value={amount / 100}></BalanceItem>
      <BalanceItem label="Total locked Balance" value={locked / 100}></BalanceItem>
      <BalanceItem label="Total Balance" value={(amount + locked) / 100}></BalanceItem>
    </Card>
  )


}

