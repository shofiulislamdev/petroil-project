import React from 'react'
import Flex from '../Layouts/Flex'
import BackgroundImage from '../Layouts/BackgroundImage'

const Services = () => {
    return (
        <div className='pt-[28px]'>

            <Flex className='items-center'>
                <div className='w-[50%]'>
                    <Flex className="justify-end mr-[150px]">
                        <div>
                            <p className='font-primary font-bold text-[64px]'>Our Services</p>
                            <p className='w-[405px] font-primary font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </Flex>
                </div>

                <BackgroundImage className="bg-[url(./assets/servicesOne.png)]">
                    <div className='relative z-1 ml-[116px]'>
                        <p className='font-primary font-bold text-[36px] text-white'>Modern natural oil and gas refineries.</p>
                        <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer hover:bg-blue-700 hover:text-red-700'>Learn More</button>

                    </div>
                </BackgroundImage>

            </Flex>

            <Flex className='items-center'>

                <BackgroundImage className="bg-[url(./assets/servicesTwo.png)]">
                    <div className='relative z-1 ml-[116px]'>
                        <p className='font-primary font-bold text-[36px] text-white'>Supply of national industries.</p>
                        <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer hover:bg-blue-700 hover:text-red-700'>Learn More</button>
                    </div>
                </BackgroundImage>

                <BackgroundImage className="bg-[url(./assets/servicesThree.png)]">
                    <div className='relative z-1 ml-[116px]'>
                        <p className='font-primary font-bold text-[36px] text-white'>National fuel distribution and supply.</p>
                        <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer hover:bg-blue-700 hover:text-red-700'>Learn More</button>
                    </div>
                </BackgroundImage>

            </Flex>



        </div>
    )
}

export default Services