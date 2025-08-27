import React from 'react'
import Signup from '../components/signup'
import { Contextprovider } from '@/lib/passwordProvider'

function page() {
  return (
    <Contextprovider>

  <div className="bg-background h-screen w-full flex justify-center items-center">
         <Signup/>
      </div>
    </Contextprovider>
  
   
  )
}

export default page