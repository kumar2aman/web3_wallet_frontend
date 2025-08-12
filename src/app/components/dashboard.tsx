import React from "react";
import Balance from "./balance";
import SideBar from "./sideBar";
import KeyPair from "./keyPair";

function Dashboard() {
  return (
    <>
      <div className="flex  text-white bg-background h-screen overflow-y-auto">
       <SideBar/>
       <div>
        
       </div>
        <div className=" w-full p-24 ">
          <h1 className="text-3xl font-bold mb-6 font-ubuntu">Dashboard</h1>
          <Balance title="solana" amount="11 SOL" />
          <Balance title="etherem" amount="7 ETH" />
          <KeyPair title= "sonlana" key= "123"/>
          <KeyPair title= "etherem" key= "321"/>
          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
