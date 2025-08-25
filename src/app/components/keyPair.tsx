"use client"

import React, { useEffect, useState } from "react";
import { Copy } from "lucide-react";
import axios from "axios";


interface KeyPairProp {
  title: string;
}

function KeyPair({ title }: KeyPairProp) {
  const [key, setKey] = useState<string>();

  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const featchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/wallet/createhdwallet"
        );

        const publicKey = response.data;
          setKey(publicKey.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    featchData()
  });

  return (
    <div className="flex flex-col gap-y-7 mt-24 px-12">
      <div className="font-ubuntu text-2xl">public key for {title}</div>
      
        {loading ? (<div>loading</div>) : (
            <div className="relative w-[25vw]">
             <div className=" w-[25vw] px-3 py-2 pr-10 border border-gray-400 rounded outline-none">
               {key}
            </div>
        <Copy
          className="absolute right-3 top-1/5 translate-1 text-gray-500 cursor-pointer hover:text-black"
          size={18}
        /> 
        </div>   
        ) }

   
           
      </div>
  
  );
}

export default KeyPair;




