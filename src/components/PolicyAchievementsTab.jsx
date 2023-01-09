import React from 'react'

const PolicyAchievementsTab = ({ img, title, content1, content2 }) => {
  return (
    <div className='px-4 lg:px-[45px] pt-[30px] lg:w-[80%] m-auto'>
        <div className='grid lg:w-[90%] lg:grid-cols-2 grid-cols-1 m-[auto]'>
            <div className='lg:px-5 p-3'>
                <h1 className='font-bold text-2xl py-1 mb-5'>{title}</h1>
                <p className='py-3 mb-5'>{content1}</p>
                {content2 && <p className='py-3'>{content2}</p>}
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PolicyAchievementsTab