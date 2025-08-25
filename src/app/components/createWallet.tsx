"use client";
import { useEffect, useState } from "react";
import axios from "axios";
function CreateWallet() {
  const [data, setData] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/wallet/createmnemonic"
        );

        const monic = response.data;
        setData(monic.data);
        localStorage.setItem("monic", JSON.stringify(monic.data));
      } catch (error) {
        console.error("Error fetching mnemonic:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch, regardless of success or failure
      }
    };
    fetchData();
  }, []);


  const handleCopy = async () => {
    const mnemonic = localStorage.getItem("monic");
    console.log("mnemonic", mnemonic);
    if (mnemonic) {
     await axios.post("http://localhost:8080/api/v1/wallet/createhdMnemonic", JSON.parse(mnemonic) );
    }
  };


  return (
    <div className="flex flex-col items-center w-[50vw] h-[80vh]">
      <h1 className="text-white font-ubuntu text-6xl font-bold">
        Recovery Phrase
      </h1>
      <h4 className="text-yellow-400 font-ubuntu font-bold mt-4 leading-10">
        Take a screenshot or copy it <br />
        <span className="text-red-600/80">Do not share it with anyone!!</span>
      </h4>

      {/* Conditionally render based on the loading state */}
      {isLoading ? (
        <div className="mt-24 text-white">Loading recovery phrase...</div>
      ) : (
        <div className=" grid grid-cols-4 items-center justify-center  gap-5 mt-24 bg-gray-600 border-2 p-4 rounded-xl">
          {data?.map((e) => (
            <div className=" flex items-center  justify-center font-ubuntu  p-4 h-14  border-2  bg-blue-300  rounded-xl">
              {e}
            </div>
          ))}
        </div>
      )}

      <div className="mt-12">
        <button onClick={handleCopy} className="bg-white cursor-pointer w-62 h-16 rounded-xl text-2xl font-ubuntu font-bold border-2 hover:bg-pink-400/80">
          Continue
        </button>
      </div>
    </div>
  );
}

export default CreateWallet;
