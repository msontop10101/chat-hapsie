import React, { useState, useEffect, useRef } from 'react'
import { BiSend } from 'react-icons/bi'
import { ThreeDots } from 'react-loader-spinner'
import { AiFillCloseCircle } from 'react-icons/ai'
import ChatMessage from '../components/ChatMessage'
import cunningfull from '../assest/CunningCarly-02.png'
import hapsie from '../assest/hapsielogo.png'


const Chat = () => {
  const [input, setInput] = useState()
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [chatLog, setChatLog] = useState([
    {
      user: 'gpt',
      message: 'Hi there! My name is Cunning Carly and i\'m 11 years old. I love helping people understand the impact of climate change and how to protect our enviroment. Do you have any questions about climate change or sustainability?'
    }
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

      const response = await fetch('https://hapsie.herokuapp.com/api/chat', {
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
    <div className='h-screen'>

      {showModal && <div className="bg-slate-800 z-50 bg-opacity-50 flex md:hidden justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-white px-4 py-4 rounded-3xl text-center w-[90%]">
          <div className='flex justify-between items-center py-4'>
            <p className='font-bold text-xl'>Disclaimer for Parents or Guardians</p>
            <div><AiFillCloseCircle color='rgb(239 68 68)' size='1.8rem' onClick={() => setShowModal(false)} /></div>
          </div>
          <div>
            <p className=''>This Cunning Carly chatbot is automated and is not monitored by a human in real-time. It has been trained on the latest AI to help answer questions and give guidance about bettering the environment. We have made every effort to stop it providing dangerous and inappropriate information or responses but exceptions can happen. We only suggest children use this with moderation of an adult. Any issues please email <a href='mailto:carly@hapsie.com' style={{textDecoration:'underline', color:'blue'}}>carly@hapsie.com</a> immediately.</p>
          </div>
        </div>
      </div>}
      <div>
        <div className='bg-red-500 h-[10vh] flex justify-center items-center'><a href='https://www.hapsie.com/'><img src={hapsie} alt='logo' style={{ height: "80px" }} /></a></div>

        <div className='flex'>
          <div style={{ borderRight: "2px solid rgb(59 130 246)" }} className='bg-red-500 w-[30%] h-[80vh] px-4 hidden md:block'>
            <div className='h-[65%] w-full flex justify-center'><img src={cunningfull} alt='cunningfull' /></div>
            <div className=''>
              <p className='text-white'><span className='font-semibold'>Disclaimer for Parents or Guardians:</span> This Cunning Carly chatbot is automated and is not monitored by a human in real-time. It has been trained on the latest AI to help answer questions and give guidance about bettering the environment. We have made every effort to stop it providing dangerous and inappropriate information or responses but exceptions can happen. We only suggest children use this with moderation of an adult. Any issues please email <a href='mailto:carly@hapsie.com' style={{textDecoration: 'underline',color:'blue'}} >carly@hapsie.com</a> immediately.</p>
            </div>
          </div>
          <div className='bg-white w-full md:w-[70%] h-[80vh] flex flex-col justify-between'>
            <div className='h-[80vh] flex justify-center bg-white relative'>
              <div className='w-full px-[4%] overflow-y-auto absolute bottom-0' style={{ maxHeight: '100%' }}>
                {chatLog.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
                {loading && <div><ThreeDots
                  height="20"
                  width="80"
                  radius="9"
                  color="rgb(59 130 246)"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                /></div>}
                <div ref={bottomRef} />
              </div>
            </div>
            <div className='h-[10vh] py-4 bg-white'>
              <form onSubmit={handleSubmit} className='flex justify-center'>
                <div className='flex justify-center items-center bg-white w-[80%] border-2 border-blue-500 rounded-xl pr-2'>
                  <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Say hi or ask a question!' className='w-[100%] h-[40px] rounded-xl px-2' style={{ outline: 'none' }} />
                  <button type='submit'><BiSend size='1.8rem' className='text-blue-500' /></button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='bg-red-500 h-[10vh] px-4 hidden md:flex w-full justify-end items-center'>
          <div className='w-[50%] flex'>
            <p className=' w-[50%] text-white font-semibold'>Hapsie &copy; 2023</p>
            <div className='flex w-[50%] text-right cursor-pointer'><p onClick={() => setChatLog([...chatLog,
            {
              user: 'gpt',
              message: 'I am here to help you with questions and answers about the environment, sustainable and recycling. But I can also do fun creative tasks too! For example, I can write poems, lesson plans, to do lists. I can give you step by step guides how to arrange beach cleans (for example). Talk to me and let me help you better the world around you!'
            }
            ])} className='w-full text-white'>What Can I Do?</p></div>
          </div>
        </div>
        <div className='bg-red-500 h-[10vh] justify-evenly gap-4 flex md:hidden items-center w-full'>
          <div><a href='https://www.hapsie.com/'><img src={hapsie} width={100} height={70} alt='logo' /></a></div>
          <div><p onClick={() => setChatLog([...chatLog,
          {
            user: 'gpt',
            message: 'I am here to help you with questions and answers about the environment, sustainable and recycling. But I can also do fun creative tasks too! For example, I can write poems, lesson plans, to do lists. I can give you step by step guides how to arrange beach cleans (for example). Talk to me and let me help you better the world around you!'
          }
          ])} className='text-center w-full text-white'>What Can I Do?</p></div>
          <div className='flex gap-2 text-center text-white' onClick={() => setShowModal(true)}><p>Disclaimer</p></div>
        </div>
      </div>
    </div>
  )
}

export default Chat