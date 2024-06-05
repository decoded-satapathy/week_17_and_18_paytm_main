import Card from "@repo/ui/card"
import Center from "@repo/ui/center"
enum OnRampStatus {
  Success,
  Failure,
  Processing,
}

interface OnRampTransactionInterface {
  id: number;
  status: OnRampStatus;
  amount: number;
  provider: string;
  startTime: Date;
}

export default function({ OnRampTransactions }: { OnRampTransactions: OnRampTransactionInterface[] }): JSX.Element {
  if (OnRampTransactions.length === 0) {
    return (
      <Card title="Recent Transcations">
        <Center>
          <p className="my-10">No Recent transactions</p>
        </Center>
      </Card >
    )
  } else {
    return (
      <Card title="Recent Transcations">
        <div>
          {OnRampTransactions.map(transaction => (
            <div key={transaction.id}>
              <div>
                <div className="text-sm">
                  Received INR
                </div>
                <div className="text-slate-600 text-xs">
                  {transaction.startTime.toDateString()}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                + Rs {transaction.amount / 100}
              </div>
            </div>
          ))}
        </div>
      </Card>
    )
  }

}
