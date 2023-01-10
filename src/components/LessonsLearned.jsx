import React from 'react'

const LessonsLearned = () => {
  return (
    <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[55%] m-auto'>
        <div className='text-left'>
            <h2 className='text-[#FF6400] text-2xl font-bold py-3'>LESSONS LEARNED AND WAY FORWARD</h2>
            <hr />
            <p className='py-3 text-[1.1rem] mb-10'>Some of our key lessons from the program were as follows:</p>
        </div>

        <div className='text-left px-3'>
            <div className='mb-10'>
                <ul className='list-[square]'>
                    <li>
                        <p className='py-2'>
                            Teaching working children and teaching children in a non-formal setting are specialised roles requiring specially qualified teachers. 
                            "Something is better than nothing" is not enough for such a specialised environment! 
                        </p>
                    </li>
                    <li>
                        <p className='py-2'>
                            Constant follow-up, mentoring and counseling are required to ensure 
                            regularity in student attendance for a population that is new to schooling.
                        </p>
                    </li>
                    <li>
                        <p className='py-2'>
                            Holistic education, such as art and sports classes, which are difficult to fit into an accelerated course, 
                            could be the key in retaining the interest of students.
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <p className='py-2 mb-10'>
                    While we decided to focus on government school reform to bring about mass change, the Paid to Learn program will always remain close to our hearts. 
                    Before moving on, our regional academic coordinators placed our graduates into private secondary schools and worked with school management to ensure that their education will be supported through Matriculation free of cost. 
                    As we continue to hear from some of our graduates who have gone on finish high school or even college and university and will share their updates with you.
                </p>
            </div>
        </div>
    </div>
  )
}

export default LessonsLearned