import React from 'react'

const ChatMessage = ({ message }) => {
  return (
    <>
          <div className={`${message.user === 'gpt' ? 'flex justify-start gap-2 my-1 rounded-xl' : 'flex justify-end gap-2 my-1 rounded-xl'}`}>
              <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
                  <div className='chat-message-center'>
                      <div className='message'>
                          {message.message}
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ChatMessage