import React from 'react'

const SchoolReformModel = () => {

    const steps = [
        {
            img: '/assets/images/step1.jpg',
            step: 'Step 1:',
            content: 'Transform a Government SchoolTransform a Government School'
        },
        {
            img: '/assets/images/step2.jpg',
            step: 'Step 2:',
            content: 'Present a Model For the Government to Replicate'
        },
        {
            img: '/assets/images/step3.jpg',
            step: 'Step 3:',
            content: 'Change Education Policy through Advocacy'
        }
    ]

  return (
    <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[80%] m-auto'>
        <h2 className='text-2xl font-bold text-[#ff6400]'>SCHOOL REFORM MODEL</h2>
        <p className='font-light'>We work to transform two government schools in Karachi into model institutions and use the success of our work there to present a blueprint for the government to replicate in other schools as well as to advocate for policy changes for better schools.</p>

        <div className='lg:flex md:flex flex-column justify-center lg:p-10 md:p-5 p-3 lg:m-auto items-center'>
            {steps.map((step, index) => {
                return (
                    <div key={index} className="m-auto">
                        <img className='m-auto' src={step.img} alt="" />
                        <div className='lg:w-[50%] m-auto'>
                            <h2 className='font-bold text-[1.2rem]'>{step.step}</h2>
                            <span>{step.content}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SchoolReformModel