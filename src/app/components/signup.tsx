"use client";

import { usePassword } from "@/lib/passwordProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Signup() {

  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const user = usePassword();

  if (!user) return null;

  const handleSignup = () => {
    user?.setPassword(password);
   
    router.push("/createwallet");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center  py-7  gap-12 px-10 w-[30vw] h-[50vh] border-2 border-blue-600 rounded-3xl shadow-lg shadow-blue-600 ">
        <h1 className="text-blue-300 font-ubuntu text-6xl font-bold  ">
          Signup
        </h1>
        <div className="w-full">
          <div className=" mb-12  ">
            <h2 className="mb-4 font-ubuntu text-xl text-white">username</h2>
            <input
              type="text"
              className="w-full h-12 bg-white rounded-2xl border-black border-3 px-3 font-ubuntu font-semibold text-xl"
            />
          </div>

          <div className=" ">
            <h2 className="mb-4 font-ubuntu text-xl text-white">password</h2>
            <input
            value={password}
              onChange={(e)=>setPassword(e.target.value)}

              type="password"
              className="w-full h-12 bg-white rounded-2xl border-black border-3 px-3 font-ubuntu font-semibold text-xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <button onClick={handleSignup} className="bg-white cursor-pointer w-62 h-16 rounded-xl text-2xl font-ubuntu font-bold border shadow-md shadow-white hover:bg-pink-400/80 ">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Signup;
