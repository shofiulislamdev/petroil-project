import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'
import Flex from '../Layouts/Flex'



const Navbar = () => {
    return (
        <div className='bg-[#F40404] py-[30px]'>
            <Container>

                <Flex className='justify-between items-center'>

                    <div>
                        <img src={logo} alt="#logo" />
                    </div>

                    <Flex className='items-center'>

                        <Flex className='items-center space-x-[47px] font-primary font-semibold text-[16px] text-white list-none'>
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
                            
                        </Flex>
                        
                        <button className='ml-[72px] cursor-pointer py-[13px] px-[32px] border-2 text-white font-primary font-semibold text-[16px] hover:bg-blue-500  '>CONTACT</button>
                    </Flex>
                    
                </Flex>

            </Container>
        </div>


    )
}

export default Navbar