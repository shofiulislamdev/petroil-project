import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import footerLogo from "../../assets/footerLogo.png"
import { FiMail } from "react-icons/fi";
import { MdPhoneInTalk } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaFacebook, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";






const Footer = () => {
  return (
    <div className='py-[150px] bg-[#1F1F1F]'>
        <Container>
            <Flex className="justify-between">
                <div>
                    <img src={footerLogo} alt="" />

                    <Flex className="items-center mt-[33px]">
                        <FiMail className='text-white' />

                        <p className='text-white ml-[5px]'>mail@yourcompany.com</p>


                    </Flex>

                    <Flex className="items-center mt-[15px]">
                        <MdPhoneInTalk className='text-white' />

                        <p className='text-white ml-[5px]'>+896 120 5889 (Toll free)</p>


                    </Flex>

                    <Flex className="items-center mt-[15px]">
                        <ImLocation2 className='text-white' />

                        <p className='text-white ml-[5px]'>101 Baker Street, New York, USA, 12345</p>


                    </Flex>


                    <Flex className="space-x-[12px] mt-[35px]">
                        <FaFacebook className='text-red-700 text-[29px] cursor-pointer hover:text-blue-700' />
                        <AiFillTwitterCircle className='text-red-700 text-[29px] cursor-pointer hover:text-blue-700' />
                        <FaLinkedinIn className='text-red-700 text-[29px] cursor-pointer hover:text-blue-700' />

                        <FaInstagramSquare className='text-red-700 text-[29px] cursor-pointer hover:text-blue-700' />





                    </Flex>

                </div>

                <div>
                    <ul className='text-white'>
                        <li className='font-primary font-bold text-[16px]'>Company</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer hover:text-green-500'>Home</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-green-500'>About</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-green-500'>Services</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-green-500'>Gallery</li>
                    </ul>
                </div>

                <div>
                    <ul className='text-white'>
                        <li className='font-primary font-bold text-[16px]'>Others</li>
                        <li className='font-primary font-normal text-[14px] mt-[21px] cursor-pointer hover:text-green-500'>Blog</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-green-500'>Contact</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-green-500'>Terms</li>
                        <li className='font-primary font-normal text-[14px] mt-[15px] cursor-pointer hover:text-green-500'>Privacy</li>
                    </ul>
                </div>

                <div>
                    <p className='font-primary font-bold text-[16px] text-white'>Certificate</p>
                    <Flex className="mt-[27px]">
                        <div className='py-[5px] bg-white w-[110px] rounded-[4px]'>
                            <p className='font-primary font-bold text-[24px] text-[#008AD8] ml-[9px]'>ISO 88</p>
                            <p className='font-primary font-medium text-[8px] text-[#008AD8] ml-[9px]'>Environmentally Safe</p>
                        </div>

                        <div className='p-[10px] bg-white w-[110px] rounded-[4px] ml-[5px]'>
                            <p className='font-primary font-bold text-[14px] mt-[5px] text-[#980077]'>Liquid <span className='text-[#009818]'>Green</span></p>
                        </div>
                    </Flex>
                </div>
            </Flex>

        </Container>
    </div>
  )
}

export default Footer