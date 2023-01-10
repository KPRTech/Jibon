import React from 'react';
import { Link } from 'react-router-dom';

const OurCOVID19ResponsePage = () => {
    return (
        <div>
            <div>
                <div className='mt-20 lg:mt-0 h-[200px] relative'
                    style={{
                        background: 'url("assets/images/aboutbg3.jpg") top center no-repeat',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <div className='bg-black h-[200px] bg-opacity-[.78]'>
                        <div className='relative z-20'>
                            <div className='text-center pt-[90px] lg:pt-[150px] pb-8'>
                                <div className='text-2xl lg:text-4xl text-white leading-7 font-mont font-medium'>Our COVID-19 Response</div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[380px] lg:max-w-[750px] mx-auto mt-14'>
                <div>
                    <img src="assets/images/covidresponse/covid1.jpg" alt="" />
                    <div className='font-rale text-[16px] text-left text-[#202020] leading-[2] my-3'>
                        <p className='mt-4 mb-5'>As an organisation working on school reform, I never thought we would be fighting to get schools closed but early last month, we pushed the government to prioritize health and safety over all else and shut down schools, which could have become a source of transmission of the virus to millions of students' homes.</p>
                        <p className='my-10'>This was a difficult yet necessary decision at a time when the country was still open, cricket matches were on and most private schools were worried about their students' exams and college admissions. Thankfully we were able to make a convincing case for what was in the best interest of our children, our nation and our planet, fuelled greatly by our Founder Shehzad Roy's dissenting note in a meeting of the Steering Committee for Education in Sind</p>
                        <div className='grid lg:grid-cols-2 gap-x-8 my-5'>
                            <div>
                                <img src="assets/images/covidresponse/covid2.jpg" alt="" />
                                <p className='my-5'>Collective decision not to hold board exams or O/A Level exams this summer, a move later followed by CAIE internationally.</p>
                            </div>
                            <div>
                                <img src="assets/images/covidresponse/covid3.jpg" alt="" />
                                <p className='my-5'>Prime Minister Imran Khan acknowledging our help in developing a national consensus on the issue of exam delays</p>
                            </div>
                        </div>
                        <img className='my-4' src="assets/images/covidresponse/covid4.jpg" alt="" />
                        <p className='my-5'>We've been researching how to make distance learning work for our schools as well as the larger population of government school students who may not have access to digital learning opportunities. Our biggest learning is that content must be creative and intelligently crafted to be able to attract the child outside the classroom. To this end, we have put together our first illustrated video called <br /> <strong>Plus Ka Jadoo</strong>, a beautiful story about maths which is available available with an open license to spark curiousity and joy in all children, wherever they may be. It will also be launched on the new state television channel for education by the Federal Ministry of Education and PTV. Please share with the children in your lives and keep following us for more content to be released over the coming weeks:</p>
                        <iframe className='w-[100%]' height="415" src="https://www.youtube.com/embed/HrSGK9NApEE" title="Plus Ka Jadoo - narrated by Shehzad Roy | Tiflatoon Urdu Kahniyaan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className='my-5'>This is a challenging time for educators everywhere as we figure out how to teach without the tools we have developed and perfected over the years. We hosted an online discussion with young education practitioners around Pakistan on how they see The changing role of schools in this new world, on Thursday, 9th April at 7pm live on our Youtube. In case you missed it, you can view a recording of the conversation between representatives from Sabaq, Headstart IB School, Young Patriots School, Haque Academy and Teach for Pakistan below:</p>
                        <iframe className='w-[100%]' height="415" src="https://www.youtube.com/embed/9kU-vTOWZfo" title="The Changing Role of Schools in this new post-Corona World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <img className='my-4' src="assets/images/covidresponse/covid5.jpg" alt="" />
                        <img src="assets/images/covidresponse/covid6.jpg" alt="" />
                        <p className='my-5'>A few updates on what we've been up to while schools are officially closed:</p>
                        <ul className='list-inside list-disc'>
                            <li>We are conducting a <strong>Household Needs Survey</strong> of all our students to determine what they need help with the most and how we can deliver educational content to them digitally or otherwise.</li>
                            <li>We have begun <strong>Distributing Care Packs</strong> including food essentials, colour pencils, sanitary pads and creative worksheets to students who are most in need. Many thanks to our generous donors as well as artists including Sophia Balagamwala and Shehzil Malik who have collaborated with us to create worksheets for our students to have something fun and restorative to do during this difficult time.</li>
                            <li>Our Teacher Professional Development team is utilizing this time for <strong>Research</strong> on how to take learning to the child's home in the most effective way and on the <strong>Development</strong> of model lessons, resources, worksheets and online + offline learning packs.</li>
                        </ul>
                        <img className='my-4' src="assets/images/covidresponse/covid7.jpg" alt="" />
                        <p className='my-5'>We are sending creative worksheets to students from KG-Class 10 to spend their time constructively during this lockdown. These were generously contributed by some of Pakistan's best young artists. Free for all to download, print and colour! Details</p>
                        <img className='my-4' src="assets/images/covidresponse/covid8.jpg" alt="" />
                        <img src="assets/images/covidresponse/covid9.jpg" alt="" />
                        <p className='my-5'>Now more than ever we need your help to sustain our work in educating and protecting the children of Pakistan. This is a very difficult time for everyone, but we must do our best to minimise the widening of the education gap that has occurred in past pandemics and epidemics. <strong>Please donate generously</strong> and consider giving your zakat / sadqa to Zindagi Trust to transform lives through education: <Link className='text-primary' to='donate'>zindagitrust.org/donate</Link>.</p>
                        <img className='my-4' src="assets/images/covidresponse/covid10.jpg" alt="" />
                        <div className='lg:flex lg:gap-x-16'>
                            <div className='lg:w-[500px]'>
                                <p className='my-2'>Some tips in this video from our resident School Counselor <strong>Naila</strong> who will be spending the upcoming weeks during this school closure reaching out to students to provide support over the phone, as we anticipate an increase in the support they require for their mental wellbeing:</p>
                                <ul className='list-inside list-decimal'>
                                    <li>Give clear guidelines on prevention and precaution</li>
                                    <li>Manage your own anxiety first</li>
                                    <li>Make a routine for them</li>
                                    <li>Stay Connected through games and activities</li>
                                    <li>Share the positive success stories</li>
                                </ul>
                            </div>
                            <img className='my-5 lg:my-2' src="assets/images/covidresponse/covid11.jpg" alt="" />
                        </div>
                        <p className='my-5'>In addition to increasing mental health needs, many children are #AtHighRisk for violence during this lockdown. Please share this message from our friends and partners at the Ministry of Human Rights:</p>
                        <img src="assets/images/covidresponse/covid12.jpg" alt="" />
                        <p className='my-5'>We have also petitioned the Sindh High Court (SHC) to release children, women and non-prohibitory under-trial prisoners (UTPs) from jail to protect them and the larger public from the danger of the coronavirus spreading in over-crowded jails. The SHC later issued a notice to release from jail 829 UTPs charged with minor offences. Our petition was supported by MoHR's legal brief on prison reforms and a progress report on the recommendations for said reforms.</p>
                        <hr />
                        <p className='my-5'>Thank you and I look forward to your support in the crucial upcoming months.</p>
                        <img className='my-5' src="assets/images/covidresponse/covid13.png" alt="" />
                        <p className='my-5'><strong>Hameedah Sayani <br />CEO, Zindagi Trust</strong></p>
                        <img src="assets/images/covidresponse/covid14.jpg" alt="" />
                        <p className='mt-5'>Shehzad Roy recounts his journey in the fight against COVID19 (<span className='text-primary underline m-[2px]'>Facebook</span>)</p>
                        <p>Shehzad Roy trying to get non-prohibitory UTPs out of jail (<span className='text-primary underline m-[2px]'>Samaa</span>)</p>
                        <p>Our journey in the fight against Coronavirus (<span className='text-primary underline m-[2px]'>Daily Times</span>)</p>
                        <p className='mb-10'>
                            <a href="#/" className='text-primary underline m-[2px] ml-0'>The News </a>|
                            <a href="#/" className='text-primary underline m-[2px] ml-0'>Samaa TV </a>|
                            <a href="#/" className='text-primary underline m-[2px] ml-0'>Daily Times </a>|
                            <a href="#/" className='text-primary underline m-[2px] ml-0'>Dunya News </a>|
                            <a href="#/" className='text-primary underline m-[2px] ml-0'>The Nation </a>|
                            <a href="#/" className='text-primary underline m-[2px] ml-0'>ARY News </a>|
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCOVID19ResponsePage;
