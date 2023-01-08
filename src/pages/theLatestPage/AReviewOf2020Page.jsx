import React from 'react';
import { Link } from 'react-router-dom';

const AReviewOf2020Page = () => {
    return (
        <div>
            <div>
                <div className='mt-20 lg:mt-0 h-[200px] lg:h-[270px] relative'
                    style={{
                        background: 'url("assets/images/newseventsbanner.jpg") center center no-repeat',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <div className='bg-black h-[200px] lg:h-[270px] bg-opacity-[.78]'>
                        <div className='relative z-20'>
                            <div className='text-center pt-[90px] lg:pt-[150px] pb-8'>
                                <div className='text-2xl lg:text-4xl text-white leading-7 font-mont font-medium'>A Review of 2020 at Zindagi Trust!</div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[380px] lg:max-w-[600px] mx-auto mt-10'>
                <div>
                    <img src="assets/images/review2020/review2020_1.png" alt="" />
                    <div className='font-sans text-[16px] text-left text-[#202020] leading-[150%] my-3'>
                        <p className=' mt-4 mb-5'>Happy New Year! 2020 was a challenge - we started some exciting new projects, pivoted when COVID19 arrived in March and continuously adapted from there on to support our school community. Read on for a comprehensive overview of the past 12 months at Zindagi Trust.</p>
                        <p className=' mb-5'>Skip to:</p>
                        <div>
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Ta'aruf - art and music </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Tiflatoon - children's stories </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Distance Learning </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Virtual Summer Camp </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Counseling </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Back to School </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Aisa Pakistan </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Outreach </a>|
                            <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Holiday Song </a>|
                        </div>
                    </div>
                </div>
                <div className='font-sans text-[16px] text-left text-[#202020] leading-[150%] my-3'>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Sports, Science and Math Competitions</p>
                    <img className='my-5' src="assets/images/review2020/review2020_2.png" alt="" />
                    <p className='mb-5 '>We started off the year with a host of student activity days in our adopted government schools in Karachi â€“ Sports Days and Science Fairs at each school, an Inter-School Math Olympiad, Bazm-e-Adab, and more. In some individual news 10th-grader Bareera Abdul Majeed from SMB bagged the Best Scorer award at the Karachi United Schools Championship for football, finishing the tournament as the highest scorer with a total of 10 goals, with her school team finishing as runners up after a dream run to the final.</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Taaruf - a celebration of culture and possibility</p>
                    <img className='my-5' src="assets/images/review2020/review2020_3.png" alt="" />
                    <p className='mb-5 '>Out of Blue a very special site-specific art installation was created at our adopted Khatoon-e-Pakistan Government Girls School. This labour of love was painted by Imran Qureshi, a globally acclaimed award-winning artist who is a master of modern miniature. This was his contribution to our cause of bringing government schools to life through art as a gateway to other reforms. The blue foliage - representing water and life - flowing out of the classroom windows into the streets of the city is the artist's metaphor for the hope that the reforms that have transformed our adopted government school may spread to schools across the city and beyond. Let him take you through the process in his own words in this video.</p>
                    <img className='my-5' src="assets/images/review2020/review2020_4.png" alt="" />
                    <p className='mb-5 '>The stunning installation, similar in style to his work at the Met in New York, was launched early March at Taaruf â€“ an evening of culture and possibility at our adopted government school Khatoon-e-Pakistan. An orchestra of 70 students from both our adopted government schools performed for the first time in front of a live audience in the schoolâ€™s futsal ground.</p>
                    <p className='mb-5 '>In the six months leading up to the event, the students honed their talent in their singing, guitar, violin, drum and tabla classes at school. They wowed the audience with their performance of eastern and western classical music, a jazz solo, folk songs as well as a memorable national song, demonstrating not only their talent and hard work but, more importantly, the potential that children and youth can achieve given the right opportunities. Their performance brought many to tears - you can watch parts of it here.</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Advocacy to Protect Our Children</p>
                    <div className='grid lg:grid-cols-2 gap-x-10 my-3'>
                        <img src="assets/images/review2020/review2020_5.jpg" alt="" />
                        <img src="assets/images/review2020/review2020_6.jpeg" alt="" />
                    </div>
                    <p className='mb-5 '>We got corporal punishment banned! In February, we petitioned the Islamabad High Court (IHC) to repeal Section 89 of the Pakistan Penal Code, which allowed students to be beaten up in schools "in good faith." In a landmark decision, the Chief Justice of the IHC suspended Section 89 and, in doing so, effectively banned corporal punishment across the country. Federal Minister of Human Rights Shireen Mazari said the petition was "very important" and that her ministry fully "supports it."</p>
                    <p className='mb-5 '>After the tragic motorway rape, we led an initiative to galvanise support from civil society, viz. our partners Group Development Pakistan, Aahung and Sahil to put forward a joint set of demands from the government to Protect our Children from the menace of abuse and rape. This was our most shared post on Facebook ever, underlining the collective need felt by the nation for a coordinated, systemic, state response to abuse and rape, taking into account the ground realities. </p>
                    <p className='mb-5 '>When COVID19 hit Pakistan in March, our Founder Shehzad Roy was at the forefront advocating to the government to prioritize health and safety over all else and postpone exams and shut down schools, which could have become a source of transmission of the virus to millions of students' homes. </p>
                    <div className='lg:flex items-center my-5'>
                        <p className='lg:mr-10'>We spoke to government teachers to learn how they thought schools should adapt post-COVID19 and published our findings in a report along with our partners Pakistan Alliance for Maths and Science (PAMS). Our goal was to bring the voice of teachers to the discourse and inform policy decisions around school reopening plans. The Pakistan Teachers' Response to COVID19, was based on multiple Focus Group Discussions we held with 5 different sets of government school teachers in Karachi and interviews PAMS held with teachers across the country.</p>
                        <img className='lg:w-[30%]' src="assets/images/review2020/review2020_7.jpg" alt="" />
                    </div>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>COVID19 Immediate Response</p>
                    <img src="assets/images/review2020/review2020_8.jpg" alt="" />
                    <p className='mb-5 '>When the lockdown was initially announced, we conducted a survey of our studentsâ€™ families to gauge their immediate household needs and their access to technology. Based on the findings, we distributed care packages with food rations and hygiene essentials in order to take care of our students and their families' immediate needs, thanks to support from our major donors, including Lucky Cement, IDRF, Save a Soul, Santex Pakistan as well as some incredible individual donors and fundraisers including Hussain Ali, Dr Khalil and Asad Shairani. Many thanks also to our school's teaching and administrative staff for their painstaking work as makeshift enumerators working the phones and as care pack distributors in the wee hours of the night during the earliest days of the strict lockdown!</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Learning through Lockdown</p>
                    <img src="assets/images/review2020/review2020_9.jpg" alt="" />
                    <p className='mb-5 '>Our schools had to adapt quickly to continuing learning from a distance post-COVID19. We designed, printed and distributed physical Learning Packs to our students' homes, making sure they included activities that fostered independent and active learning, creativity and mindfulness, including home science experiments using garden waste, art through kitchen materials and learning through stories. These were sent to 2500 students from Kindergarten to Grade 8, focusing on revision in English, Mathematics, Science, Social Studies, and Urdu.</p>
                    <p className='mb-5 '>Our government teachers also went through extensive training online to get accustomed to conducting online classes via Zoom, developing pre-recorded lessons, and a Learning Management System. Some of them recorded and edited video lessons to share in their Whatsapp Classrooms, which allowed for asynchronous learning and also featured instruction, Q&A and peer learning through voice notes, texts and photos of assignments. 1200 students of Grades 6 through 10 were also engaged in Math, English and Science classes twice a week remotely through a blended learning software Knowledge Platform. </p>
                    <img className='my-5' src="assets/images/review2020/review2020_10.png" alt="" />
                    <p>We distributed smartphones and data packages to all our fifth grade students in order to make online learning smooth and accessible for a grade able to follow online instruction yet unable to access even Whatsapp at home. Students and parents were called to the school with strict COVID19 prevention SOPs (staggered slots, mask compliance and physical distancing) to register, get their phones and attend an orientation by the school IT teams on how to use their smartphone safely. Thereafter, they used their phones to stay connected to their teachers through Whatsapp classrooms.</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Holistic Education beyond the School</p>
                    <img src="assets/images/review2020/review2020_11.jpg" alt="" />
                    <p className='mb-5 '>After COVID19, it was clear that education needed to go beyond the basic and traditional. Realising that it was important for us to focus on nourishing our students' body and soul along with keeping them mentally engaged, we introduced weekly online meditation and movement sessions conducted by certified yoga instructors led by Rahma Mian, along with Dosti Zahra and Raasti Said. Many students, including some girls who had been very active in sports at school, attended these classes regularly and felt refreshed after the much needed physical exercise. Students also learned how being mindful of their breath could help them manage feelings of anxiety and anger.</p>
                    <p className='mb-5 '>Through art classes in our Whatsapp Classrooms, students learned hands-on activities like how to tie-dye their clothes using kitchen ingredients (vs fancy art supplies), got to label and express their emotions through drawing and colouring and also participated in local art competitions on COVID19 safety, urban flooding and child rights. Props to our art teachers who became researchers, crafters and video editors on the go!</p>
                    <img className='my-5' src="assets/images/review2020/review2020_12.jpg" alt="" />
                    <img className='my-5' src="assets/images/review2020/review2020_13.jpg" alt="" />
                    <p>We took our annual Summer Camp online and hosted tens of enriching and empowering talks and workshops on topics including architecture in nature, entrepreneurship, feminism, activism, environmental consciousness, urban planning and parks, fitness, yoga, solo female travel, marketing, the creative process and even improv storytelling for our government school students. For students who could not join live, we were able to record and share videos of the sessions they missed - you can catch most of them on our YouTube channel. A huge shout out to all our incredible volunteers for being so generous with their time and so devoted to planning experiences that were relatable, meaningful and also enjoyable.</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Connection in Isolation</p>
                    <img src="assets/images/review2020/review2020_14.png" alt="" />
                    <p className='mb-5 '>Continuing our focus on the mental wellbeing of our students during these challenging times, our school counselor reached out to students in grades 9 and 10 to check in with them and identify if they needed any help. In addition, we trained our art and sports teachers as Lay Counselors after which 10 of them made phone calls to students to check in on their mental health and wellbeing, offer a friendly connection and refer any serious concerns to the School Counselor. We also began a series of mental health awareness workshops for the larger government teachers' body near the end of the year.</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Tiflatoon - Stories for Children</p>
                    <img src="assets/images/review2020/review2020_15.png" alt="" />
                    <p className='mb-5 '>We developed and launched Tiflatoon - a series of original animated children's stories in Urdu for today's Pakistan, aiming to spark curiosity and bring joy in a time of isolation, to students from our schools and beyond. Watch the stories and share them with the children in your lives: </p>
                    <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Tina Ki Chatpat Dunya </a>|
                    <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Jagah Doh </a>|
                    <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Plus Ka Jadoo </a>|
                    <a href="#/" className='text-sm text-[#007C89] underline m-[2px]'>Boltay Kyu Nahi </a>|
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Back to School!</p>
                    <p className='mb-5 '>We were finally able to re-open schools in September - click on the thumbnails below to watch these videos and learn about what students missed in their seven months away as well as our preparations and planning to re-open safely.</p>
                    <div className='grid lg:grid-cols-2 gap-x-10'>
                        <img src="assets/images/review2020/review2020_16.png" alt="" />
                        <img src="assets/images/review2020/review2020_17.png" alt="" />
                    </div>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Aisa Pakistan</p>
                    <img src="assets/images/review2020/review2020_18.png" alt="" />
                    <p className='mb-5 '>We believe that holistic education â€“ through art, sports, chess, music and child abuse awareness â€“ can lead to a Pakistan that is progressive, tolerant and prosperous. We invited supporters who share our vision for Pakistan to join our #AisaPakistan campaign by donating to the cause and also by recommending what they think ought to be taught in our schools to achieve it. We received some excellent submissions - from climate justice to critical thinking, ICYMI, here's our Founder Shehzad Roy inviting you to join the campaign. </p>
                    <img src="assets/images/review2020/review2020_19.png" alt="" />
                    <p className='my-5 text-center'>Our favourite submissions for #AisaPakistan</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Happy New Year!</p>
                    <img src="assets/images/review2020/review2020_20.png" alt="" />
                    <p className='mb-5 '>Happy Holidays from the students of our government schools! Click on the image to view the video! </p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Outreach</p>
                    <img src="assets/images/review2020/review2020_21.png" alt="" />
                    <p className='mb-5 '>We continued to showcase our work in school reform through School Visits before and after the school closures. The top political leadership â€“  Sindh Education Minister Saeed Ghani, former Finance Minister Miftah Ismail; cultural icons like artist Imran Qureshi, writer Mohammed Hanif and actor Sarwat Gilani; leaders in education like LUMS School of Education Dean Professor Tahir Andrabi; diplomats like US Consul General Robert Silberstein and British Deputy Head of Mission Muna Shamsuddin; corporate leaders like Unilever CEO Amir Paracha and many others took the time to visit our adopted government schools and learn about our model of change. </p>
                    <p className='mb-5 '>We also launched official Zindagi Trust merchandise - cards, notebooks and reusable cloth tote bags printed with designs of original artwork created by our talented government school students. Get in touch to grab some unique designs like the Mona Lisa reinterpreted in Pakistani culture or Picasso-inspired abstract art to help us raise funds for our schools.</p>
                    <p className='bg-[#4BCACE] px-[18px] py-[18px] font-bold text-white my-5'>Thank You</p>
                    <p className='mb-5 '>Our strong partnership with our major corporate donor Lucky Cement continued into the year. New corporate sponsorships for our work in the
                        past year included those from: </p>
                    <img src="assets/images/review2020/review2020_22.png" alt="" />
                    <p className='mb-5 '>Internationally, the following organizations continue to support our work:</p>
                    <img src="assets/images/review2020/review2020_23.png" alt="" />
                    <p className='mb-5 '>Individual donors continued to form the backbone of our support once again. A total of 850 individual donors supported us this Ramzan with donations starting from Rs 50 and going up to over USD 1000. In our final fundraising campaign in December, we were able to reach our target of getting over a 100 unique donations. </p>
                    <p className='mb-5 '>We are deeply grateful to all our donors and supporters for helping us continue and consolidate our work in this otherwise uncertain past year. We look forward to your support in the future.</p>
                    <p className='mb-5 '>Sincerely,</p> <br />
                    <img src="assets/images/review2020/review2020_24.png" alt="" />
                    <p className=''>Hameedah Sayani,</p>
                    <p className='mb-5 '>CEO, Zindagi Trust</p>
                </div>
                <hr className='border-t-2' />
            </div>
            <p className='font-play italic text-[#717171] text-[13px] text-center my-5'>Donations to Zindagi Trust are tax-exempt in the United States and Pakistan. For details, visit
                <Link className='text-primary' to='/donate'>zindagitrust.org/donate</Link>
            </p>
        </div>
    );
}

export default AReviewOf2020Page;
