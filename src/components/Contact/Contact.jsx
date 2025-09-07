import React from 'react'
import Flex from '../Layouts/Flex'

const Contact = () => {
  return (
    <div className='py-[45px] bg-[#F40404] border-b-4 border-amber-500'>
        <Flex className="justify-center">
            <p className='font-primary font-bold text-[36px] text-white'>Want to join as member branch in your area?</p>
            <button className='py-[13px] px-[32px] bg-transparent border-2 text-white font-primary font-semibold ml-[40px] cursor-pointer hover:bg-blue-500'>CONTACT</button>
        </Flex>
    </div>
  )
}

export default Contact