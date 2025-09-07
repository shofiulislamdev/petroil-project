import React from 'react'
import Container from '../Layouts/Container'
import learn from "../../assets/learn.png"
import Flex from '../Layouts/Flex'

const Learn = () => {
    return (
        <div className='py-[136px] bg-[#F0F0F0]'>
            <Container>

                <Flex>

                    <div className='py-[100px] bg-[#F40404] w-[413px]'>
                        <p className='w-[262px] font-bold font-primary text-[36px] text-white ml-[74px]'>Learn more about our company</p>
                    </div>

                    <div className='relative'>
                        <img src={learn} alt="" />
                        <button className='bg-[#FFFFFF] mt-[19px] py-[14px] px-[30px] text-[#F40404] cursor-pointer font-primary font-semibold text-[16px] absolute top-[168px] left-[282px]'>Learn More</button>

                    </div>


                </Flex>

            </Container>
        </div>
    )
}

export default Learn