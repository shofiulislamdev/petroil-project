import React from 'react'

const BackgroundImage = ({children, className}) => {
  return (
    <div className={`${className} w-[50%] relative bg-cover bg-center bg-no-repeat pt-[147px] pb-[139px] after:absolute after:content[""] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60`}>{children}</div>
  )
}

export default BackgroundImage