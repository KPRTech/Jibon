import React from 'react'

const SchoolReformBanner = ({ img, header, content }) => {
  return (
    <div className='lg:h-[30vh] md:p-5 lg:p-0 lg:overflow-hidden relative text-center text-white'>
        <img className='left-2/4 translate-x-[-50%] absolute brightness-50 z-[-1]' src={img} alt="" />
        <div className='mt-40'>
            <h1 className='text-3xl'>{header}</h1>
            <p className='text-[#999999] italic'>{content}</p>
        </div>
    </div>
  )
}

export default SchoolReformBanner