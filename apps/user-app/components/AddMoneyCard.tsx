"use client"
import Card from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Select } from "@repo/ui/select"
import { Button } from "@repo/ui/button"
import Center from "@repo/ui/center";
import { useState } from "react";
import db from "@repo/db/client";
import { useSession } from "next-auth/react";

export default function ({ addMoney }: { addMoney(currentBank: string, amount: number): void }) {
  const session = useSession();
  const supportedBanks: {
    name: string,
    redirect_URL: string
  }[] = [
      {
        name: "HDFC",
        redirect_URL: "https://netbanking.hdfcbank.com"
      },
      {
        name: "Axis Bank",
        redirect_URL: "https://www.axisbank.com/"
      }
    ]
  const [redirectUrl, setRedirectUrl] = useState<string>(supportedBanks[0]?.redirect_URL || "")
  const [amount, setAmount] = useState<number>(0);
  const [currentBank, setCurrentBank] = useState<string>(supportedBanks[0]?.name || "")

  function onSelect(value: string) {
    setRedirectUrl(supportedBanks.find(bank => bank.name === value)?.redirect_URL || "");
    setCurrentBank(value);
  }

  function amountChange(amount: string) {
    // do something to the amount state variable 
    setAmount(Number(amount));

  }

  function onClickAddMoney() {
    addMoney(currentBank, amount);
    window.location.href = redirectUrl;
  }


  return (
    <Card title="Add Money">
      <Center>
        <TextInput placeholder="Amount" label="Amount"
          onChange={amountChange}
        ></TextInput>
      </Center>
      <div className="py-4 text-left">
        Bank
      </div>
      <Center>
        <Select options={supportedBanks.map(bank => ({
          key: bank.name,
          value: bank.redirect_URL
        }))} onSelect={onSelect} ></Select>
        <div className="flex justify-center pt-4">
          <Button onClick={() => onClickAddMoney()}>
            Add Money
          </Button>
        </div>
      </Center>
    </Card >
  );
}

