"use client";

import { createContext, useContext, useState } from "react";

interface PasswordContext {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const passwordContext = createContext<PasswordContext | null>(null);

export function Contextprovider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [password, setPassword] = useState("");

  return (
    <passwordContext.Provider value={{ password, setPassword }}>
      {children}
    </passwordContext.Provider>
  );
}

export const usePassword = () => useContext(passwordContext);
