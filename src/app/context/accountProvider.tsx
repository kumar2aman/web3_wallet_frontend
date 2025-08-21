"use client"

import React, { createContext, useContext, useState } from "react";

interface AccountContext {
  account: string | undefined;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
}

 const AccountContext = createContext<AccountContext | null>(null);

export function Contextprovider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [account, setAccount] = useState<string>('Account 1');

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}


export const useAccount = () => useContext(AccountContext)