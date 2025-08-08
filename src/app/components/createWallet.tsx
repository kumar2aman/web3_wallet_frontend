"use client"
import { useEffect, useState } from "react"


function CreateWallet() {


  const monic = ["hello", "kgnd", "sdvasdgads", "dsvsdvsd", "asvasvadsvba", "sdvsdvds","dsgbsdgsd","dsbdsbdsb","fdbdfbdsfb","sdbdsbsdb","dfbfnbdsf", "sdbsdfbnsdn"]

  const [data, setData] = useState<String[]>()

  useEffect(()=>{
  setData(monic)
  },[])



  return (
  
   <div className=" flex flex-col items-center  w-[50vw] h-[80vh] ">
 <h1 className="text-white font-ubuntu text-6xl font-bold ">Recovery Phrase</h1>
 <h4 className="text-yellow-400 font-ubuntu font-bold mt-4 leading-10 ">Take a screenShot or copy it <br/><span className="text-red-600/80 ">Do not share it with anyone!!</span> </h4>

 <div className=" grid grid-cols-4 items-center justify-center  gap-5 mt-24 bg-gray-600 border-2 p-4 rounded-xl">

     {data?.map((e)=>(
      
      <div className=" flex items-center  justify-center font-ubuntu  p-4 h-14  border-2  bg-blue-300  rounded-xl">
        {e}
      </div>
     ))}

     
 
   </div>

   <div className="mt-12">
      <button className="bg-white  cursor-pointer w-62 h-16 rounded-xl text-2xl font-ubuntu font-bold border-2 hover:bg-pink-400/80 ">Continue</button>
     </div>
  
     </div> 

  )
}

export default CreateWallet