"use client"

import React, { createContext, useContext, useState } from "react";

interface AccountContext {
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
}

 const accountContext = createContext<AccountContext | null>(null);

export function Contextprovider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [account, setAccount] = useState("");

  return (
    <accountContext.Provider value={{ account, setAccount }}>
      {children}
    </accountContext.Provider>
  );
}


export const useAccount = () => useContext(accountContext)