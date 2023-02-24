import React from 'react'
import '../App.css'
import cunning from '../assest/cunning.png'
import { RiUser5Fill } from 'react-icons/ri'

const ChatMessage = ({ message }) => {
  return (
    <>
          <div className={`${message.user === 'gpt' ? 'flex flex-row md:flex-col justify-start md:items-center my-1 rounded-xl' : 'flex flex-row md:flex-col-reverse justify-end md:items-center my-1 rounded-xl'}`}>
              {message.user === 'gpt' && <div className='md:w-full md:flex items-center'><img src={cunning} width={50} height={50} alt='cunning carly'/></div>}
              <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
                  <div className='chat-message-center'>
                      <div className='message'>
                          {message.message}
                      </div>
                  </div>
              </div>
        {message.user !== 'gpt' && <div className='md:w-full md:flex justify-end'><RiUser5Fill size='2.5rem' color='#3B82F6' style={{marginBottom: "-3px"}}/></div>}
          </div>
    </>
  )
}

export default ChatMessage