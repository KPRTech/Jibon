import React, { useState } from 'react'
import PolicyAchievementsTab from './PolicyAchievementsTab'

const PolicyAchievements = ({ policy_achievement, title, content }) => {

    const[hover1, setHover1] = useState(false)
    const[hover2, setHover2] = useState(false)
    const[hover3, setHover3] = useState(false)
    const[hover4, setHover4] = useState(false)
    const[toggle, setToggle] = useState(1)

  return (
    <div>
        <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[80%] m-auto'>
            <h2 className='text-[#FF6400] font-bold text-2xl'>{title}</h2>
            <p className='mb-10 font-rale text-slate-700 text-base mt-2'>{content}</p>

            <div className='flex justify-evenly mb-10 gap-10'>
                <img className='cursor-pointer' onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} onClick={() => setToggle(1)} src={hover1 || toggle === 1 ? "/assets/images/policy1-hover.jpg" : "/assets/images/policy1.jpg"} alt="" />
                <img className='cursor-pointer' onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} onClick={() => setToggle(2)} src={hover2 || toggle === 2 ? "/assets/images/policy2-hover.jpg" : "/assets/images/policy2.jpg"} alt="" />
                <img className='cursor-pointer' onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} onClick={() => setToggle(3)} src={hover3 || toggle === 3 ? "/assets/images/policy3-hover.jpg" : "/assets/images/policy3.jpg"} alt="" />
                <img className='cursor-pointer' onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} onClick={() => setToggle(4)} src={hover4 || toggle === 4 ? "/assets/images/policy4-hover.jpg" : "/assets/images/policy4.jpg"} alt="" />
            </div>
        </div>

        <div className='bg-[#F9F9F9]'>
            {policy_achievement.map(policy => {
                return (
                    <>
                        {
                            toggle === policy.id && <PolicyAchievementsTab img={policy.img} title={policy.title} content1={policy.content1} content2={policy.content2} key={policy.id} />
                        }
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default PolicyAchievements