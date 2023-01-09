import React from 'react'

const CurrentGoals = () => {


   const current_goals = [
        {
            img: 'https://www.zindagitrust.org/img/advocacy/cg1.jpg',
            title: 'Teacher Performance Evaluation',
            content: 'Teachers are a specialised workforce and it is unfair and impractical to assess them as any other civil servant. To this end, we are working to push for a Teacher Performance Evaluation regime that is customized to the teaching profession.'
        },
        {
            img: 'https://www.zindagitrust.org/img/advocacy/cg2.jpg',
            title: 'Child Protection through Life Skills Based Education Expansion',
            content: 'LSBE classes make children aware of their rights and empower them to recognise and protect themselves against physical and sexual abuse, disease, poor hygiene and nutritional inequality or insufficiency. To consolidate our progress with the governments of Sindh and Balochistan committing to introduce LSBE into their provincial curricula.'
        },
        {
            img: 'https://www.zindagitrust.org/img/advocacy/cg3.jpg',
            title: 'Sports in Every School',
            content: 'Sports keep children active, focused and teach critical life skills such as teamwork, negotiation, and perseverance. Seeing our students flourish in s variety of sports and consequently take a greater interest in all aspects of school, we are advocating for weekly sports classes by designated sports coaches at every government school.'
        },
        {
            img: 'https://www.zindagitrust.org/img/advocacy/cg4.jpg',
            title: 'Art in Every School',
            content: 'The arts teach children important lessons in perspective, creative thinking and expression, and give them an outlet for their unprocessed emotions. After demonstrating the success of our customised art program at two government schools, we are advocating for art to be introduced at every government school through designated art teachers and weekly classes.'
        }
    ]

  return (
    <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[80%] m-auto'>
        <h1 className='text-[#FF6400] text-2xl font-bold'>CURRENT GOALS</h1>
        <p className='mb-10'>We are currently advocating for the following goals to help Pakistan's children learn better, live safer lives and reach their true potential:</p>

        <div className='grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-y-5 lg:gap-x-10 gap-x-3 mb-10 w-fit m-auto'>
            {current_goals.map((goal, index) => {
                return (
                    <div className='relative text-white text-left w-fit' key={index}>
                        <img src={goal.img} alt="" />
                        <div className='absolute lg:p-4 w-[100%] lg:top-[20%] top-0 left-0'>
                            <h2 className='py-3 lg:text-2xl font-bold'>{goal.title}</h2>
                            <hr />
                            <span className='py-3'>{goal.content}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CurrentGoals