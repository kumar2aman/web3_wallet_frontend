import React from "react";
import { Copy } from "lucide-react";


interface KeyPairProp {
    title:string;
    key:string;
}

function KeyPair({title, key}:KeyPairProp) {
  return (
    <div className="flex flex-col gap-y-7 mt-24 px-12">
      <div className="font-ubuntu text-2xl ">public key for {title}</div>
     
        <div className="relative">
          <input
            type="text"
            placeholder="Enter key"
            className=" w-full px-3 py-2 pr-10 border border-gray-400 rounded outline-none"
          />
          <Copy
            className="absolute right-3 top-1/5 translate-1 text-gray-500 cursor-pointer hover:text-black"
            size={18}
          />
        </div>
     
    </div>
  );
}

export default KeyPair;
