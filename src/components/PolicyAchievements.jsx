import React, { useState } from 'react'
import PolicyAchievementsTab from './PolicyAchievementsTab'

const PolicyAchievements = ({ policy_achievement, title, content }) => {

    const[hover, setHover] = useState(-1)
    const[toggle, setToggle] = useState(1)

    const policy_img = [
        { id: 1, img: 'policy1'},
        { id: 2, img: 'policy2'},
        { id: 3, img: 'policy3'},
        { id: 4, img: 'policy4'},
    ]

    const handleHoverEnter = (id) => {
        setHover(id)
    }

    const handleHoverLeave = () => {
        setHover(-1)
    }

  return (
    <div>
        <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[80%] m-auto'>
            <h2 className='text-[#FF6400] font-bold text-2xl'>{title}</h2>
            <p className='mb-10 font-rale text-slate-700 text-base mt-2'>{content}</p>

            <div className='flex justify-evenly mb-10 gap-10'>
                {policy_img.map(img => {
                    return (
                        <img className='cursor-pointer' onMouseEnter={() => handleHoverEnter(img.id)} onMouseLeave={() => handleHoverLeave()} onClick={() => setToggle(img.id)} src={hover === img.id || toggle === img.id ? `/assets/images/${img.img}-hover.jpg` : `/assets/images/${img.img}.jpg`} alt="" />
                    )
                })}
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