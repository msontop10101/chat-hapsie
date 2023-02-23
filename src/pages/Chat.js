import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'

const Chat = () => {
  const [input, setInput] = useState()
  return (
    <div className='bg-red-500 h-screen'>
      <div>
        <div className='bg-red-500 h-[5vh]'>Hapsie</div>
        <div className='flex'>
          <div className='bg-blue-500 w-[30%] h-[90vh] hidden md:block'>Chat sidebar containing the cunny carly image and title -- desktop view only</div>
          <div className='bg-[whitesmoke] w-full md:w-[70%] h-[90vh] flex flex-col justify-between'>
            <div className='h-[70vh] bg-gray-300'>This the the chat display section</div>
            <div className='h-[10vh] bg-red-500'>
              <form className='flex justify-center'>
                <div className='flex justify-center items-center bg-white w-[80%] border-2 border-blue-500 rounded-xl pr-2'>
                  <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your question' className='w-[100%] h-[40px] rounded-xl px-2' style={{outline: 'none'}}/>
                  <button type='submit'><BiSend size='1.8rem' /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='bg-blue-500 h-[5vh]'>footer</div>
      </div>
    </div>
  )
}

export default Chat