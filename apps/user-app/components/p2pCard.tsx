"use client"
import { Button } from "@repo/ui/button";
import Card from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import Center from "@repo/ui/center"

export default function P2PCard(
  // { onNumberChange }: { onNumberChange(number: string): string }
) {
  return <Center>
    <Card title="P2P Transfer">
      <TextInput label="Phone Number" placeholder="Enter the number" onChange={(e) => {
        const fzfNumbers = onNumberChange(e.target.value);
      }}></TextInput>
      <TextInput label="Amount" placeholder="Enter the amount" onChange={() => { }}></TextInput>
      <Button onClick={() => {

      }}>Proceed</Button>
    </Card>
  </Center>
}
