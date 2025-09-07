import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

import logoOne from "../../assets/logoOne.png"
import logoTwo from "../../assets/logoTwo.png"
import logoThree from "../../assets/logoThree.png"
import logoFour from "../../assets/logoFour.png"

const Logo = () => {
  return (
    <div className='py-[117px]'>
        <Container>
            <Flex className="justify-between">
                <img src={logoOne} alt="" />
                <img src={logoTwo} alt="" />
                <img src={logoThree} alt="" />
                <img src={logoFour} alt="" />

            </Flex>
        </Container>
    </div>
  )
}

export default Logo