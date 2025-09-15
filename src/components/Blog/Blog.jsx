import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import { FaChevronRight } from "react-icons/fa";


const Blog = () => {
    return (
        <div className='pt-[110px] pb-[162px] bg-[#F0F0F0]'>
            <Container>
                <Flex className='justify-between'>
                    <div className='relative bg-[url(./assets/blogOne.png)] bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-blue-700 hover:text-red-700'>Read more</button>
                    </div>

                    <div className='relative bg-[url(./assets/blogTwo.png)] bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-blue-700 hover:text-red-700'>Read more</button>
                    </div>

                    <div className='relative bg-[url(./assets/blogThree.png)] bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-blue-700 hover:text-red-700'>Read more</button>
                    </div>

                </Flex>

                <Flex className="items-center justify-end mt-[28px]">
                    <p className='font-primary font-bold text-[16px]'>MORE FROM THE BLLOG</p>
                    <FaChevronRight className='ml-[5px]' />

                </Flex>

                

            </Container>
        </div>
    )
}

export default Blog