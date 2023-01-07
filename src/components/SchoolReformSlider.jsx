import React from 'react'

const SchoolReformSlider = ({ img, title, content }) => {
  return (
    <div className='cursor-grab'>
        <div className='lg:flex lg:h-5/6'>
                <div className='lg:w-[30%] md:w-[30%] relative'>
                    <img style={{borderRadius: '50%'}} className='absolute lg:w-full md:w-[70%] w-2/12 lg:left-10 lg:top-10 left-[0] top-[0]' src={process.env.PUBLIC_URL + `/assets/images${img}`} alt={title} />
                </div>
                <div className='flex-col justify-center p-2'>
                    <div className='mb-2'>
                        <h1 className='font-bold text-lg ml-20 text-2xl'>{title}</h1>
                    </div>
                    <div className='shadow-lg p-10 lg:w-3/4'>
                       <p>{content}</p>   
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SchoolReformSlider