import React from 'react'
import MessageWindow from './MessageWindow'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='p-6 flex justify-center items-center'>
      <div className='flex flex-col gap-4 items-center w-[75vh]'>
        <h1 className='text-center text-3xl font-bold'>Message Board</h1>
        <a href="https://github.com/Devansh-Baghel/message-board" className=''>
          <button className='btn btn-neutral'>🔗 Source Code</button>
        </a>
        <MessageWindow />
        <Link to="/new" className=''>
          <button className='btn btn-neutral'>+ Add Message</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
