import React from "react";
export default function ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {children}
    </div>
  )
}
