import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  },
  // TODO: can u figure out what the type should be here?
  //
  onSignin: any,
  onSignout: any
}

export const Appbar = ({
  user,
  onSignin,
  onSignout
}: AppbarProps) => {
  return <div className="flex justify-between border-b px-4">
    <div >
      <div onClick={() => { window.location.href = "/"; }} className="cursor-pointer text-5xl">
        <div className="flex flex-col justify-center text-5xl font-bold text-purple-400 my-4 mr-4 py-3 px-4 border-2  border-indigo-300 rounded-full bg-gradient-to-r from-purple-200  to-white">
          PayPulse
        </div>
        <div className="text-lg flex flex-col justify-center text-md  text-purple-300 pb-2  pr-3 italic font-semibold">
          A new and better way to pay
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center pt-2">
      <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
    </div>
  </div>
}
