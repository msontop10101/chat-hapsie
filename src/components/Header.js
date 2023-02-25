import React from 'react'
import hapsie from '../assest/hapsielogo.png'

const Header = () => {
  return (
      <div className='flex justify-center h-[10vh]'>
        <img src={hapsie} alt='logo' width={100} height={100} />
    </div>
  )
}

export default Header