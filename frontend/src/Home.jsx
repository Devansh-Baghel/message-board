import React from 'react'

function Home() {
  return (
    <div className='p-6'>
      <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-center text-3xl font-bold'>Message Board</h1>
        <a href="https://github.com/Devansh-Baghel/message-board" className=''>
          <button className='btn btn-neutral'>🔗 Source Code</button>
        </a>
      </div>
    </div>
  )
}

export default Home
