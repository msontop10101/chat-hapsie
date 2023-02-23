import React, { useState, useEffect, useRef } from 'react'
import { BiSend } from 'react-icons/bi'
import ChatMessage from '../components/ChatMessage'

const Chat = () => {
  const [input, setInput] = useState()
  const [loading, setLoading] = useState(false)
  const [chatLog, setChatLog] = useState([
    //    {
    //   user: 'me',
    //   message: 'I want to use chatgpt today'
    // },
    // {
    //   user: 'gpt',
    //   message: 'How can i help you?'
    // }
  ])
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      let chatLogNew = [...chatLog, { user: 'me', message: `${input}` }]
      const message = input;
      console.log(input)

      setInput("")
      setChatLog(chatLogNew)
      setLoading(true)

      const response = await fetch('https://miro-app.herokuapp.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message, //: messages
        })
      }).catch(error => { setLoading(false); console.log('Error!') });
      const data = await response.json();
      setChatLog([...chatLogNew, { user: 'gpt', message: `${data.data.message}` }])
      setLoading(false)
      console.log(data.data.message)
    }
  }


  return (
    <div className='bg-red-500 h-screen'>
      <div>
        <div className='bg-red-500 h-[5vh]'>Hapsie</div>
        <div className='flex'>
          <div className='bg-blue-500 w-[30%] h-[90vh] hidden md:block'>Chat sidebar containing the cunny carly image and title -- desktop view only</div>
          <div className='bg-[whitesmoke] w-full md:w-[70%] h-[90vh] flex flex-col justify-between'>
            <div className='h-[80vh] bg-gray-300'>
              <div className='h-full overflow-y-auto'>
                {chatLog.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
                <div ref={bottomRef} />
              </div>
            </div>
            <div className='h-[10vh] py-4 bg-red-500'>
              <form onSubmit={handleSubmit} className='flex justify-center'>
                <div className='flex justify-center items-center bg-white w-[80%] border-2 border-blue-500 rounded-xl pr-2'>
                  <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your question' className='w-[100%] h-[40px] rounded-xl px-2' style={{outline: 'none'}}/>
                  <button type='submit'><BiSend size='1.8rem' className='text-blue-500' /></button>
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