import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Supplier = () => {
    return (
        <div className='pt-[78px] pb-[100px]'>

            <Container>

                <div className="md:flex items-center">
                    <h2 className='font-primary font-bold md:text-[48px] text-[20px] md:w-[289px] w-[211px] md:leading-[72px] leading-[25px] ml-[75px] md:ml-0'>The biggest supplier on the country</h2>

                    <p className='md:w-[651px] w-[300px] font-primary font-medium text-[16px] text-[#6C6C6C] ml-[0px] md:ml-[178px] md:mt-[0px] mt-[20px] ml-[40px] md:ml-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>


                </div>

            </Container>

        </div>
    )
}

export default Supplier