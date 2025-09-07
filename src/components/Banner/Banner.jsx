import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
    return (
        <div className='z-1 relative bg-[url(./assets/banner.png)] bg-cover bg-center bg-no-repeat py-[257px]'>

            <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'> </div>

            <Container>
                <h1 className='w-[842px] font-primary text-[64px] font-bold text-white'>We exist since 1975 on the oil and gas industry.</h1>

                <button className='py-[13px] px-[40px] bg-[#F40404] text-white font-semibold font-primary text-[16px] mt-[31px] cursor-pointer'>LEARN MORE</button>
            </Container>



        </div>
    )
}

export default Banner