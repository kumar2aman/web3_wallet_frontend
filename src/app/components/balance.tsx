import React from 'react'

interface BalanceProp {
    title: string;
    amount:string;
}

function Balance({title, amount}:BalanceProp) {
  return (
   <div className="bg-gray-600 p-8 rounded-lg mb-6">
  <h2 className="text-2xl mb-2 font-ubuntu">{title} Balance</h2>
  <p className="text-2xl font-semibold">{amount}</p>
</div>
  )
}

export default Balance