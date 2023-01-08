import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import NewsStories from '../../components/NewsStories';
import BreadCrumb from '../../components/ui/BreadCrumb';

const NewsAndEventsPage = () => {
    return (
        <div>
            <HeroBanner title={"News, Stories and Events"} heroTextOne={"Follow Zindagi Trust’s advocacy and students’ achievements, latest program developments, recent partnerships and future steps."}></HeroBanner>
            <BreadCrumb breadCrumbText={"News And Events"}></BreadCrumb>
            <div className='mb-20'>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories1.png"}
                        newsDate1={"7/9/2022"}
                        newsTitle1={'ZINDAGI TRUST LAUNCHES "CODING PROGRAM" IN COLLABORATION WITH KFC & TECHNOKNOWLEDGE'}
                        newsDescription1={"In collaboration with KFC Mitao Bhook, Zindagi Trust is piloting a three-year Coding Program in their two adopted government schools- SMB Fatima Jinnah and Khatoon-e-Pakistan to equip students from grades 3 to 8 with digital programming tools and modern t"}
                        newsImg2={"assets/images/NewsEvents/newsStories2.png"}
                        newsDate2={"23/8/2022"}
                        newsTitle2={'TIKTOK, ZINDAGI TRUST INITIATE DIGITAL SAFETY WORKSHOPS IN GOVT SCHOOLS'}
                        newsDescription2={"Famous video sharing app TikTok, in collaboration with Zindagi Trust, has initiated a series of workshops across their network of government schools in a bid to create awareness around digital safety among students, teachers and parents."}
                        newsImg3={"assets/images/NewsEvents/newsStories3.png"}
                        newsDate3={"21/7/2022"}
                        newsTitle3={'CHILD PROTECTION AND DIGITAL SAFETY DIALOGUE ORGANIZED BY ZINDAGI TRUST IN COLLABORATION WITH META'}
                        newsDescription3={"Zindagi Trust in collaboration with Meta (Facebook) hosted a roundtable discussion at GECE Hussainabad to identify ways to make digital platforms safer for children and share policy recommendations with government agencies to help create better reporting"}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories4.png"}
                        newsDate1={"14/2/2022"}
                        newsTitle1={'TIKTOK AND ZINDAGI TRUST JOIN HANDS FOR A SAFER PAKISTAN'}
                        newsDescription1={"Zindagi Trust has partnered with the fastest growing global video making platform TikTok with the aim of creating an awareness campaign for a digit..."}
                        newsImg2={"assets/images/NewsEvents/newsStories5.png"}
                        newsDate2={"11/2/2022"}
                        newsTitle2={'ZINDAGI TRUST PARTNERS UP WITH TIKTOK TO CREATE DIGITAL SAFETY AWARENESS'}
                        newsDescription2={"As our next move in safeguarding children over digital platforms, Zindagi Trust has partnered up with TikTok to help our young users learn safer wa..."}
                        newsImg3={"assets/images/NewsEvents/newsStories6.png"}
                        newsDate3={"30/11/2021"}
                        newsTitle3={'UPDATE ON CORPORAL PUNISHMENT- ICT BILL PASSED BY THE PARLIAMENT OF PAKISTAN'}
                        newsDescription3={"On 17th November 2021, the parliament of Pakistan passed the Islamabad Capital Territory Prohibition of Corporal Punishment Bill which prohibits al..."}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories7.png"}
                        newsDate1={"12/8/2021"}
                        newsTitle1={'US CONSULATE GENERAL VISIT'}
                        newsDescription1={"Monday 12th Oct 2021, U.S. Consul General, Mark Iroh, along with his team visited Khatoon-e-Pakistan Government Girls School, a school adopted by t..."}
                        newsImg2={"assets/images/NewsEvents/newsStories8.png"}
                        newsDate2={"16/8/2021"}
                        newsTitle2={'A CAMPAIGN TO PROTECT CHILDREN ONLINE'}
                        newsDescription2={"In collaboration with Facebook, Zindagi Trust is launching a campaign on child protection in digital spaces. This campaign begins with a short vide..."}
                        newsImg3={"assets/images/NewsEvents/newsStories9.jpeg"}
                        newsDate3={"6/8/2021"}
                        newsTitle3={'CHILD PROTECTION ACTION DIALOGUE HOSTED BY ZINDAGI TRUST AND SINDH POLICE'}
                        newsDescription3={"On 15th June 2021, Zindagi Trust had a meeting with IG Sindh Police Mushtaq Ahmed Mahar at one of our adopted schools, Khatoon-e-Pakistan (KPS). Th..."}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories10.png"}
                        newsDate1={"12/7/2021"}
                        newsTitle1={'SINDH GOVERNMENT MOVES TO MODERNISE TEACHER EVALUATION'}
                        newsDescription1={"Karachi, June 2nd: The Sindh Government approved a new teacher performance evaluation format for government teachers across the province. Teachers ..."}
                        newsImg2={"assets/images/NewsEvents/newsStories11.jpeg"}
                        newsDate2={"5/3/2021"}
                        newsTitle2={'ADMISSIONS OPEN AT SMB FATIMA JINNAH GGS'}
                        newsDescription2={"Here are the admissions details for the upcoming academic year for SMB Fatima Jinnah Government Girls School. There are a restricted number of seat..."}
                        newsImg3={"assets/images/NewsEvents/newsStories12.jpeg"}
                        newsDate3={"5/3/2021"}
                        newsTitle3={'ADMISSIONS OPEN AT KHATOON-E-PAKISTAN GGS'}
                        newsDescription3={"Here are the admissions details for the upcoming academic year for Khatoon-e-Pakistan Government Girls School. There are a restricted number of sea..."}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories13.jpeg"}
                        newsDate1={"25/2/2021"}
                        newsTitle1={'ENDING CORPORAL PUNISHMENT � NEXT STEPS'}
                        newsDescription1={"With the historic passage of the Islamabad Capital Territory Prohibition of Corporal Punishment Bill this week, it is important to take stock of th..."}
                        newsImg2={"assets/images/NewsEvents/newsStories14.jpeg"}
                        newsDate2={"23/2/2021"}
                        newsTitle2={'NA PASSES LAW TO BAN CORPORAL PUNISHMENT IN THE CAPITAL'}
                        newsDescription2={"In a historic move, the National Assembly passed the ICT Prohibition of Corporal Punishment Bill, which effectively bans all forms of corporal puni..."}
                        newsImg3={"assets/images/NewsEvents/newsStories15.jpg"}
                        newsDate3={"22/2/2021"}
                        newsTitle3={'WHEN LIFE GIVES YOU EMOTIONS, MAKE ART'}
                        newsDescription3={"In October 2020, amidst the hullabaloo of schools reopening for the first time, we introduced a new Social and Emotional Learning (SEL) module for ..."}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories16.jpg"}
                        newsDate1={"12/12/2020"}
                        newsTitle1={'ZINDAGI TRUST AWARDED SHARIAH COMPLIANCE CERTIFICATION FOR ZAKAT'}
                        newsDescription1={"Donors who wish to give their Zakat to Zindagi Trust can do so with the peace of mind that their religious obligation is being fulfilled in accorda..."}
                        newsImg2={"assets/images/NewsEvents/newsStories17.jpg"}
                        newsDate2={"22/9/2020"}
                        newsTitle2={'REIMAGINING AN ARTS EDUCATION ONLINE'}
                        newsDescription2={"Building on from the Learning Packs we sent to our students early on in the lockdown"}
                        newsImg3={"assets/images/NewsEvents/newsStories18.jpg"}
                        newsDate3={"21/9/2020"}
                        newsTitle3={'A PLEA AND A PLAN TO PROTECT OUR CHILDREN'}
                        newsDescription3={"It is deeply disturbing that violence against women and children continues unabated in Pakistan."}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories19.jpg"}
                        newsDate1={"6/9/2020"}
                        newsTitle1={'PAKISTANI TEACHERS RESPONSE TO COVID-19'}
                        newsDescription1={"When COVID-19 first emerged in Pakistan, state institutions began deliberating"}
                        newsImg2={"assets/images/NewsEvents/newsStories20.jpg"}
                        newsDate2={"2/9/2020"}
                        newsTitle2={'PROJECT OF THE MONTH CLUB UPDATE: SEPTEMBER 2020'}
                        newsDescription2={"We hope your September is off to a happy and healthy start! We are in awe of you"}
                        newsImg3={"assets/images/NewsEvents/newsStories21.jpg"}
                        newsDate3={"14/2/2020"}
                        newsTitle3={'ZINDAGI TRUST PETITION LEADS TO IHC BAN ON CORPORAL PUNISHMENT'}
                        newsDescription3={"Great win for Child Protection today as the Chief Justice of the Islamabad High Court, upon hearing our petition"}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories22.jpg"}
                        newsDate1={"26/1/2020"}
                        newsTitle1={'GOVERNMENT SCHOOL WINS SECOND PLACE AT INTER-CITY FOOTBALL CHAMPIONSHIP'}
                        newsDescription1={"Karachi, Jan 26: SMB Fatima Jinnah Government Girls School won second place in the Karachi United School Championship"}
                        newsImg2={"assets/images/NewsEvents/newsStories23.jpg"}
                        newsDate2={"21/10/2019"}
                        newsTitle2={'OUR GOVERNMENT SCHOOL STUDENTS MEET THE ROYAL COUPLE WILLIAM AND KATE'}
                        newsDescription2={"Our government school students met and played cricket with the Duke and Duchess of Cambridge William and Kate"}
                        newsImg3={"assets/images/NewsEvents/newsStories24.jpg"}
                        newsDate3={"23/9/2019"}
                        newsTitle3={"'HOARD OUT OF GREED BUT DIE OF NEED': KARACHIITES JOIN WORLDWIDE CLIMATE STRIKE"}
                        newsDescription3={'The drums beat relentlessly and chants of "We demand clean'}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories25.jpg"}
                        newsDate1={"6/9/2019"}
                        newsTitle1={'UPCOMING WORK IN PUNJAB: MODEL SCHOOLS AND CHILD PROTECTION'}
                        newsDescription1={"Our team recently completed a successful visit to Lahore focusing on sharing our government school reform model"}
                        newsImg2={"assets/images/NewsEvents/newsStories26.jpg"}
                        newsDate2={"5/9/2019"}
                        newsTitle2={'WE STAND WITH KASHMIR'}
                        newsDescription2={"SMB Fatima Jinnah Government Girls' School adopted by Zindagi Trust observed solidarity with Kashmir to demand the restoration of human rights in t..."}
                        newsImg3={"assets/images/NewsEvents/newsStories27.jpg"}
                        newsDate3={"4/9/2019"}
                        newsTitle3={'A CELEBRATION OF URDU LITERATURE'}
                        newsDescription3={"Students from our adopted government schools paid tribute to the work of renowned Urdu dramatist Imtiaz Ali Taj during our annual Urdu"}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories28.jpg"}
                        newsDate1={"5/7/2019"}
                        newsTitle1={'CHILD PROTECTION CAMPAIGN LAUNCHED BY MOHR'}
                        newsDescription1={"Human Rights Minister Shireen Mazari on Thursday said Pakistan, unfortunately, was number one in child pornography."}
                        newsImg2={"assets/images/NewsEvents/newsStories29.jpg"}
                        newsDate2={"23/5/2019"}
                        newsTitle2={'ARTISTS, ATHLETES AND ACTIVISTS CALL FOR END TO STATE INACTION ON CHILD PROTECTION'}
                        newsDescription2={"Just over a year ago, we united after the brutal rape and murder of six-year-old Zainab in Kasur and pledged."}
                        newsImg3={"assets/images/NewsEvents/newsStories30.jpg"}
                        newsDate3={"7/3/2019"}
                        newsTitle3={'PUBLIC -PRIVATE PARTNERSHIP LAUNCHED FOR BETTER TEACHER TRAINING'}
                        newsDescription3={"A major public-private initiative to improve quality of education in government schools in Sindh was launched on Wednesday."}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories31.jpg"}
                        newsDate1={"19/2/2019"}
                        newsTitle1={'GOVERNMENT SCHOOL STUDENTS WIN BIG FOR THEIR ART WORK ON WATER CONSERVATION'}
                        newsDescription1={"Aiman Qadeer and Laiba Younas won the 2nd and 5th prize respectively in the national 5th Art for Change."}
                        newsImg2={"assets/images/NewsEvents/newsStories32.jpg"}
                        newsDate2={"3/2/2019"}
                        newsTitle2={'GOVERNMENT SCHOOLS WOW THINKERS, CREATIVES AND CELEBRITIES WITH ART SHOW'}
                        newsDescription2={"Students from government schools put up a colourful display of creativity at Karachi Khatoon-i-Pakistan Government School."}
                        newsImg3={"assets/images/NewsEvents/newsStories33.jpg"}
                        newsDate3={"1/2/2019"}
                        newsTitle3={'AN UPHILL DRIVE'}
                        newsDescription3={"THE road that takes you to the Khatoon-e-Pakistan School, Karachi, is a steep one. It has been an equally uphill drive for Shehzad Roy's Zindagi Tr..."}
                    />
                </div>
                <div className='my-8'>
                    <NewsStories
                        hideHeader={`hidden`}
                        newsImg1={"assets/images/NewsEvents/newsStories34.jpg"}
                        newsDate1={"8/2/2018"}
                        newsTitle1={'BALOCHISTAN GETS BOLD ABOUT CHILD PROTECTION'}
                        newsDescription1={"Earlier this year, a Memorandum of Understanding was signed between Aahung and Balochistan Education Department."}
                        newsImg2={"assets/images/NewsEvents/newsStories35.jpg"}
                        newsDate2={"16/1/2018"}
                        newsTitle2={'PPP DECIDES TO EQUIP CHILDREN WITH LIFE SKILLS THROUGH EDUCATION'}
                        newsDescription2={"Pakistan Peoples Party chairman Bilawal Bhutto-Zardari says the Sindh government has introduced child rights."}
                        newsImg3={"assets/images/NewsEvents/newsStories36.jpg"}
                        newsDate3={"11/1/2018"}
                        newsTitle3={"SHEHZAD ROY CALLS KASUR INCIDENT 'HEART-WRENCHING', DEMANDS JUSTICE"}
                        newsDescription3={"Famous singer and social activist Shehzad Roy in a press conference on Thursday."}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewsAndEventsPage;
