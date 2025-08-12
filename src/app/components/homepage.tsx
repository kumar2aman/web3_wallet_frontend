import React from "react";

function Homepage() {
  return (
    <div className="bg-background h-screen w-full flex flex-col  items-center ">
      <div className="mt-24 font-bold font-ubuntu text-[20vh] oldstyle-nums bg-gradient-to-b from-red-300 via-pink-600 to-red-600 bg-clip-text text-transparent">
        Web3Pocket
      </div>
      <div className="mt-2 font-mono text-4xl text-gray-200">
        "Your Gateway to the Decentralized World"
      </div>
      <div className="mt-30">
        <button className="bg-white  cursor-pointer w-62 h-16 rounded-xl text-2xl font-ubuntu font-bold border-2 hover:bg-pink-300 ">
          Continue {"-->"}
        </button>
      </div>
    </div>
  );
}

export default Homepage;
