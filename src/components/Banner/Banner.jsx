import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
    return (
        <div className='z-1 relative bg-[url(./assets/banner.png)] bg-cover bg-center bg-no-repeat md:py-[257px] py-[50px]'>

            <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'> </div>

            <Container>
                <h1 className='md:w-[842px] w-[272px] font-primary md:text-[64px] font-bold text-white ml-[65px] md:ml-0'>We exist since 1975 on the oil and gas industry.</h1>

                <button className='md:py-[13px] py-[7px]  md:px-[40px] px-[20px] bg-[#F40404] text-white font-semibold font-primary md:text-[16px] text-[8px] mt-[31px] cursor-pointer border border-red-700 hover:bg-transparent transition duration-500 hover:text-red-700 md:ml-0 ml-[150px]'>LEARN MORE</button>
            </Container>



        </div>
    )
}

export default Banner