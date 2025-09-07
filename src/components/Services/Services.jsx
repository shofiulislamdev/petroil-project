import React from 'react'
import Flex from '../Layouts/Flex'

const Services = () => {
    return (
        <div className='pt-[28px]'>

            <Flex className='items-center'>
                <div className='w-[50%]'>
                    <div className='ml-[390px]'>
                        <p className='font-primary font-bold text-[64px]'>Our Services</p>
                        <p className='w-[405px] font-primary font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>

                <div className='w-[50%] relative bg-[url(./assets/servicesOne.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] after:absolute after:content[""] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60'>

                    <div className='relative z-1 ml-[116px]'>
                        <p className='font-primary font-bold text-[36px] text-white'>Modern natural oil and gas refineries.</p>
                        <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer'>Learn More</button>

                    </div>



                </div>

            </Flex>

            <Flex className='items-center'>

                <div className='w-[50%] relative bg-[url(./assets/servicesTwo.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] after:absolute after:content[""] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60'>

                    <div className='relative z-1 ml-[116px]'>
                        <p className='font-primary font-bold text-[36px] text-white'>Supply of national industries.</p>
                        <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer'>Learn More</button>
                    </div>
                </div>

                <div className='w-[50%] relative bg-[url(./assets/servicesThree.png)] bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] after:absolute after:content[""] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60'>

                    <div className='relative z-1 ml-[116px]'>
                        <p className='font-primary font-bold text-[36px] text-white'>National fuel distribution and supply.</p>
                        <button className='bg-[#F40404] mt-[19px] py-[14px] px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer'>Learn More</button>
                    </div>
                </div>

            </Flex>



        </div>
    )
}

export default Services