"use client"
import React, { useEffect, useState } from "react";
import { Pencil, Plus, Settings } from "lucide-react";
function SideBar() {


    const data  = [" A1", "A2", "A3", "A4", "A5", "A6", "A7","A8","A9", "A10"] 

const [account, setAccount] = useState<string[]>() 

useEffect(()=>{
    setAccount(data)
})



  return (
    <div className="flex flex-col justify-between items-center border-r-2 border-gray-600 w-20 p-2 font-bold font-ubuntu">
        <div className="overflow-y-scroll ">
 <h3 className="mt-4 underline">Account</h3>
      {account?.map((e)=>(
        <div className=" flex flex-col justify-center   w-16 h-16 bg-blue-300  rounded-[100%] text-center mt-4 border-3 border-blue-500 text-black cursor-pointer hover:border-4 hover:border-white">
            {e}
        </div>
      ))}
        </div>
     
      <div className="flex flex-col justify-between items-center gap-4 border-t-2 pt-7 w-full mb-10">
        <div className="p-3 rounded-xl bg-transparent hover:bg-white group cursor-pointer transition-colors duration-200">
          <Plus className="text-white group-hover:text-black size-6" />
        </div>

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
