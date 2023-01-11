import React from 'react'
import { useParams } from 'react-router-dom'
import success_stories_data from '../components/successStoriesData'
import VolunteerSidebar from '../components/volunteerSidebar/VolunteerSidebar'
import HeroBanner from '../components/HeroBanner'

const SuccessStory = () => {

    const { slug } = useParams()

  return (
    <div className=''>
        <HeroBanner title="Success Stories" heroTextOne="Read about how our schools are transforming students' lives" />
        <div className='flex lg:justify-evenly lg:flex-row flex-col lg:w-[80%] m-auto p-10'>
            {success_stories_data.map(story => {
                return (
                    <>
                        {
                            slug === 'ruqqaiya-5' && story.slug === slug ?

                            <div className='lg:w-[50%] flex flex-col items-center'>
                                <h1 className='text-2xl font-bold mb-10'>{story.title}</h1>
                                <img className='lg:w-[60%] w-[90%] mb-5' src={story.img1} alt='' />
                                <p className='mb-5'>{story.content1}</p>
                                <p className='mb-5'>{story.content2}</p>
                                <p className='mb-5'>{story.content3}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote1}</p>
                                </div>
                                <p className='mb-5'>{story.content4}</p>
                                <img className='mb-5' src={story.img2} alt='' />
                                <p className='mb-5'>{story.content5}</p>
                                <p className='mb-5'>{story.content6}</p>
                                <p className='mb-10'>{story.content7}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote2}</p>
                                </div>
                                <p className='mb-5'>{story.content8}</p>
                                <p className='mb-5'>{story.content9}</p>
                                <p className='mb-5'>{story.content10}</p>
                            </div>

                            :

                            slug === 'muqdas-saeed-4' && story.slug === slug ?

                            <div  className='lg:w-[50%] flex flex-col items-center'>
                                <h1 className='text-2xl font-bold mb-10'>{story.title}</h1>
                                <img className='mb-5' src={story.img1} alt='' />
                                <p className='mb-5'>{story.content1}</p>
                                <p className='mb-5'>{story.content2}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote1}</p>
                                </div>
                                <p className='mb-5'>{story.content3}</p>
                                <p className='mb-5'>{story.content4}</p>
                                <img className='lg:w-[full] w-[90%] mb-5' src={story.img2} alt='' />
                                <p className='mb-5'>{story.content5}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote2}</p>
                                </div>
                                <p className='mb-5'>{story.content6}</p>
                            </div>

                            :

                            slug === 'maliha-ali-3' && story.slug === slug ?

                            <div className='lg:w-[50%] flex flex-col items-center'>
                                <h1 className='text-2xl font-bold mb-10'>{story.title}</h1>
                                <img className='mb-5' src={story.img1} alt='' />
                                <p className='mb-5'>{story.content1}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote1}</p>
                                </div>
                                <p className='mb-5'>{story.content2}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote2}</p>
                                </div>
                                <p className='mb-5'>{story.content3}</p>
                                <p className='mb-5'>{story.content4}</p>
                                <p className='mb-5'>{story.content5}</p>
                                <p className='mb-5'>{story.content6}</p>
                            </div>

                            :

                            slug === 'rabiya-abbasi-2' && story.slug === slug ?

                            <div className='lg:w-[50%] flex flex-col items-center'>
                                <h1 className='text-2xl font-bold mb-10'>{story.title}</h1>
                                <img className='mb-5' src={story.img1} alt='' />
                                <p className='mb-5'>{story.content1}</p>
                                <p className='mb-5'>{story.content2}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote1}</p>
                                </div>
                                <p className='mb-5'>{story.content3}</p>
                                <p className='mb-5'>{story.content4}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote2}</p>
                                </div>
                                <img className='mb-5' src={story.img2} alt='' />
                                <p className='mb-10'>{story.content5}</p>
                                <div style={{boxShadow: '1px 2px 12px 0px rgb(0 0 0 / 8%)'}} className='relative mb-5'>
                                    <span className='absolute top-[-20px] right-[25px]'>
                                        <img src="https://www.zindagitrust.org/img/quote-orange.png" alt="" />
                                    </span>
                                    <p className='lg:p-10 p-5 italic'>{story.quote3}</p>
                                </div>
                            </div>

                            :

                            slug === 'bushra-maqsood-1' && story.slug === slug ?

                            <div className='lg:w-[50%] flex flex-col items-center'>
                                <h1 className='text-2xl font-bold mb-10'>{story.title}</h1>
                                <iframe className='w-full lg:h-[400px] md:h-[400px] mb-10' title='video' src={`https://www.youtube.com/embed/${story.video}`} frameborder="0"></iframe>
                            </div>

                            :

                            ''

                            
                        }
                    </>
                )
            })}
            <VolunteerSidebar className="lg:w-[25%]" />
        </div>
    </div>
  )
}

export default SuccessStory