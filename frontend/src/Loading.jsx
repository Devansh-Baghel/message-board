import React from 'react'
import PulseLoader from "react-spinners/PulseLoader"

function Loading() {
  return (
    <div className="flex border-neutral border-4 rounded-xl h-[460px] w-full items-center justify-center"> 
      <PulseLoader color='#291334' size={20} />
    </div>
  )
}

export default Loading
