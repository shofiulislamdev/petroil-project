import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'
import Flex from '../Layouts/Flex'



const Navbar = () => {
    return (
        <div className='bg-[#F40404] py-[30px]'>
            <Container>

                <div className='md:flex justify-between items-center'>

                    <div>
                        <img src={logo} alt="#logo" />
                    </div>

                    <div className='md:flex items-center'>

                        <div className='md:flex items-center md:space-x-[47px] font-primary font-semibold text-[16px] text-white list-none mt-[20px] md:mt-0 md:ml-[0px] ml-[150px]'>
                            <li>
                                <a className='hover:text-green-500' href="">Home</a>
                            </li>

                            <li className='hover:text-green-500'>
                                <a href="">About</a>
                            </li>

                            <li>
                                <a className='hover:text-green-500' href="">Services</a>
                            </li>

                            <li>
                                <a className='hover:text-green-500' href="">Gallery</a>
                            </li>

                            <li>
                                <a className='hover:text-green-500' href="">Blog</a>
                            </li>
                            
                        </div>
                        
                        <button className='md:ml-[72px] mt-[20px] md:mt-0 cursor-pointer md:py-[13px] py-[7px] md:px-[32px] px-[16px] border-2 text-white font-primary font-semibold md:text-[16px] text-[8px] hover:bg-blue-500 md:ml-[0px] ml-[150px]'>CONTACT</button>
                    </div>
                    
                </div>

            </Container>
        </div>


    )
}

export default Navbar