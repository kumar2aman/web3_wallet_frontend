import React from 'react'
import Dashboard from '../components/dashboard'
import { Contextprovider } from '../../lib/accountProvider'

function page() {
  return (
   
   <Contextprovider>
 <Dashboard/>
   </Contextprovider>
  
  )
}

export default page