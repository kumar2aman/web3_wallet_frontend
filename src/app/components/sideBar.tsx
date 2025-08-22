"use client";
import React, { useEffect, useState } from "react";
import { Pencil, Settings } from "lucide-react";

import { CreateAccount } from "./createAccount";
import { useAccount } from "../../lib/accountProvider";

function SideBar() {
  const [data, setData] = useState<string[]>([]);

  const users = useAccount();

  const account = users?.account;

  if (!account) return null;

  useEffect(() => {
    const nameParts = account.trim().split(" ");
    const initials = nameParts
      .map((name) => name.charAt(0).toUpperCase())
      .join("");

    setData((data) => [...data, initials]);

    console.log(data);
  }, [account]);

  return (
    <div className="flex flex-col justify-between items-center border-r-2 border-gray-600 w-20 p-2 font-bold font-ubuntu">
      {data && (
        <div className="overflow-y-scroll  hide-scrollbar">
          <h3 className="mt-4 underline">Account</h3>
          {data?.map((e) => (
            <div className=" flex flex-col justify-center   w-16 h-16 bg-blue-300  rounded-[100%] text-center mt-4 border-3 border-blue-500 text-black cursor-pointer hover:border-4 hover:border-white">
              {e}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col justify-between items-center gap-4 border-t-2 pt-7 w-full mb-10">
        <CreateAccount />

        <div className="p-3 rounded-xl bg-transparent hover:bg-white group cursor-pointer transition-colors duration-200">
          <Pencil className="text-white group-hover:text-black size-6" />
        </div>

        <div className="p-3 rounded-xl bg-transparent hover:bg-white group cursor-pointer transition-colors duration-200">
          <Settings className="text-white group-hover:text-black size-6" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
