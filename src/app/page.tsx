import Image from "next/image";
import CreateWallet from "./components/createWallet";

export default function Home() {
  return (
      <div className="bg-[#27272a] h-screen w-full">
        <CreateWallet/>
      </div>
 
      
  );
}
