import { useState, useEffect } from "react";

const newses = {
    newses: [
        {
            id: "1",
            date: "7/9/2022",
            title: "ZINDAGI TRUST LAUNCHES 'CODING PROGRAM' IN COLLABORATION WITH KFC & TECHNOKNOWLEDGE",
            description: "In collaboration with KFC Mitao Bhook, Zindagi Trust is piloting a three-year Coding Program in their two adopted government schools- SMB Fatima Ji...",
            description1: "In collaboration with KFC Mitao Bhook, Zindagi Trust is piloting a three-year Coding Program in their two adopted government schools- SMB Fatima Jinnah and Khatoon-e-Pakistan to equip students from grades 3 to 8 with digital programming tools and modern technologies. Over 1800 female students will be involved in the program in its tenure.",
            description2: "This Wednesday, September 7th 2022, Zindagi Trust hosted a panel discussion in their school and invited stakeholders from the tech industry in order to have a discussion around the importance of STEM Education and Coding in today's digital world. Some of the notable speakers for the event included: Tanvir Maqsood- cofounder of TechnoKnowledge an organisation creating accessibility towards computational learning throughout Pakistan, Hamida Khatri- founder of the application called Teardrop that encourages women to share their stories of abuse which will help identify the disparity between the usage and collection of gendered data, Farah Ali; Co-founder of Pakistan Women In Computing (PWIC), and Raza Pirbhai-CEO KFC Pakistan alongside Shehzad Roy founder and president of Zindagi Trust.",
            description3: "At the occasion, Raza Pirbhai, CEO of KFC Pakistan highlighted the initiatives taken by KFC Mitao Bhook to bridge the literacy gap across Pakistan, which includes sponsoring and leading educational programs for thousands of students across all levels. He also noted the importance of developing programming and IT skills in Pakistan's youth, to increase the country's IT exports. Similarly, TechnoKnowledge's co-founder Tanvir, shed light on the importance of learning how to code in the digital world of today and the different career trajectories one could pursue.",
            description4: "Aligning with Zindagi Trust vision of remodelling the educational landscape of Pakistan, founder Shehzad Roy shared that launching this program in government schools will be a step toward revolutionising STEM Education in Pakistan, he emphasized that transforming government schools is the only way toward causing a sustainable impact- The main priority should be providing an enabling environment for students through revamping government schools. This is what Zindagi trust believes in and works tirelessly to accomplish. Once that environment is established it paves way for all sorts of programs to flourish within the educational ecosystem be it music, coding, mind sports and so on. ",
            description5: "To ensure standard execution of the program, Zindagi Trust has taken TechnoKnowledge on board to develop the program curriculum, scheme of studies alongside conducting training workshops for the teachers. In addition to providing books, lectures and curriculum templates, TechnoKnowledge will be training the teachers of Zindagi Trust and monitoring the performance of this program every 4 months. Previously, TechnoKnowledge has created a Coding curriculum framework for the Ministry of Education and provided curriculum design support for a coding project in KPK Pakistan that trained about 90,000 students and 30,000 teachers.",
            description6: "Joining virtually, Hamida Khatri shared her personal journey of working on tech-related projects that incorporate multiple disciplines such as art, storytelling and much more within the computational field.",
            img: "/assets/images/NewsEvents/newsStories1.png",
            img1: "https://www.zindagitrust.org/img/news/kfc1.jpeg",
            img2: "https://www.zindagitrust.org/img/news/kfc2.jpeg",
            img3: "https://www.zindagitrust.org/img/news/kfc3.jpeg",
            img4: "https://www.zindagitrust.org/img/news/kfc4.jpeg"
        },
        {
            id: "2",
            date: "23/8/2022",
            title: "TIKTOK, ZINDAGI TRUST INITIATE DIGITAL SAFETY WORKSHOPS IN GOVT SCHOOLS",
            description: "Famous video sharing app TikTok, in collaboration with Zindagi Trust, has initiated a series of workshops across their network of government school...",
            description1: "About 3,000 students, teachers and parents will learn about safe usage of internet, with focus on social media.",
            description2: "Separate workshop for teachers and parents will educate them on how they can ensure safety of youngsters on internet.",
            description3: "Workshops will cover navigating online safety issues such as cyber-bullying, catfishing and false information.",
            description4: "Famous video sharing app TikTok, in collaboration with Zindagi Trust, has initiated a series of workshops across their network of government schools in a bid to create awareness around digital safety among students, teachers and parents.",
            description5: "A statement issued by the partners said that about 3,000 students, teachers and parents will learn about safe usage of the internet, with a focus on social media.",
            description6: "A separate workshop for teachers and parents will also be conducted, seeking to educate them on how they can ensure the safety of youngsters on the internet, it added.",
            description7: "According to the statement, young internet users from grades 7 to 9 will learn about practices of internet usage, and how can they become responsible digital citizens and cultivate a safe online community across the nation.",
            description8: "The workshops will cover a range of topics including navigating online safety issues such as cyber-bullying, catfishing and false information. There will be detailed modules on the harmful behaviours prevalent on social media, ways to share appropriate information, identifying fake news and misinformation and reporting mechanisms to report illicit and harmful content on social media.",
            description9: "The statement said that the workshops also aim to educate teachers and parents on how to use safety features on platforms like TikTok to ensure their children remain safe on social media. They will be guided about TikTok's family pairing features, which allow parents to link their TikTok accounts to their teens' and set controls including screentime management, restricted mode and direct messages.",
            quotetext1: "Farah Tukan, head of government relations and public policy in Middle East, Turkey, Africa and Pakistan (METAP) at TikTok, said:",
            quotetext2: "Zindagi Trust's Senior Marketing and Resource Development Manager Faiq Ahmed said:",
            quote1: "“These workshops are another step in the right direction for ensuring our TikTok community in Pakistan remains digitally safe. We are fully committed to ensuring the safety of Pakistan‘s digital community, as we continue implementing policies and processes to proactively identify and prevent every attempt to share inappropriate content on our platform.”",
            quote2: "“It's about time to create awareness among the young generation about digital safety so they can deal with safety and privacy challenges on the internet.”",
            img: "/assets/images/NewsEvents/newsStories2.png",
            img1: "https://www.geo.tv/assets/uploads/updates/2022-08-23/435584_8346775_updates.jpg"
        },
        {
            id: "3",
            date: "21/7/2022",
            title: "CHILD PROTECTION AND DIGITAL SAFETY DIALOGUE ORGANIZED BY ZINDAGI TRUST IN COLLABORATION WITH META",
            description: "Zindagi Trust in collaboration with Meta (Facebook) hosted a roundtable discussion at GECE Hussainabad to identify ways to make digital platforms s...",
            description1: "(L-R) Shehzad Roy, M. Tahir Rai and Iqbal Detho at the programme organised by Zindagi Trust in collaboration with Meta.",
            description2: "Zindagi Trust in collaboration with Meta (Facebook) hosted a roundtable discussion at GECE Hussainabad to identify ways to make digital platforms safer for children and share policy recommendations with government agencies to help create better reporting mechanisms.",
            description3: "On behalf of Meta, the Head of Safety Policy, Shireen Vakil informed the audience about safety measures available for young users on family apps of Meta to safeguard themselves from predators online. She highlighted the new technology being used at Meta, including artificial intelligence and machine learning to detect inappropriate content and remove it accordingly.",
            description4: "The Director General of Federal Investigation Agency (FIA), Muhammad Tahir Rai, was also present at the occasion along with representatives from the Cyber Crime Wing. The Director briefed the audience about the measures being taken by Cyber Crime Wing to identify cybercriminals and curb different forms of cybercrimes across Pakistan.",
            description5: "Although over 2 million cases of child exploitation imagery were uploaded on Facebook platform in 2021 alone, the Director cited that only a total of 343 cases have been reported to FIA in the last 5 years. To help address this gap, he encouraged people to report cases and lodge complaint against sexual predators online and thereby help FIA take immediate action against them.",
            description6: "Another panel speaker, Mr. Iqbal Detho, Member of the National Commission on the Rights of Child, stressed the need to review Prevention of Electronic Crimes Act 2016 (PECA) as well as the Pakistan Penal Code and make amendments for child safety in digital spaces. He also emphasized the implementation of policy making at the provincial level to help bring justice and provide legal aid to victims.",
            description7: "Under this collaboration, Zindagi Trust also produced an informative video to educate people about the harms of sharing inappropriate content and encourage them to report malicious content through proper channels instead of sharing it further.",
            description8: "This discussion was the first of a series of roundtable discussions which are scheduled to take place at Zindagi Trust to engage various stakeholders and identify policy recommendations to make online spaces safer for children in Pakistan.",
            quotetext1: "Sharing his thoughts on the campaign, Founder and President of Zindagi Trust, Shehzad Roy said:",
            quotetext2: "Sarim Aziz, Director Public Policy, South Asia-Meta said:",
            quote1: "“Whenever I used to encounter disturbing content, my first instinct was to share it so it could help find the perpetrator. However, I have realised that the content can be distressing for many viewers and is a breach of privacy of the victims. We want to push for justice for victims and advocate for safer digital spaces instead of sensationalising traumatic events. Zindagi Trust takes pride in being a vocal advocate of policy level change for children's safety and education. We rely on the support of government institutions and social media companies like Meta to help us achieve our goals”",
            quote2: "“We have a zero-tolerance policy for content related to child exploitation and abuse. We use latest ground breaking technology to prevent, detect and remove content related to child abuse and violence. Since this is a highly sensitive matter, we take a comprehensive approach to keep our family of apps free of such malicious content and continue to collaborate with local authorities, rights bodies and relevant stakeholders to fully ensure that the victims are not repeatedly traumatized by sharing evidence of their ordeal. Instead the content should be reported through proper channels so that the government agencies can move against those responsible”",
            img: "/assets/images/NewsEvents/newsStories3.png",
            img1: "https://zindagitrust.org/news/small39-Header-News159420345.png"
        },
        {
            id: "4",
            date: "14/2/2022",
            title: "TIKTOK AND ZINDAGI TRUST JOIN HANDS FOR A SAFER PAKISTAN",
            description: "Zindagi Trust has partnered with the fastest growing global video making platform TikTok with the aim of creating an awareness campaign for a digit...",
            description1: "Zindagi Trust has partnered with the fastest growing global video-making platform TikTok with the aim of creating an awareness campaign for a digitally safe Pakistan. Both parties have signed the Memorandum of Understanding (MoU) and announced the partnership on Safer Internet Day on February 8 in Islamabad.",
            description2: "The shared goal of this campaign is to conduct a series of workshops for Zindagi Trust’s adopted schools, Khatoon-e-Pakistan, and SMB Fatima Jinnah School in Karachi. The topics of the workshop will tackle multiple themes regarding cyber safety such as safety features on TikTok, harmful behaviors prevalent on social media, how to share appropriate information, how to identify fake news, and how to report harmful content on social media.",
            description3: "The Zindagi Trust-TikTok partnership will establish essential guidelines on how to be responsible digital citizens since the main motive behind the digital safety awareness campaign is to cultivate a secure online community.",
            description4: "As an organization that continuously advocates for child safety and protection rights, Zindagi Trust will participate head-on in the awareness campaign by taking the initiative of creating and sharing informative videos encompassing the multiple facets of digital safety through its official TikTok account and other social media platforms to engage with a wider audience and pave way for an impactful discourse. ",
            description5: "Zindagi Trust will also work towards empowering children through training sessions on content creation for online social media platforms, especially TikTok which could be regarded as an essential skill in a digital era.",
            quotetext1: "Speaking about the partnership, TikTok's Head of Government Relations and Public Policy — Middle East, Turkey, Africa and Pakistan (METAP), Farah Tukan, said:",
            quotetext2: "Zindagi Trust’s Chief Executive Officer- Dr. Hameedah Sayani shares similar sentiments and expresses that this partnership is definitely a step in the right direction for its intended cause can reach the masses through the popularity of the TikTok app in Pakistan. She shared that Zindagi Trust’s constant effort has been to inculcate growth not just within schools but throughout Pakistan -",
            quote1: "“It is a pleasure for us to collaborate with Zindagi Trust – a prestigious non-governmental organization that promises wellbeing and empowerment of the masses while protecting the ever-growing community of internet users in Pakistan.”",
            quote2: "“we remain committed to improving the quality of life for our communities while accelerating sustainable development and socio-economic growth of the nation.”",
            img: "/assets/images/NewsEvents/newsStories4.png",
            img1: "https://www.zindagitrust.org/news/tiktok-zindagitrust.jpg"
        },
        {
            id: "5",
            date: "11/2/2022",
            title: "ZINDAGI TRUST PARTNERS UP WITH TIKTOK TO CREATE DIGITAL SAFETY AWARENESS",
            description: "As our next move in safeguarding children over digital platforms, Zindagi Trust has partnered up with TikTok to help our young users learn safer wa...",
            description1: "As our next move in safeguarding children over digital platforms, Zindagi Trust has partnered up with TikTok to help our young users learn safer ways to navigate the web and become mindful of the reporting mechanisms available to them to report cyberbullying and inappropriate content.",
            description2: "Under this partnership, our organization will not only conduct a series of workshops with students and teachers to promote safe Internet usage, it will also invite parents to learn about the safety features available on TikTok and help them foster a deeper and strong connection with their children on the platform.",
            description3: "Zindagi Trust will also help its students to create appropriate content in accordance with TikTok’s Community Guidelines and release a series of TikTok videos to enable a wider audience to learn about digital safety and tools available to them for their protection online.",
            img: "/assets/images/NewsEvents/newsStories5.png",
            img1: "https://www.zindagitrust.org/news/TikTok-x-Zindagi-Trust.png"
        },
        {
            id: "6",
            date: "30/11/2021",
            title: "UPDATE ON CORPORAL PUNISHMENT- ICT BILL PASSED BY THE PARLIAMENT OF PAKISTAN",
            description: "On 17th November 2021, the parliament of Pakistan passed the Islamabad Capital Territory Prohibition of Corporal Punishment Bill which prohibits al...",
            description1: "On 17th November 2021, the parliament of Pakistan passed the Islamabad Capital Territory Prohibition of Corporal Punishment Bill which prohibits all forms of corporal punishment at work places and educational institutions (both public and private). This bill will now be called the Islamabad Capital Territory Prohibition of Corporal Punishment Act.",
            description2: "Several studies have reported that exposure to physical harm and aggression at a young age negatively impacts the mental and physical health of a child and can lead to long-term psychological damage[2]. In 2015, UNICEF collected data on corporal punishment from Ethiopia, India, Peru, and Vietnam and found a link between poor math scores and corporal punishment in children of different ages[3], which further indicates how physical violence can affect academic performance and lead to learning losses.",
            description3: "It is heartwarming to see that our efforts over the years in the form of campaigns and through advocacy are coming to fruition and children all around Pakistan will now be treated with dignity and respect, a basic human right. This accomplishment has only been possible with support from our donors and lawmakers.",
            description4: "On this momentous occasion, we would also like to express our gratitude to Mehnaz Akber Aziz, for spearheading the movement and helping pave the way for the safety of our children in Pakistan through policy legislation.",
            quotetext1: "This Act follows the ICT Corporal Punishment Bill which was passed recently in the National Assembly in February 2021. Mehnaz Akbar Aziz, a member of the National Assembly and Chairperson of SDGs Committee on Child Rights, led this private bill in the Assembly with the support from our founder, Shehzad Roy. Endorsing the bill, speaker of the National Assembly, Asad Qaiser has said:",
            quote1: "Corporal punishment is an unacceptable act in the mental development of children. It is our common responsibility to provide a safe environment in the process of education. National Assembly has passed a bill to ban corporal punishment of children, which will play a key role in preventing such a move",
            img: "/assets/images/NewsEvents/newsStories6.png",
            img1: "https://www.zindagitrust.org/news/CorporalPunishmetUpdates.jpg"
        },
        {
            id: "7",
            date: "12/8/2021",
            title: "US CONSULATE GENERAL VISIT",
            description: "Monday 12th Oct 2021, U.S. Consul General, Mark Iroh, along with his team visited Khatoon-e-Pakistan Government Girls School, a school adopted by t...",
            description1: "Press Release: Monday 12th Oct 2021, U.S. Consul General, Mark Stroh, along with his team visited Khatoon-e-Pakistan Government Girls School, a school adopted by the NGO, Zindagi Trust, where they were provided an extensive tour of the premises by the founder of the organization, Shehzad Roy along with the Chief Executive Officer, Hameedah Sayani.",
            description2: "The Consul General applauded the efforts of Zindagi Trust in restoring deteriorated classroom walls after adoption of the school, and transforming abandoned rooms into art halls and well-equipped computer labs, to help build a safe, learning atmosphere for the children.",
            description3: "Making his way through the art room, the Consul General exchanged warm greetings with students and commended the artworks created by the students. At the occasion, Shehzad Roy highlighted the positive impacts of introducing Arts and Music in the school curriculum and encouraged other government schools to replicate their example.",
            description4: "During the school tour, the Consul General was briefed about the various programs introduced by Zindagi Trust including Life Skills Based Education (LSBE), Music, Mind Sports (chess and scrabble) and Breakfast & Health Program in helping promote well-rounded learning of students, both inside and outside the classroom.",
            description5: "The general was also informed about the strides made by Zindagi Trust in the domain of Policy Legislation to prohibit corporal punishment and revise teacher evaluation forms at the provincial and federal level respectively to help make education more accessible and student centric for students throughout the country.",
            description6: "Near the end of the tour, the chief executive officer of Durbeen, Salma Alam, shed light on the work of Durbeen, a sister organization of Zindagi Trust, to help create high skilled teachers and elevate the quality of education being imparted, from an educator’s perspective.",
            description7: "At the end of his visit, Consul General congratulated the work bring carried out by Zindagi Trust and Durbeen and expressed his hope that these two organizations would continue to play a vital role in reforming public education of Pakistan.",
            img: "/assets/images/NewsEvents/newsStories7.png",
            img1: "./assets/images/NewsEvents/newsStories7.png"
        },
        {
            id: "8",
            date: "16/8/2021",
            title: "A CAMPAIGN TO PROTECT CHILDREN ONLINE",
            description: "In collaboration with Facebook, Zindagi Trust is launching a campaign on child protection in digital spaces. This campaign begins with a short vide...",
            description1: "In collaboration with Facebook, Zindagi Trust is launching a campaign on child protection in digital spaces. This campaign begins with a short video urging people to report child sexual abuse material (CSAM) instead of sharing it further. According to Facebook, Pakistan is among the top three countries where abuse material is shared.",
            description2: "In Pakistan this content is frequently shared out of outrage or to capture the attention of authorities in order to help survivors and apprehend perpetrators. However, as a mechanism of reporting this method has privacy concerns, can trigger trauma and have adverse impacts on mental health.",
            description3: "Social media platforms are required to prevent the sharing of CSAM on their applications. Facebook works to remove this content as soon as it is highlighted, after which the incident is reported to the National Center for Missing and Exploited Children (NCMEC) based in the United States of America (USA).",
            description4: "The removal of child abuse content from these platforms is just one leg of the journey, it is equally vital to consider the mechanisms by which survivors are protected and provided justice. In Pakistan, the Cyber Crime wing of the Federal Investigation Agency (FIA) has been tasked with responding to the proliferation of child abuse content, which is illegal according to the Pakistan Electronic Crimes Act (PECA) 2016 and some sections of the Pakistan Penal Code. An amendment to PECA is in the works to expand the definitions of online child abuse and formulate preventive measures, spearheaded by a committee working under the Federal Ombudsman.",
            description5: "The aim of this campaign is to underscore the effect that sharing CSAM has on survivors and why it should be reported instead of shared. It will open a discussion on the weakness of current reporting mechanisms, which leaves social media as the only viable option to bring cases to the notice of authorities.",
            description6: "This campaign will consist of a series of videos, both instructional and informational, as well as policy dialogues with multiple stakeholders to identify policy recommendations that can be given to the government and Facebook.",
            img: "/assets/images/NewsEvents/newsStories8.png",
            img1: "./assets/images/NewsEvents/newsStories8.png"
        },
        {
            id: "9",
            date: "6/8/2021",
            title: "CHILD PROTECTION ACTION DIALOGUE HOSTED BY ZINDAGI TRUST AND SINDH POLICE",
            description: "On 15th June 2021, Zindagi Trust had a meeting with IG Sindh Police Mushtaq Ahmed Mahar at one of our adopted schools, Khatoon-e-Pakistan (KPS). Th...",
            description1: "On 15th June 2021, Zindagi Trust had a meeting with IG Sindh Police Mushtaq Ahmed Mahar at one of our adopted schools, Khatoon-e-Pakistan (KPS). He was joined by the Founder of Zindagi Trust, Shehzad Roy, former Head of Special Programs and Advocacy, Sana Kazmi, CEO Hameedah Sayani, Faiq Ahmed and Manish Kazmi. There, the IG Police was provided an extensive tour of the premises and shown the work that Zindagi Trust has carried out at KPS. After the tour, he had a meeting in which he stressed the importance of the work done by Zindagi Trust in implementing life skills based education (LSBE). He mentioned it was important to create awareness amongst students for child protection against abuse and to encourage reporting to the police. In this detailed conversation he spoke of the importance of working together to address the issues faced by vulnerable stratas of the country (students being one of the most vulnerable) and aimed to improve the situation as best possible.",
            description2: "As a follow up to this meeting, the Sindh Police collaborated with Zindagi Trust to hold an open discussion with relevant stakeholders about how children can be safe guarded. This Child Protection Action Dialogue took place on Wednesday the 28th of July, 2021 at Khatoon-e-Pakistan Government Girls School in Karachi. The host, Zindagi Trust, presented the organization’s experience in prohibition of corporal punishment as well as promotion of life skills based education (LSBE).",
            description3: "All the attendees had an extensive and interactive discussion about their experiences with child protection in each of their respective capacities. This included members of the National Commission on the Rights of Child, the Sindh Child Protection Authority and the Social Welfare Department. The meeting focused on creating coordination between child protection authorities and strengthening their relationship with law enforcement agencies. The Sindh Police provided data of recorded complaints for the year 2019-2020 and promoted use of Child Helpline 1121 and Zainab Alert application to register and report cases.",
            description4: "During the discussion, lack of official identification documents (Child Registration Certificate/B-Form) held by children was highlighted as one of the obstacles in proper documentation of cases, and it was therefore encouraged that all children should get themselves registered with NADRA. Furthermore, the need for psychological experts to work with law enforcement agencies was emphasized to help address mental trauma and invisible abuse amongst our children.",
            description5: "Street children were also cited as victims of abuse and the need for shelter homes as well as elimination of beggary were identified as means to keep them at bay from abuse and affliction. In addition, marginalization of transgender community and religious minorities in the country were also discussed at the meeting.",
            img: "/assets/images/NewsEvents/newsStories9.jpeg",
            img1: "https://www.zindagitrust.org/news/cpad.jpg",
            img2: "https://www.zindagitrust.org/news/cpad1.jpg",
            img3: "https://www.zindagitrust.org/news/cpad2.jpg",
            img4: "https://www.zindagitrust.org/news/cpad3.jpg",
            img5: "https://www.zindagitrust.org/news/cpad4.jpg"
        },
        {
            id: "10",
            date: "12/7/2021",
            title: "SINDH GOVERNMENT MOVES TO MODERNISE TEACHER EVALUATION",
            description: "Karachi, June 2nd: The Sindh Government approved a new teacher performance evaluation format for government teachers across the province. Teachers ...",
            description1: "Karachi, June 2nd: The Sindh Government approved a new teacher performance evaluation format for government teachers across the province. Teachers will now be judged on factors related to the teaching profession, like student-centered teaching and active classroom management instead of the generic metrics of the Annual Confidential Report (ACR) applicable to all civil servants of a certain grade.",
            description2: "The initial consultations with the government identified a significant disconnect between the actual responsibilities of teachers and how their performance was being evaluated. Previously, teachers were supposedly judged on metrics such as typing speed, financial integrity and observance of security measures, which have little to no connection to a modern teacher’s role or scope. This meant that teachers were not assessed on their pedagogical skills and classroom interaction, leaving no incentive for them to improve in those areas. Not only did this performance evaluation system suffer from a lack of accountability for under-performing teachers, it also fell short on appreciation of exceptional teachers.",
            description3: "This initiative was the brainchild of Abdul Haque, former CEO of Zindagi Trust and an ardent advocate of institutional reform.",
            description4: "Stakeholders from the Sindh Education and Literacy Department (SELD), Zindagi Trust officials and government representatives held several consultations over the years to develop a Performance Evaluation Report (PER) form customized to the teaching profession was developed. The new evaluation form has sections on Classroom Management, Planning and Instruction and Classroom Assessments, allowing for teachers to be assessed on their lesson plans, on using student-centered activities, maintaining regular feedback through assessments, and on encouraging a positive classroom environment, to name a few categories.",
            description5: "The provincial education minister and education secretary also commented on what this development would mean for education in the province and acknowledged Zindagi Trust’s role in taking this initiative.",
            description6: "Education Minister Saeed Ghani said teachers play the most important and integral part in a child’s development.",
            description7: "He remarked that transforming the ACR into the PER was a great effort of the Sindh Education Department and the Zindagi Trust.",
            description8: "The efficacy of such an initiative will require a considered and comprehensive effort by the government to ensure that teachers and head teachers are not only aware of but understand what is now expected of them in and outside the classroom. It would be unrealistic to expect in-service teachers to instantly perform well according to the new metrics if they are not first trained to understand and deliver on them.",
            quote1: "Three years ago, our team was brainstorming how we could create real incentives for government teachers to adopt practices like lesson planning and positive interaction to improve their teaching,” says Anam Palla, Head of Programs at Zindagi Trust, a non-profit organization that led the consultations for this effort. “We decided to advocate for improvement of a document used to evaluate teachers which, as a school head back then, I had found to be limited, outdated, and, consequently, largely irrelevant.",
            quote2: "The ACR over the past decades had become a mere formality rather than be an instrument of assessment/evaluation. This was a poor reflection on the resolve to nurture merit in the system, leading to better governance. To keep pace with the emerging challenges of modern education, the instrument of ACR never evolved and thus lagged far behind. The gulf widened as the time passed, affecting adversely the quality of teachers, hence the standard of education. It was to address this gap that Zindagi Trust has been seized with overhauling the ACR Form for nearly four years.",
            quote3: "While our team at Zindagi Trust conceptualized the idea and the initial draft in 2018, and sought feedback from external partners therafter, much of the core work happened over the past year as technical experts and officials from the Education Department critically reviewed the form, field tested it with Head Teachers and supported its evolution through several iterations to the final form. The ownership taken by Education Department Officials has been heartwarming - adds Palla.",
            quote4: "The PER for teaching staff has been developed after a lot of homework, research and consultation with education staff, and concentrates on professionalism, said School Education Secretary Narejo. He added that the Zindagi Trust had provided assistance and necessary motivation in its development.",
            quote5: "Linking the PER of teachers to the unique nature of their job, which includes lesson planning, classroom management and other elements, will go a long way in incentivising more effective classroom practices.",
            quote6: "We will do our best to implement it and make it a dynamic document through annual feedback loops.",
            quote7: "Another first for the Sindh government that I would like to appreciate and thank them for,” said Shehzad Roy, Founder of Zindagi Trust. “We are now looking forward to the implementation and training and then we can truly celebrate this win for Sindh’s schools. We tried to initiate this process with other provinces as well and hope they will follow soon.",
            img: "/assets/images/NewsEvents/newsStories10.png",
            img1: "https://www.zindagitrust.org/news/ACR-Heading.png",
            img2: "https://www.zindagitrust.org/news/acr/5.jpg",
            img3: "https://www.zindagitrust.org/news/acr/4.jpg",
            img4: "https://www.zindagitrust.org/news/acr/3.jpg",
            img5: "https://www.zindagitrust.org/news/acr/2.jpg",
            img6: "https://www.zindagitrust.org/news/acr/7.jpg",
            img7: "https://www.zindagitrust.org/news/acr/6.jpg",
            img8: "https://www.zindagitrust.org/news/acr/8.jpg"
        },
        {
            id: "11",
            date: "5/3/2021",
            title: "ADMISSIONS OPEN AT SMB FATIMA JINNAH GGS",
            description: "Here are the admissions details for the upcoming academic year for SMB Fatima Jinnah Government Girls School. There are a restricted number of seat...",
            description1: "Here are the admissions details for the upcoming academic year for SMB Fatima Jinnah Government Girls School. There are a restricted number of seats available and admissions forms will be handed out on a first come first serve basis.",
            description2: "Total Seats: 561",
            description3: "Admissions forms can be collected from SMB Fatima Jinnah Government Girls School Nishtar Road, Garden West Area, Karachi between 8am to 11:30am",
            img: "/assets/images/NewsEvents/newsStories11.jpeg",
            img1: "https://zindagitrust.org/news/SMB-AD-OP.jpeg"
        },
        {
            id: "12",
            date: "5/3/2021",
            title: "ADMISSIONS OPEN AT KHATOON-E-PAKISTAN GGS",
            description: "Here are the admissions details for the upcoming academic year for Khatoon-e-Pakistan Government Girls School. There are a restricted number of sea...",
            description1: "Admissions Open at Khatoon-e-Pakistan GGS Here are the admissions details for the upcoming academic year for Khatoon - e - Pakistan Government Girls School.There are a restricted number of seats available and admissions forms will be handed out on a first come first serve basis.",
            description2: "Admission Form Information: Admissions forms can be collected from Khatoon- e - Pakistan Government Girls School, Sir Ibrahim Haroon Jafar Road, Bahadurabad, Karachi, between 8am to 11: 30am",
            img: "/assets/images/NewsEvents/newsStories12.jpeg",
            img1: "https://zindagitrust.org/news/KPS-AD-OP.jpeg"
        },
        {
            id: "13",
            date: "25/2/2021",
            title: "ENDING CORPORAL PUNISHMENT � NEXT STEPS",
            description: "With the historic passage of the Islamabad Capital Territory Prohibition of Corporal Punishment Bill this week, it is important to take stock of th...",
            description1: "With the historic passage of the Islamabad Capital Territory Prohibition of Corporal Punishment Bill this week, it is important to take stock of the work that remains to be done to effectively eradicate the inhumane practice of corporal punishment across Pakistan. Here’s what remains to be done:",
            description2: "Legislation Having adequate legal backing to ban and criminalise corporal punishment is an important first step that still needs to be completed across Pakistan. The Islamabad Capital Territory Prohibition of Corporal Punishment Bill passed by the National Assembly this week has to be passed into law by the Senate. The provincial assemblies of Punjab and Balochistan need to pass laws explicitly banning corporal punishment. (Currently, corporal punishment is banned in Punjab through administrative and court orders but no legal backing exists for the same). The KP Child Protection Act needs to be amended to also disallow the practice of corporal punishment ‘as provided under Section 89’ so that children can no longer be hit even if deemed to be “in good faith” or “for their benefit.”",
            description3: "Implementation and Monitoring Passing legislation is only the first step - ensuring implementation requires the following steps from an administrative perspective: In Sindh, the rules of implementation for the Prohibition of Corporal Punishment Act 2016 need to be notified so that there is clarity about the referral mechanism, reporting, penalties and monitoring of the law. The rules of business for the recent ICT bill must be formulated and communicated within six months once it is passed by Senate The implementation of existing and upcoming legislation needs to be enforced, scrutinized and kept up to date Teachers and Education Department officials need to officially be made aware of the law and trained on effective alternatives such as time- outs, detention, verbal warnings, demerit boxes, apology letters, behaviour contracts, withdrawal of privileges, community service, etc.as part of both their induction and regular in -service training.",
            description4: "Awareness and Sensitization Much of the challenge in addressing this issue revolves around changing mindsets.Over 70% of teachers believe that corporal punishment is a useful practice, which explains why it remains widespread. People need to know about the law and understand the purpose behind it before they can follow it. Regular, systematic awareness campaigns must be planned targeting children, parents, educators and caregivers in both rural and urban, as well as public and private settings to inform them about: (i) the existing laws banning corporal punishment(ii) the severe long- term impact of corporal punishment, and(iii) effective alternatives to the harmful practice Workshops need to be conducted at every level to sensitise law enforcement officials and judges so that they can understand the adverse effects of corporal punishment and empathise with children when they deal with reported cases",
            description5: "How you can help Post about this issue on your social media to create awareness Talk to children, parents and educators in your circle to make sure they know Write to your elected representatives – MNAs, MPAs, Senators - to keep up the pressure",
            img: "/assets/images/NewsEvents/newsStories13.jpeg",
            img1: "https://www.zindagitrust.org/news/NA-BCP-NS.jpeg"
        },
        {
            id: "14",
            date: "23/2/2021",
            title: "NA PASSES LAW TO BAN CORPORAL PUNISHMENT IN THE CAPITAL",
            description: "In a historic move, the National Assembly passed the ICT Prohibition of Corporal Punishment Bill, which effectively bans all forms of corporal puni...",
            description1: "In a historic move, the National Assembly passed the ICT Prohibition of Corporal Punishment Bill, which effectively bans all forms of corporal punishment “however light” at the “work place, in all types of educational institutions including formal, non-formal, and religious both public and private, in child care institutions including foster care, rehabilitation centers and any other alternative care settings The new law will penalize teachers for assault and hurt inflicted upon children, regardless of intention, canceling out the provisions of Section 89 of the PPC which had allowed teachers and guardians to administer physical punishment “in good faith” and “for the benefit” of the child.",
            description2: "This was a private member bill moved by Mehnaz Akbar Aziz of the PML-N.The bill had been passed by the Standing Committee for Education as far back as 2019 but it could not make progress as discussion on it was withheld for 15 months after which it was referred to – and remained stuck with – another committee.Minister of Human Rights Shireen Mazari presented an amendment under which complaints put forward by children would be brought before a court or a magistrate instead of leaving the complaint procedures vague which often leads to the formation of committees that do not accomplish much.",
            description3: "“The efforts of civil society, treasury and opposition benches, Justice Athar Minallah, Shehzad Roy - everyone coming together enabled this Bill to be brought before the Senate. But protecting our children requires more than passing this Bill. The rules of business have to be clarified and the mindset that legitimizes corporal punishment needs to be changed through informative awareness campaigns.”",
            description4: "Earlier, organisations and activists working for child protection impressed upon the parliament to pass this legislation urgently. Musician Shehzad Roy, founder of Zindagi Trust which has been campaigning to get the practice banned since his education TV show in 2013, ramped up their advocacy on the issue in recent weeks and urged key lawmakers to hear the bill on priority. This followed their petition in the Islamabad High Court a year ago which had led to a court order suspending Section 89 and effectively banning corporal punishment.",
            description5: "Similarly, child rights activists and lawyers Syed Miqdad Mehdi and Ahmar Majeed, whose petition to Lahore High Court (LHC) led to a ban on corporal punishment in all schools after a horrific incident against special children, identified Section 89 as the impediment to any step taken against the cruelty of corporal punishment and demanded its repeal. According to Mehdi, “corporal punishment is against children’s fundamental rights of dignity, survival, development and protection and should be curbed as soon as possible through legislative measures.”",
            description6: "“When a child gets physical punishment, society is telling them – and an entire generation – that violence is a valid means of resolving a problem. This law will not just protect our children but also lay the foundation for a safer, kinder and more peaceful Pakistan,” said Zindagi Trust founder and musician Shehzad Roy. Next steps: This is a historic day but much remains to be done.A survey in 2014 ago showed over 70% of Pakistani teachers think corporal punishment is useful for disciplining students.What is needed urgently? Changing mindsets will require mass awareness campaigns that sensitize educators and caretakers to the harms of corporal punishment and educates them on healthy alternatives like positive disciplining.",
            description7: "Ensuring this law creates a practical impact necessitates that the federal government make accompanying rules of business - covering referral mechanisms, reporting, penalties as well as systematic national awareness programs - within six months as advised in the law. For context, Sindh passed their Prohibition of Corporal Punishment in 2017, but there are still no rules of implementation developed and communicated, nor any awareness campaign launched in schools. Efforts are also needed to streamline the ban across the country, including in provinces like Sindh and GB that already have the required laws to ban this practice.",
            description8: "Sana Kazmi, Head of Advocacy at Zindagi Trust, highlighted that corporal punishment is also one of the primary reasons children drop out of school in Pakistan, which has one of the highest out-of-school populations in the world:",
            description9: "“The cases that get reported to the media are a minority; of those, the ones that make it to a police report are even fewer; and of those, the ones that get noticed are those in which the abuse is extreme. There are still schoolboys and schoolgirls who have not lost their sight or hearing or lives but are beaten up at school because they like to crack jokes in the classroom. There are still toddlers who have forever sworn off a subject – or worse, school – because of abuse and ridicule meted out for not answering a question correctly.  Thousands of our children are growing up with this trauma, unable to lead healthy, functioning lives, let alone have any hope of becoming productive members of society.”",
            img: "/assets/images/NewsEvents/newsStories14.jpeg",
            img1: "https://www.zindagitrust.org/news/bcp.jpg"
        },
        {
            id: "15",
            date: "22/2/2021",
            title: "WHEN LIFE GIVES YOU EMOTIONS, MAKE ART",
            description: "In October 2020, amidst the hullabaloo of schools reopening for the first time, we introduced a new Social and Emotional Learning (SEL) module for ...",
            description1: "In October 2020, amidst the hullabaloo of schools reopening for the first time, we introduced a new Social and Emotional Learning (SEL) module for our primary grade students. Despite the fact that we went into a second lockdown after barely a month of in-person school, the SEL module got off to a roaring start in online classes. Through innovative and engaging lessons delivered through WhatsApp, our teachers had students immersed in navigating complex emotions and developing social awareness through art based activities.",
            description2: "SEL activities and classes encourage five major capabilities in children: Self- awareness Self - management Responsible decision making Social awareness Relationship skills",
            description3: "What SEL is not: A school negating the role of the parent Psychosocial therapy Regulating student conduct and disciplining students",
            description4: "Conversations around emotions and behaviors are vital in aiding students come to terms with their own experiences. SEL creates a safe and positive learning environment which fosters children into becoming healthy expressive adults. It promotes ideas of personal growth and allows them to gain confidence, empathy and stress management skills.",
            description5: "It has been found that supporting young people’s SEL has long-lasting effects, including lowering rates of depression and anxiety which is crucial to the mental health of children in this uncertain ‘New Normal’.",
            description6: "The consequences of a healthy approach to social and emotional behaviors were reported in a study, published in the journal of Child Development, where it was found that students exposed to SEL learning achieved an 11 percentage gain in their academic performance.",
            description7: "Here is what our Social Studies lead, Aasia Atiq shared about the SEL module she designed:",
            description8: "“We started SEL when schools reopened after the first lockdown. It was to keep students in constant contact and with each other and their teachers through WhatsApp and Zoom, and to get them engaged in fulfilling activities and learning life skills during Covid-19. We conduct activities /classes once a week.”",
            description9: "Through the heartwarming artwork that students created for exercises during their SEL classes, you can also see the expression of their frustrations with online learning. These drawings help students identify and articulate the negative emotions that they are feeling. By maintaining an ‘Expression Journal’ they are encouraged to identify different types of emotions as well as their causes, and thus cope with them in a healthy manner. One of the activities also involved creating and using a “Worries Box” which encouraged them to identify, accept, normalize and thus manage some of their difficult and worrying thoughts and feelings.",
            description10: "Our experience of teaching SEL has shown an improvement in the lives of not only the students but also teachers by encouraging them to acknowledge, know and accept their selves and their emotions. The module was initially started to help students regulate their emotions, communicate with compassion and empathy, build relationships and learn how to make decisions. During distance learning, the turn towards student wellbeing and an opportunity to provide social interaction with the school and their friends proved to be key to its success, so much so that SEL classes had the best participation out of all our distance learning on Whatsapp. To learn more about our SEL initiative, you can read about it from the perspective of a student and a  teacher.",
            img: "/assets/images/NewsEvents/newsStories15.jpg",
            img1: "https://www.zindagitrust.org/news/pic22.jpg",
            img2: "https://www.zindagitrust.org/news/pic23.jpg",
            img3: "https://www.zindagitrust.org/news/pic24.jpg",
            img4: "https://www.zindagitrust.org/news/pic25.jpg",
        },
        {
            id: "16",
            date: "12/12/2020",
            title: "ZINDAGI TRUST AWARDED SHARIAH COMPLIANCE CERTIFICATION FOR ZAKAT",
            description: "Donors who wish to give their Zakat to Zindagi Trust can do so with the peace of mind that their religious obligation is being fulfilled in accorda...",
            description1: "Donors who wish to give their Zakat to Zindagi Trust can do so with the peace of mind that their religious obligation is being fulfilled in accordance with the Shariah. With the help of Alhamd Shariah Advisory Services, Zindagi Trust has obtained a Shariah Compliant Certification for its management of Zakat donations after a rigorous process of training and evaluation. This ensures that every donation we receive as Zakat is handled and distributed in a way that is compliant with established guidelines according to the Shariah.",
            description2: "We achieve this through a transparent and structured approach. What happens when we are given Zakat? Zindagi Trust follows a Wakala system, in which an organization is nominated as a wakil(agent) to collect Zakat on behalf of deserving students, and then disburse the funds collected as Zakat, for the benefit of those for whom Zakat was collected. The funds go straight into a dedicated Islamic banking account designated for Zakat proceeds. The monthly expenses of this Zakat account are sent to our Shariah advisor, Mufti Ubaid ur Rahman Zubairi from Alhamd Shariah Advisory Services, for verification and compliance.",
            description3: "How do we determine Zakat eligibility? To determine eligibility, our school staff and Project Managers underwent a thorough training process, led by Mufti Ubaid, where they were taught to gather and compile relevant student information. Once completed, the information forms are signed by the parents/ guardians of the students, or by the students themselves if they are over the age of 13 These information forms are then shared with our Shariah advisor who determines which cases qualify for Zakat.",
            description4: "How are Zakat proceeds spent? Our accounting department has received training to understand which expenditures qualify for Zakat according to Shariah standards. In addition to this our Shariah Advisor is consulted before any expense is made from the Zakat account. To donate your Zakat to Zindagi Trust, simply check the box to “designate your donation as Zakat” on our Donate page.If you have any questions about how your zakat will be used, please feel free to write to us.",
            img: "/assets/images/NewsEvents/newsStories16.jpg",
            img1: "https://www.zindagitrust.org/news/small25-Shariah_Article_Phot682414580.jpg",
            img2: "https://www.zindagitrust.org/news/ZT-Certificate-2021-22-page-001-2.jpg",
        },
        {
            id: "17",
            date: "22/9/2020",
            title: "REIMAGINING AN ARTS EDUCATION ONLINE",
            description: "Building on from the Learning Packs we sent to our students early on in the lockdown",
            description1: `Building on from the Learning Packs we sent to our students early on in the lockdown, our art teachers started filming video lessons that were bolstered by Q&A with the students in the Whatsapp classroom. This proved to be a great, practical platform - students could view lessons whenever they got access to a smartphone (usually a relative's and not their own), had time to engage with their teacher's ideas and prompts as well as to explore their own interpretation of the topic. Our teachers designed a host of activities: a haldi (turmeric) tie-dye exercise, arranging fruits and vegetables into portraits as mannerist art, making DIY paints at home with kitchen ingredients, and of course finding a creative outlet to formulate and express their thoughts on being stuck at home, being scared of getting COVID, missing school and suffering from the unprecedented urban flooding due to the recent Karachi rains. 80 of our students also enjoyed a talk with Amsterdam-based artist and museologist Shireen Ikramullah, learning the elements of art through a wonderful curation of some of the most stunning art from all over the world.



Being away from school, from their friends and, for many, from the only safe space they can freely enjoy, was a uniquely stressful time for our students, as it has been for children across the world during school closures. On top of this, the fear of catching coronavirus and bearing the economic impact of the shutdowns it necessitated, all added to the mental distress of our schoolchildren. To address this, we decided to begin lay counseling for our students, in order to support their mental wellbeing during this strange and difficult time. Realising that art teachers have always had a special connection with students and that for many students the art room is their safe space where they can truly express themselves, we decided to train our art teachers as lay counselors. After a 10-hour training spread out over 2 days in 2 groups, our teachers began doing phone check ins with students grade by grade. They ask them about their routine, chat about their time at home, give them some self care tips as well as some art activities if they showed an interest in art. Once a week, each group of lay counselors meets me and the School Counselor to discuss and review their calls, get support where they are struggling and refer any serious cases to the school management.

We hope you enjoy reading the following accounts of two of our art teachers about teaching art and counseling during school closure, in their own words:

"As a new art teacher, distance teaching has been nothing short of an amazing experience. I was connected to the students through online art classes during this difficult time. They showed a lot of interest in the art activities my colleagues and I suggested and were always asking us for the next art activity. This was a way for them to feel that they were not far from us, that they were connected to their teachers, to school. It gave them hope that schools would be back again and they would restart the things they like again. Some students who did not show much interest in art earlier showed a lot of interest now because they were a bit more relaxed, their minds were more free to explore art and so they were able to enjoy it.

About lay counseling - when you heal others, you heal yourself. I felt I learned something after every check-in call. Children deal with adversity so well, they have "mazay mazay kay" - very interesting and innovative - ideas when we asked how they made use of this time and adapted to the restrictions. I also learned that everyone's life is very different and if there is a difficult situation like this pandemic, everyone has their own unique way of bringing themselves out of it or living through it. Sometimes I would get so upset thinking how a student would survive or manage a particularly difficult situation but the child would find a way, an activity, a hobby, and get through - in fact teaching their teachers how to get through challenges.

After talking to all the students I can confidently say that there is an artist somewhere in every child who shows the creativity of their mind in a new way every day, not necessarily on canvas or through an artwork, but I think managing life well is also creativity, which I learned from my students. The biggest thing I felt was that these children have a lot of hope, they have this solid faith that they will get through this and good times are coming. So, lay counseling was a great lexperience and I learned so much.

There were some situations where children were going through a really critical time, where the problems they were facing seemed too difficult to overcome through counseling or talking to them. We shared these with our group of lay counselors, with the School Counselor who was guiding us and forwarded them to the School Principal/Project Manager and they tried their best to support the children and their families. Our overall goal was - because this situation was so weird - to keep them involved in activities, to keep them connected to us and to boost their spirits.

One student, Fareeba, told me she wasn't that interested in art before. She was keeping herself busy in housework during the lockdown until one day she was cleaning a cupboard and found some paints and art supplies which led her to create some art and slowly develop an interest in art. Now whenever she gets some free time, specially given that schools are closed, she makes some art. She's linked to me on Whatsapp and I give her some tips, where I'm usually just gently guiding her to consider a new perspective. Her artwork has really progressed during this time. I really like the art she has been making now. This was one of my favourite stories of change that I saw within a student during the lockdown. One of the most recent pictures of her art that Fareeba shared with me on Whatsapp is of a dark skyline, saying she loves shadows and this image just came to her mind - a sign that art her become a tool for expression for her."

- Fizza, Art teacher at Khatoon-e-Pakistan Government Girls School

"Distance learning was quite a learning experience for me. Lots went well but there were also a lot of challenges. I think distance learning has its limitations - it is not easy, specially for younger children who are not able to pick things quickly. When they're in front of us it's a different dynamic, they understand things from our facial and vocal expressions, from our demonstrated examples on the spot. In the classroom - or art studio - it was easy to communicate with them, to introduce a concept both orally and visually by drawing on the board and adding more details as needed. Now we had to deliver perfectly edited videos which would capture our entire lesson and also proactively answer any questions we anticipate they might have. In the (physical) classroom of course we could easily answer any questions that would come up but now that they were not in front of us we would have to craft our video in a way that would ensure there would not be any need for further questions or explanations as children did not have easy phone access for live back and forth). While this helped me get better at making and editing videos, it also made me realise the limitations of distance or online learning. In art your expressions matter so much and this must have been so challenging for our students to understand but we all did our best.

Overall, it went quite well, our students really enjoyed their lessons and stayed engaged and it also gave them a chance to divert their mind from the gloom of the disease and the lockdown. They invested their time in art and shared a lot of their artwork with us. I was so happy to learn that my young students realised that their teachers wanted to work hard with them, that they valued the explanations we had sent and the video lessons we made for them. Since May, they participated in several art competitions - a covid19 awareness art competition, another on the topic of what they miss about their school by Aahung, another by Colgate. It was a time-consuming process to guide the students remotely, select their work, scan and label it but it was so rewarding to see their wonderful work during the lockdown. Their awards felt like our achievements."

- Minhaj, Art Teacher at SMB Fatima Jinnah Government Girls School

* Please note that wherever in this report we have used the full names of a participant or facilitator, we have their consent to do so.`,
            img: "/assets/images/NewsEvents/newsStories17.jpg",
            img1: "https://www.zindagitrust.org/img/news/image21-1.jpg",
            img2: "https://www.zindagitrust.org/img/news/cage_Large.jpg",
            img3: "https://www.zindagitrust.org/img/news/image22.jpeg",
            img4: "https://www.zindagitrust.org/img/news/image22-1.jpeg",
            img5: "https://www.zindagitrust.org/img/news/image22-2.jpeg",
            img6: "https://www.zindagitrust.org/img/news/image22-3.jpeg",
            img7: "https://www.zindagitrust.org/img/news/image22-4.jpg",
            img8: "https://www.zindagitrust.org/img/news/mhfa2b_Large.jpg",
        },
        {
            id: "18",
            date: "21/9/2020",
            title: "A PLEA AND A PLAN TO PROTECT OUR CHILDREN",
            description: "It is deeply disturbing that violence against women and children continues unabated in Pakistan.",
            description1: `It is deeply disturbing that violence against women and children continues unabated in Pakistan. Many solutions have been offered to address the issue of child sexual abuse in particular, the most recent of which proposed the following interventions: (i) policing, specifically through registration of sex offenders and paedophiles, (ii) legislation to give child rapists exemplary punishments like public hanging or chemical castration and, (iii) controlling vulgarity in films and television in an attempt to reduce sex crimes and preserve the family system.

As organisations committed to protecting and empowering children, we appreciate the Prime Minister taking an active interest in eradicating child sexual abuse. However, our experience from working directly with school children and through community programs shows that there are no quick or easy solutions to the endemic of child sexual abuse.

Global and national research clearly shows that an overwhelming majority of abuse takes place in or close to the home and is perpetrated by relatives and trusted adults. In addition, social attitudes link rape to dishonor and shame. Together, this not only discourages survivors and their families from reporting child abuse but also thwarts attempts by the few who do seek justice through official channels by pushing them to forgive or 'settle' instead. To eliminate child sexual abuse, we need a coordinated, systemic, state response, taking into account the ground realities. Here are our recommendations for what Pakistan needs to do to protect our children:

. The state must introduce Child Protection via Life Skills Based Education (LSBE) in all schools with Parent Education being a critical aspect. Children must be taught in school how to identify and protect themselves from abuse as well as how to respect others and prevent themselves from becoming abusers. Age appropriate, culturally sensitive and relevant LSBE content has been developed and field tested across Pakistan and is ready for the state to adopt into its textbooks, curricula and mass awareness programs. School LSBE programs must also engage and sensitise parents to identify signs of abuse and support their children in feeling safe and confident about reporting abuse.

. The state must launch regular mass awareness campaigns through media for parents, law enforcement agencies and healthcare providers to listen to children and support them, an essential social pre-requisite for justice.

. The state must establish Special Police Units at the district level with male and female officers trained to deal sensitively with cases of child sexual abuse. Additionally, all police stations need to be equipped with rape kits and forensic lab support within their province.

. The state must activate and mobilise their Child Protection Units in every province, and within each province ensure their presence in every district. Child protection institutions (CPIs) practicing alternative family-based care must (a) rescue and protect children, specially survivors of child sexual abuse, when families are not safe and (b) also monitor any institutions interacting with children and hold them accountable as per law.

. The state must establish specific child-friendly courts to ensure that child survivors get access to sensitive justice.

. The state must invest in ensuring an increase the number of women in the police force, in the legal profession (as lawyers and prosecutors) and mandate an increase the number of female judges and female medico-legal officers.

. The state must provide free legal aid to survivors of child sexual abuse.

. The state must provide free counseling and therapy for survivors of child sexual abuse by therapists trained in the specialty.

. The state must mandate hospitals, clinics and health units to provide awareness to and train and sensitize healthcare providers to provide appropriate care to survivors of child sexual abuse.

. Finally, the state must establish strong linkages between relevant departments including education, child welfare, police and health, as well as the civil society voices, specially child rights organisations to build a coordinated approach to end violence against children.`,
            img: "/assets/images/NewsEvents/newsStories18.jpg",
            img1: "/assets/images/NewsEvents/newsStories18.jpg"
        },
        {
            id: "19",
            date: "6/9/2020",
            title: "PAKISTANI TEACHERS RESPONSE TO COVID-19",
            description: "When COVID-19 first emerged in Pakistan, state institutions began deliberating upon and enacting a series of emergency response measures, starting with school closures across the country in March 2020. For this report, our team at Zindagi Trust along with our friends at the Pak Alliance for Math and Science (PAMS) spoke to public school teachers to explore their views on the state's immediate response and their recommendations on measures to be implemented once schools reopen.",
            description2: "The purpose behind compiling this report is to inform the debate around the desired state response to COVID-19 by adding opinions from teachers, who remain largely absent from the public discourse. The report is not intended to represent a academic study and does not claim to be backed by a robust quantitative and qualitative survey representative of teachers.",
            img: "/assets/images/NewsEvents/newsStories19.jpg",
            img2: "https://www.zindagitrust.org/img/news/PakistaniTeachersResponse-7.jpg",
            img3: "https://www.zindagitrust.org/img/news/7184a95a-0779-41e5-9949-50f8156547f9.jpg"
        },
        {
            id: "20",
            date: "2/9/2020",
            title: "PROJECT OF THE MONTH CLUB UPDATE: SEPTEMBER 2020",
            description: "Dear Project of the Month Club Member,",
            description2: "We hope your September is off to a happy and healthy start! We are in awe of you and the 597 other club members that came together to give $26,717 last month to Whispering Seed and its project MyanmarYouth Sustainability Training Centre, which works to bridge the traditions of sustainability and holistic education through innovative programs while drawing on rich local wisdom and traditional cultures.",
            description3: "This September, your generous contribution will support our nonprofit partner Zindagi Trust and its project Art for 3200 School girls in Pakistan.",
            description4: "Zindagi Trust's mission is to reform Pakistan's state schools by helping the government implement a holistic curriculum that lets students thrive. Through Art for 3,200 Schoolgirls in Pakistan, Zindagi Trust leaders will implement a modern art program at two government schools in Pakistan's biggest city, Karachi, so young girls can express themselves creatively - a skill that is overlooked by the current education model. Through these integrated programs, students will naturally connect their studies to the outside world, whether it's on a trip to the local museum or a visit to a mural painted by a local artist. This method of connecting students to the world around them through art not only improves school attendance and learning outcomes, but it also encourages students to explore their interests and passions later in life.",
            description5: "Despite the lockdown, Zindagi Trust has continued to support 2,300 students channel their creative spirits at home. Care packages bursting with activities that promote mindfulness, gratitude, reflection, and fun were distributed to the children to help them cope in isolation - a powerful reminder that art is more than just another extra-curricular.",
            description6: "Head of Special Programs and Advocacy Sana Kazmi expresses her thanks to you and other Project of the Month Club members for supporting their mission:",
            description7: "I am thrilled and deeply touched to hear this news! Funding for continuing learning and reopening schools is scarce given the competing priorities brought about by the pandemic. We were afraid we may have to scale down our art program despite knowing that it is needed now more than ever. After spending almost six months in isolation, our school children need to feel the joy and connection of creative pursuit as well as the emotional outlet and release that their art classes provide. Thank you so much for helping us find a way to make this possible!",
            description8: "Sana went on share plans for how your generosity will power their efforts this year:",
            description9: "Your contribution will enable us to create unique, local art experiences for 3,100 students. After a gap of more than six months, we will be able to continue our weekly art classes. Thanks to your generosity, we can buy enough art supplies so all children can create art safely without having to share supplies, as we return to on-campus classes with post-COVID-19 safety measures. We will now also be able to put out teaching resources, art lessons, and DIY tutorials for children beyond our schools, as your gift helps us support our faculty of seven art teachers across two large under-resourced government schools. Finally, our art teachers, who have been recently empowered through extensive training on Mental Health First Aid, will be helping our students make the transition back to school easier. They will be making check-in calls leading up to school re-opening and providing guided care as lay counselors at a time when the mental well-being of children is more important than ever for their success at school.",
            description10: "Keep up with Zindagi Trust's work by checking out their most recent updates from the field.",
            description11: "We are so grateful for your commitment to support community-led change. I can't wait to share where your generosity is headed in October!",
            img: "/assets/images/NewsEvents/newsStories20.jpg",
            img2: "https://www.zindagitrust.org/img/news/POMC_Large.jpg"
        },
        {
            id: "21",
            date: "14/2/2020",
            title: "ZINDAGI TRUST PETITION LEADS TO IHC BAN ON CORPORAL PUNISHMENT",
            description: "It is noted that corporal punishments are not in consonance with the constitutionally guaranteed right of inviolability of dignity not with standing section 89 of the Pakistan Penal Code 1860.",
            description2: "When a child is born he is beaten by his parents, when he goes to school by his teachers, when he grows older, by the SHO... But research shows that the use of violence only leads to more violence.",
            description3: "Corporal punishment has extremely adverse effects on children's mental and physical health. Last year, a child passed away because of the use of corporal punishment in a school in Lahore. We want that the use of corporal punishment is banned while the parliament goes about making laws on the matter.",
            description4: "Zindagi Trust has been campaigning to bring an end to this practice since 2013, when our Founder Shehzad Roy's TV show ChalParha and subsequent advocacy led to the National Assembly passing a bill criminalising corporal punishment, which unfortunately lapsed in the Senate. In the years since, the responsibility has been devolved to the provinces and Sindh has passed legislation against corporal punishment but much remains to be done to protect children across Pakistan.",
            description5: "This is a collective win for the Zindagi Trust family - we thank all our supporterswho enable us to sustain our work for a safer Pakistan for all our children.",
            img: "/assets/images/NewsEvents/newsStories21.jpg",
            img2: "https://www.zindagitrust.org/img/news/image17-2.jpg",
            img3: "https://www.zindagitrust.org/img/news/image17-3.jpg",
            img4: "https://www.zindagitrust.org/img/news/image17-4.jpg"
        },
        {
            id: "22",
            date: "26/1/2020",
            title: "GOVERNMENT SCHOOL WINS SECOND PLACE AT INTER-CITY FOOTBALL CHAMPIONSHIP",
            description: "Karachi, Jan 26: SMB Fatima Jinnah Government Girls School won second place in the Karachi United School Championship 2020, losing to Aga Khan Higher Secondary School Karimabad in the final on penalties after the teams tied 1-1 at full-time Saturday afternoon.",
            description2: "20 of Karachi's top private schools, including Cedar College, Karachi Grammar School, the Lyceum, CAS, Foundation Public School, Beaconhouse School System, Roots Millenium College and the Aga Khan schools fielded teams in the tournament.",
            description3: "The final concluded what was almost a dream run for the SMB Fatima Jinnah Government School team, the only government school featuring in the competition and also the only team against which no other team was able to score a single goal until the final. Earlier on Sunday, they beat Beaconhouse School 2-0 in the semis at the Karachi United Football Federation ground. Previously, the SMB team beat St Michael's Convent School 2-0, Wales College 4-0, Social Bond School 3-0 and eventual tournament winners Aga Khan Higher Secondary Karimabad 2-0 in the.round matches.",
            description4: "10th-grader Bareera Abdul Majeed from SMB bagged the Best Scorer award, finishing the tournament as the highest scorer with a total of 10 goals.",
            description5: "This was Bareera's first year playing competitive football - she has surprised all of us and made us win several crucial games! said her coach.",
            description6: "The team also won the Fair Play award for displaying sportsman's spirit and camaraderie throughout the tournament, accepting all the decisions made by the referees respectfully. A special mention is due for their coach Fatima Kiran in recognition of her impressive mentorship, passion and tireless efforts for the team. The school has won the championship twice, in 2017 and 2018.",
            description7: "SMB Fatima Jinnah Government Girls School is managed by Zindagi Trust under their School Reform project. One of the project's core features is a strong sports program aimed at introducing students to a variety of sports to help find and hone their talents and interests and develop them into well-rounded citizens.",
            img: "/assets/images/NewsEvents/newsStories22.jpg",
            img2: "https://www.zindagitrust.org/img/news/image16-1.jpg",
            img3: "https://www.zindagitrust.org/img/news/image16-3.jpg",
            img4: "https://www.zindagitrust.org/img/news/image16-2.jpg",
            img5: "https://www.zindagitrust.org/img/news/image16-4.jpg",
            img6: "https://www.zindagitrust.org/img/news/image16-5.jpg"
        },
        {
            id: "23",
            date: "21/10/2019",
            title: "OUR GOVERNMENT SCHOOL STUDENTS MEET THE ROYAL COUPLE WILLIAM AND KATE",
            description: "Our government school students met and played cricket with the Duke and Duchess of Cambridge William and Kate at the National Cricket Academy in Lahore!",
            description2: "Cricket stars Sana Mir, Hassan Ali, Urooj Mumtaz Khan, and Shaheen Shah Afridi joined the DOSTI student family on the occasion and five of our students from SMB Fatima Jinnah Government Girls School were delighted to interact with them.",
            description3: "8th-grader Zainab Arshad was selected as one of 3 students who got a special chance to share their story with the Duke and Duchess of Cambridge. She shared her journey from being a quiet primary school student who struggled to make friends to a young girl who is comfortable with her identity and that of her peers. The Duchess listened intently as Zainab ended with a reflection on how her chess class at school taught her to value everyone, regardless of how powerful they may appear.",
            description4: "A big thank you to the British Council Pakistan, DOSTI and the Pakistan Cricket Team for making this happen.",
            img: "/assets/images/NewsEvents/newsStories23.jpg",
            img2: "https://www.zindagitrust.org/img/news/image15-3.jpg",
            img4: "https://www.zindagitrust.org/img/news/image15-7.jpg",
            img5: "https://www.zindagitrust.org/img/news/image15-8.jpg",
            img6: "https://www.zindagitrust.org/img/news/image15-2.jpg",
            img7: "https://www.zindagitrust.org/img/news/image15-4.jpg",
            img8: "https://www.zindagitrust.org/img/news/image15-1.jpg",
            img9: "https://www.zindagitrust.org/img/news/image15-5.jpg"
        },
        {
            id: "24",
            date: "23/9/2019",
            title: "'HOARD OUT OF GREED BUT DIE OF NEED': KARACHIITES JOIN WORLDWIDE CLIMATE STRIKE",
            description: "The drums beat relentlessly and chants of 'We demand clean air' rang out as tightly-knit groups of Karachiites gathered at the metropolis' Frere Hall and amalgamated into a growing crowd of protesters for the first-ever Climate March, which coincided with rallies across the world in at least a dozen countries.",
            "description1": "Kicked off by new media artist Yasir Hussain and Zehra Zaidi, the event welcomed its first guest, 15-year old Rimsha Ali, to the stage. A student of Zindagi Trust's SMB Fatima Jinnah Government Girls' School, the teen had prepared a chilling poem that had the audience in silence, contemplating the seriousness of climate emergency.",
            description2: "Rimsha spoke of lower attendance at schools as children were hit by malnutrition, mental stress, and other sicknesses. 'If the heaps of garbage grow, what do they do? They just burn it,' said the student, referring to the indifference of corporations and municipal authorities towards trash.",
            description3: "Karachi, which has fallen victim to global warming and climate change as is evident from the increasing frequency of heatwaves as well as episodes of torrential rainstorms, is one of the most crucial Pakistani cities that needs a proper climate policy to deal with its problems.",
            description4: "We have grown up without clean air to breathe or safe water to drink,' Rimsha explained.",
            description5: "Promise me that you'll use tiffins for lunch and not plastic bags, promise me that you won't waste water, promise me that you'll use public transport, and promise me not to throw seeds in the dustbin but in soil so there are plants,' she appealed.",
            description6: "Today the citizens of Karachi have taken a stand by demanding that the people and Government of Pakistan take climate action now!' said Abid Omar, one of the citizen-volunteers organising the March. Karachi is expected to see a rise in suffering from drought, heat, desertification, air pollution, and higher sea levels, and intrusion that will harm our citizens unless we take measures to protect the city and its citizens.",
            description7: "Initiated by 16-year old Swedish climate activist Greta Thunberg's #FridaysForFuture movement, more than 5,000 strikes were held in 156 countries, held ahead of ahead of the United Nation's climate emergency summit starting September 23. These climate marches are aimed to urge politicians, leaders, and those in power to take action before it is too late.",
            description8: "Pakistan Fisherfolk Forum leader Fatima Majeed agreed, speaking of air pollution and how the world was moving on from coal power but Pakistan was still using it. 'China, especially, has halted the use of coal power but it has sent the rejections to us.",
            description9: "There's a new coal power plant being set up in Ibrahim Hyderi; there's too much security around it, blocking roads and telling people to go elsewhere,' Majeed said, adding that the factory's construction has led to the unfortunate removal of mangrove forests on Sindh's coastal belt.",
            description10: "Women Democratic Front (WDF) member Aabida Ali underscored further on the common person's livelihood, saying the impacts of climate change included significant climate-driven migration, dangerous working conditions from extreme heat, job loss - in rural areas - due to crop failure and due to extreme weather events in urban ones.",
            description11: "To add to Karachiites' woes, the whole city is currently a huge garbage dump, noted KCR Mutasirin Action Committee's Sagheer Ansari. 'We need to make these decisions ourselves now.",
            description12: "Ansari, who works for the challenges faced by those affected by the anti-poor demolition, said: 'Of the 4,653 households marked, at least 1,100 houses have already been demolished five months ago, leaving the impactees to live under open sky for almost half a year.",
            description13: "They do not have washrooms. They have no access to water. And they are harassed if they try to put up roofs made of cloth,' he added.",
            description14: "As the speeches concluded, the 5,000-strong rally moved from inside the Frere Hall to Abdullah Haroon Road outside, bringing rush-hour traffic to a standstill and leaving motorists curious as the protesters yelled slogans.",
            description15: "As the crowd reached the historic Metropole Hotel intersection, the demonstrators staged a 'die-in' - showing people lying dead on the road as a simulation of what the environmental emergency could potentially unleash on the world - while pedestrians, shopkeepers, and drivers looking on, flabbergasted at having to stop despite the traffic signal working.",
            img: "/assets/images/NewsEvents/newsStories24.jpg",
            img2: "https://www.zindagitrust.org/img/news/image14-1.jpg",
            img3: "https://www.zindagitrust.org/img/news/image14-2.jpg",
            img4: "https://www.zindagitrust.org/img/news/image14-3.jpg",
            img5: "https://www.zindagitrust.org/img/news/image14-4.jpg"
        },
        {
            id: "25",
            date: "6/9/2019",
            title: "UPCOMING WORK IN PUNJAB: MODEL SCHOOLS AND CHILD PROTECTION",
            description: "Our team recently completed a successful visit to Lahore focusing on sharing our government school reform model",
            description1: "Our team recently completed a successful visit to Lahore focusing on sharing our government school reform model as well as on the need to introduce Child Protection through Life Skills Based Education (LSBE) in Punjab's schools.",
            description2: "MEETING WITH CM PUNJAB",
            description3: "Zindagi Trust Founder Shehzad Roy called on Punjab Chief Minister UsmanBuzdar at his office on Monday and apprised him about the work of his organisation in the field of education. The CM was inspired to hear about the trust's work in reforming government schools. He shared his own goal of making district-level schools into centres of excellence along the lines of Zindagi Trust's model schools and asked for the cooperation of the trust in that regard.The Punjab Education Minister and Secretary Education were also present. We are excited about this upcoming endeavor to bring our model to schools in Punjab.",
            description4: "MEETING WITH EDUCATION MINISTER",
            description5: "Our team, led by founder Shehzad Roy along with Head of Special Programs & Advocacy, Sana Kazmi, later held a meeting withMuradRaas, the Provincial Minister of Education for the Punjab. They shared the trust's model for school reform, involving interventions in infrastructure, governance, academic innovation and strong extra-curricular and co-curricular programs. The minister was impressed with the innovation in the trust's model as he learned about their success in their pilot projects at model schools in Sindh as well as in policy change through advocacy. He expressed his interest in bringing ideas from the trust's model into Punjab's schools and committed to visiting the trust's Karachi schools with his team to get better acquainted with the model. We look forward to his visit in the upcoming weeks.",
            description6: "MEETING OF COMMITTEE TO ADDRESS CHILD ABUSE THROUGH LIFE SKILLS BASED EDUCATION",
            description7: "A committee to address the issue of rampant child abuse in Punjab was formed by the Secretary Education after a consultation with Zindagi Trust on the way forward for schools to play their role in eradicating child abuse. The committee's first meeting was held earlier this week in Lahore, chaired by the Secretary Education Muhammad Mahmood himself. Demonstrating his leadership, the Secretary set the tone for the meeting by expressing the School Education Department's commitment to protecting the children of the province from the menace of abuse by finding a way to use education as a tool for prevention and protection.",
            description8: `Participants of the meeting included Punjab Curriculum & Textbook Board (PCTB) Chairman TahirMehmood, Director Monitoring of School Education Department Rana Abdul Qayyum, Advisors to the Minister SED RazaHamdani and RazaGardezi. It was also heartening to see representatives from civil society organisationscoming together to help Pakistan's biggest province move forward on this issue - Aisha Ijaz from Aahung, DrManizehBano from Sahil, and QaziEhsan from ITA were present along with singer and activist Shehzad Roy and Sana Kazmi from Zindagi Trust.The CSOs shared their positive experience of child abuse awareness sessions for students, teachers and parents.
            
            There was a healthy discussion on the roadmap to integrating LSBE into the curriculum as well as the practical roadblocks that may be encountered along the way. The civil society organisationswere drafted into a Technical Advisory Committee along with the Punjab Curriculum and Textbook Board as well as the School Education Department. This committee will study existing Punjab textbooks, existing LSBE content by CSOsas well the SLOs from the curriculum to find overlaps where relevant content can be integrated to introduce Child Protection into Punjab's textbooks and classroom instruction.`,
            img: "/assets/images/NewsEvents/newsStories25.jpg",
            img1: "https://www.zindagitrust.org/img/news/image13-1.jpg",
            img2: "https://www.zindagitrust.org/img/news/image13-3.jpg",
            img3: "https://www.zindagitrust.org/img/news/image13-4.jpg"
        },
        {
            id: "26",
            date: "5/9/2019",
            title: "WE STAND WITH KASHMIR",
            description: "SMB Fatima Jinnah Government Girls' School adopted by Zindagi Trust observed solidarity with Kashmir to demand the restoration of human rights in t...",
            description1: "SMB Fatima Jinnah Government Girls' School adopted by Zindagi Trust observed solidarity with Kashmir to demand the restoration of human rights in the valley. Our students made a human chain spelling out #WeStandWithKashmir on the school ground to demonstrate solidarity with the people of Kashmir, specially with Kashmiri schoolgirls.",
            img: "/assets/images/NewsEvents/newsStories26.jpg",
            img1: "/assets/images/NewsEvents/newsStories26.jpg"
        },
        {
            id: "27",
            date: "4/9/2019",
            title: "A CELEBRATION OF URDU LITERATURE",
            description: "Students from our adopted government schools paid tribute to the work of renowned Urdu dramatist Imtiaz Ali Taj during our annual Urdu",
            description1: "Students from our adopted government schools paid tribute to the work of renowned Urdu dramatist Imtiaz Ali Taj during our annual Urdu Bazm-e-Adab Drama Mela held at Khatoon-e-Pakistan Government School. The two-day event showcased the theatrical skills of students from Grades 3-10 through plays, original skits and dances.",
            description2: "The performance hall roared with laughter as students brought to life the writer's most amusing and memorable character, Chacha Chakhan. Some students staged a dramatic dialogue from his famous romantic tragedy Anarkali and another group from SMB Fatima Jinnah Government Girls School enacted a powerful scene from the same. Two original silent skits featuring comical, every-day situations which take place in a cinema and a hospital were also on display.",
            description3: "The productions were judged by Atif Badar, a prominent Pakistani actor, director and storyteller. A huge shout-out to the teachers and management for instituting an annual celebration of Urdu literature.",
            img: "/assets/images/NewsEvents/newsStories27.jpg",
            img1: "https://www.zindagitrust.org/img/news/image11-1.jpg",
            img2: "https://www.zindagitrust.org/img/news/image11-2.jpg",
            img3: "https://www.zindagitrust.org/img/news/image11-3.jpg",
            img4: "https://www.zindagitrust.org/img/news/image11-4.jpg",
            img5: "https://www.zindagitrust.org/img/news/image11-5.jpg",
            img6: "https://www.zindagitrust.org/img/news/image11-6.jpg",
        },
        {
            id: "28",
            date: "5/7/2019",
            title: "CHILD PROTECTION CAMPAIGN LAUNCHED BY MOHR",
            description: "Human Rights Minister Shireen Mazari on Thursday said Pakistan, unfortunately, was number one in child pornography.",
            description1: `ISLAMABAD: Human Rights Minister Shireen Mazari on Thursday said Pakistan, unfortunately, was number one in child pornography and emphasised the need for initiating a dialogue on the menace.`,
            description2: `Speaking at the launch of Child Protection Campaign here, Mazari said the menace affected all strata of the society. "This matter is in every stratum of our society." The minister explained that incidents of child abuse were increasing and that Pakistan was No 1 in terms of child pornography, adding, in that light, it was shameful that "we call ourselves Muslims", Geo News reported. She suggested that a campaign should be launched at the school level to sensitize students to the menace.
            She said the society must get out of its cocoon and hold a dialogue on child abuse. "In order to put an end to incidents of sexual abuse of children, we need to launch collective efforts," she added. The minister said in spite of rise in the number of child abuse incidents, no dialogue had been held at any level.

            "We even don't talk to children about child abuse at any level or schools or households. Development is meaningless if children are not safe from abuse. We will analyse all complaints of child abuse to the ministry," she stressed.

            Mazari said it was sad that Zainab Alert, Response and Recovery Act, 2019 was yet to be passed by the National Assembly's Standing Committee on Human Rights. "Its chairperson is Bilawal Bhutto Zardari," Mazari said, adding that there should be nopolitics on matters pertaining to children.

            "Hope, the bill returns to the assembly soon. If there's law, punishments can be awarded in accordance with that. This message needs to be spread in order to eliminate child abuse," she added.

            In addition, the Ministry of Human Rights secretary commented that a national action plan for the rights of children had been prepared. He said bills on child abuse were in Parliament and of those the noteworthy one was Zainab Alert, Response and Recovery Act, 2019.

            Social activist and singer Shehzad Roy said there was a need to break the mental barriers for creating awareness about child abuse and sexual assault. "People don't even talk about it with parents and friends," he said.

            Noting that the campaign launch was a major effort on part of the human rights ministry, he said, "Parents should talk to their children about sexual abuse and assault." Roy noted that one in every five persons in Pakistan was subjected to sexual assault and abuse but, unfortunately, no one talked about it. "Those who rape and murder should be awarded the strictest of punishments," he added.`,
            img: "/assets/images/NewsEvents/newsStories28.jpg",
            img1: "https://www.zindagitrust.org/img/news/image10.jpg"
        },
        {
            id: "29",
            date: "23/5/2019",
            title: "ARTISTS, ATHLETES AND ACTIVISTS CALL FOR END TO STATE INACTION ON CHILD PROTECTION",
            description: "Just over a year ago, we united after the brutal rape and murder of six-year-old Zainab in Kasur and pledged.",
            description1: "Just over a year ago, we united after the brutal rape and murder of six-year-old Zainab in Kasur and pledged to do our utmost to ensure no other child suffers that fate again. The horrific rape and murder of 10-year-old Farishta in the nation's capital has once again brought agony and shame upon us. Between these two tragedies that have shaken the nation, more than 10 cases of child abuse were reported on average every day (Sahil, 2018). Zindagi Trust, a non-profit working to reform the government education system, brought together Pakistan's leading artists, athletes and activists to push for sustainable action to prevent child sexual abuse. Joining the trust's founder, musician and activist Shehzad Roy were actors Mahira Khan and ZebaBakhtiar, former Pakistan cricket team captain Younus Khan and activist Nazim Haji and Karamat Ali.",
            description2: "In 2010 a Life Skills Based Education (LSBE) curriculum was developed for schools to ensure children could identify and protect themselves against child sexual abuse. This LSBE program covered concepts like 'Good Touch, Bad Touch,' child and gender rights in an age-appropriate, culturally sensitive manner and was approved by the ulema karam. Zindagi Trust, a non-profit working to reform the government school system, ran this program so successfully at its government schools since 2011 that it was declared a model implementation of LSBE by Aahung, the non-profit that developed the curriculum. The schools adopted by the trust were able to develop ownership of the program in the parents and teachers and saw significant gains in terms of student awareness, confidence and openness to report cases of harassment or abuse. The program has travelled to hundreds of schools since, thanks to Aahung.",
            description3: "From then onwards, Zindagi Trust has been advocating with the support of Aahung to introduce Child Protection through LSBE in schools across Pakistan. After the Zainab tragedy in early 2018, the Sindh and Balochistan governments took notice and took the bold step of agreeing to integrate LSBE into the provincial curriculum. This was announced in joint press conferences by the political and administrative leadership and the two non-profits leading the initiative.",
            description4: "As things stand, much work remains to be done with only some relevant chapters having been introduced so far in the Sindh textbooks and with the provinces of Khyber Pakhtunkhwa and Punjab still unmoved despite being urged to take action. The participants highlighted that in addition to the urgent need to teach LSBE in government schools, Child Protection Units need to be activated and made effective in every province; a special police unit trained to deal with cases of child sexual abuse; shelters created by the state for survivors of child sexual abuse which often happens inside the home; counseling and therapy to be provided to survivors of child abuse; and staff at hospitals and clinics to be sensitized to provide appropriate care to survivors of child sexual abuse.",
            description5: `CONTEXT

            We are gathered here again after a year and a half when the Zainab tragedy took place. We want to:

            (1) Express our grief and anger at the horrific rape, acid torture and murder of 10-year-old Farishta and many other cases of child abuse that never make it to the media

            (2) To push and plead the state to act now to prevent child abuse and protect survivors

            Since the brutal rape and murder of six-year-old Zainab in January 2018, more than 10 cases of children being abused have been reported on average every day

            Back then, we had pushed for Child Protection through Life Skills Based Education (LSBE) to be taught in all schools. We have made some headway but there is a long way to go.`,
            description6: `LIFE SKILLS BASED EDUCATION (LSBE) IN SCHOOLS
 
            LSBE teaches children to recognise and protect themselves against physical and sexual abuse, child and gender rights violations regarding disease, hygiene and nutrition.

            Through Zindagi Trust's advocacy with Aahung, the governments of Sindh and Balochistan have committed to introducing the LSBE curriculum into their textbooks.

            The curriculum is age-appropriate, culturally sensitive and approved by the ulema karaam.

            Zindagi Trust ran this program so successfully at its government schools since 2011 that it was declared a model implementation of LSBE

            Zindagi Trust's adopted government schools were able to:
            develop ownership of the program in the parents and teachers
            saw significant gains in terms of student awareness, confidence and openness to identify and report cases of harassment or abuse.

 
            Parent Education is critical
            To identify signs of abuse in their child
            To listen to and support their child
            To sensitize fathers (or other male relatives), a need identified by mothers trained at our schools
            To spread awareness in the community, as mothers at our schools have done through informal centres

            The program has travelled to hundreds of schools since, thanks to Aahung.

            Currently, only some relevant chapters for LSBE have been introduced so far in the Sindh textbooks and both Sindh and Balochistan need to accelerate the pace at which Child Protection is being integrated

            The provinces of Khyber Pakhtunkhwa and Punjab still unmoved despite being urged to take action and teach LSBE through schools

            Private schools are also hesitant to introduce this. Child sexual abuse is a problem that affects everyone regardless of class, ethnicity or gender.`,
            img: "/assets/images/NewsEvents/newsStories29.jpg",
            img1: "https://www.zindagitrust.org/img/news/image7-1.jpg",
            img2: "https://www.zindagitrust.org/img/news/image7-2.jpg",
            img3: "https://www.zindagitrust.org/img/news/image7-3.jpg",
            img4: "https://www.zindagitrust.org/img/news/image7-4.jpg",
            img5: "https://www.zindagitrust.org/img/news/ourdemand.jpg"
        },
        {
            id: "30",
            date: "7/3/2019",
            title: "PUBLIC -PRIVATE PARTNERSHIP LAUNCHED FOR BETTER TEACHER TRAINING",
            description: "A major public-private initiative to improve quality of education in government schools in Sindh was launched on Wednesday.",
            description1: `KARACHI: A major public-private initiative to improve quality of education in government schools in Sindh was launched on Wednesday under which initially a government college in Hussainabad would be revamped to launch a four-year teachers’ training programme with assistance from a leading Finnish university.

A ceremony in this respect was held in the Shamsher-ul-Haidri Auditorium of the National Museum where Chief Minister Syed Murad Ali Shah and representatives of Durbeen and Zindagi Trust (ZT), both non-profit organisations working to improve quality of education in the public sector, announced their partnership and expressed their commitment to reform education.

“It’s something we all know; giving our children an education that could help them compete in a competitive world is the only way to progress,” the chief minister said, recalling how he got in touch with the ZT and agreed to have a collaboration for teachers’ training.

Describing it as a flagship project, the chief minister underscored the need for working together and said that the health-education emergency announced by the government in 2016 wasn’t yet over and required more focused efforts.

Referring to some challenges in the education sector, he said that the government initiative to introduce biometric system at educational institutions to record teachers’ attendance put it into financial trouble when thousands of teachers started taking premature retirement.

Highlighting some other problems, Education Minister Sardar Ali Shah said that only nine per cent of the total government schoolteachers in Sindh had studied science subjects. He, however, negated the opinion that the public education system had been completely destroyed, arguing that most students who opted for civil services exams were from government educational institutions.

“The major problem has been of ownership. Unless we have good people and those with influence in the system, there won’t be any change,” he remarked.

Earlier, Salma Ahmed Alam, the chief executive officer of Durbeen, informed the audience that under the partnership the campus of Government Elementary College of Education, Hussainabad, would be revamped with state-of-the-art facilities where candidates would be enrolled for an undergraduate four-year teachers’ training programme.

“This initiative is a series of firsts. We aim to deliver an outstanding quality of education in government schools across Sindh by staffing them with professional teacher graduates,” she said, adding that the ZT which had led the way in government school reform would act as a parent organisation of Durbeen.

About the reform process, she said that the college management and teacher education curriculum would be improved apart from recruiting qualified faculty, enrolling talented students and upgrading existing facilities.

To bring about this transformation, she pointed out, the NGO had signed an agreement with the University of Helsinki in Finland to enrich the college’s teacher education curriculum and build the capacity of the faculty.

“Finland’s education system is one of the best around the world. Not only will this initiative be a leading Finnish university’s first education intervention in Pakistan, but also, never before has any government in Pakistan undertaken such a partnership in higher education,” Ms Alam said.

President of ZT Shehzad Roy spoke about the challenges he and his team faced when they decided to transform two government-run schools into model schools as well as the positive response students gave through their remarkable achievements when they received quality education.

He appreciated the government for introducing life-skills-based curriculum after the Zainab tragedy.

“We can never really progress unless the poor, the marginalised sections of society received quality education,” he noted.

Minna Saade representing the University of Helsinki expressed the hope that the collaboration would achieve its objectives and get strengthened in coming years, adding that work on the project had already begun.

Chairman Tabba Foundation Ali Tabba also spoke.

Under the partnership, Durbeen has been authorised to take over the management of the teachers’ training college in Hussainabad for 10 years where students would only pay fees for registration and exams.`,
            img: "/assets/images/NewsEvents/newsStories30.jpg",
            img1: "/assets/images/NewsEvents/newsStories30.jpg"
        },
        {
            id: "31",
            date: "19/2/2019",
            title: "GOVERNMENT SCHOOL STUDENTS WIN BIG FOR THEIR ART WORK ON WATER CONSERVATION",
            description: "Aiman Qadeer and Laiba Younas won the 2nd and 5th prize respectively in the national 5th Art for Change.",
            description1: "Aiman Qadeer and Laiba Younas won the 2nd and 5th prize respectively in the national 5th Art for Change - International Child Art Competition and Exhibition 2018, organized by Discovering New Artists. Art work drawn by these students centered on expressing their thoughts on how to conserve water and find solutions to combat climate change and save the earth.",
            description2: "Describing her painting, Laibah said 'I drew a kissan who is crying because his crops are dying due to lack of water in his village'. Students from schools across Pakistan participated in the art competition, ranging from Beaconhouse School System Karachi Grammar School, Froebels International School to Hope Uplift Foundation School and Door of Awareness Grammar School.",
            description3: "Aiman and Laibah are students of Zindagi Trust's adopted school, SMB Fatima Jinnah Government Girls School. Entries of these two students were selected amongst a total of 2300 entries from various schools across Pakistan, and were handpicked by a judge's panel consisting of senior artists. The judges included Ms. Rukhe Neelofar, Ms. Hurmat-ul-ain and Ms. Iram Wani.",
            description4: "Artwork drawn by Mariyam Khalid, Hira M. Naeem, Dar-e-Noor, Narmeen Afzal, Umaima Shakil, Nayyab M. Nasir, and Irqra Irfan, from SMB Fatima Jinnah Government Girls School, and Fizza Fatima from Khatoon-e-Pakistan Government Girls School was also selected to be showcased in the exhibition.",
            description5: "The exhibition was held across Pakistan, in Karachi, Lahore and Islamabad, and is expected to be held internationally soon.",
            img: "/assets/images/NewsEvents/newsStories31.jpg",
            img1: "https://www.zindagitrust.org/img/news/image3-3.jpg",
            img2: "https://www.zindagitrust.org/img/news/image3-1.jpg",
            img3: "https://www.zindagitrust.org/img/news/image3-2.jpg",
            img4: "https://www.zindagitrust.org/img/news/image3-4.jpg",
            img5: "https://www.zindagitrust.org/img/news/image3-5.jpg",
        },
        {
            id: "32",
            date: "3/2/2019",
            title: "GOVERNMENT SCHOOLS WOW THINKERS, CREATIVES AND CELEBRITIES WITH ART SHOW",
            description: "Students from government schools put up a colourful display of creativity at Karachi Khatoon-i-Pakistan Government School.",
            description1: `Students from government schools put up a colourful display of creativity at Karachi's Khatoon-i-Pakistan Government School this Saturday afternoon.

On show was a set of student artworks as well as a Creatives’ Roundtable discussing “The Role of the Arts in Girls’ Education.”

The roundtable had creative thinkers from a variety of fields who discussed how to capitalise on the power of art to transform lives.

The exhibition featured a diverse set of student artworks from children enrolled in Classes 1 through 9, ranging from portraits, pointillism, marker art such as zentangle and optical illusion, experimental assignments in merging two animals into one, and much more.

One of the artworks that really stood out were a series of split portraits that were incredibly close to reality – visitors from fine artists and make-up artists to robotics experts and writers alike were stunned that they were made by students of Class 7.

Another artwork that caught the attention of the audience was an installation titled “Fly Free” – a lopsided arrangement of art room stools each painted with a beautiful story of its own.

The installation was one of the creations of the host school’s Art Club, which meets once a week and gives students the freedom to paint what they want. The club session runs in addition to a weekly art class for all students, where they learn a set of basic and advanced techniques, mediums as well as art history and major art movements.

The art programme was introduced to the schools by Zindagi Trust, which employs a subject lead to design a customised art curriculum as well as to train government teachers to teach art.

Hameeda Batool, the curator of the show and art teacher at Khatoon-i-Pakistan School, said she was pleasantly surprised to see so many parents wanting to meet the art teacher as they could see their child showing keen interest in the subject and wanted to learn what they could to do support their children.

" What else can a teacher ask for?" she exclaimed.`,
            description2: `The Creatives’ Roundtable featured Tazeen Husain, head of communication design at Indus Valley School of Art and Architecture, advertising guru Faraz Maqsood Hamidi, make-up artist Natasha Khalid of Natasha Salon, and Anam Shakil Khan, a visual artist and curriculum designer who established the host school’s art programme and developed an art curriculum to be used by all government schools. The roundtable was moderated by architect and interior designer Zain Mustafa. It began with a presentation by Anam Shakil Khan on the remarkable journey of the school’s art programme from an empty room to where it stands today.

The thinkers shared ideas on the value of an art education, making art and art education more accessible, gender biases about and within the arts and, most importantly, the purpose of an art education.

The consensus, as make-up artist Natasha Khalid put it, was that "art teaches you from a very early age that nothing fits in a box." A recurring theme in the discussion as well as from some of the art educators visiting the show later was that art teaches children how to think in a new way and helps them learn how to solve problems creativel.

On the question of gender in art, Summaiya Jillani shared that in her experience of trying to get students together to go paint a mural or start a community art project, it's always the girls that come forward because of a burning passion to express themselves.

Anam Shakil added that in addition to the stereotype of art being just for girls, there were divisions within art about which field was more suited to them (e.g. textiles vs media).

The roundtable ended on a heartwarming note as one of the presenting student artist’s father addressed the parents in the audience and urged them to let their daughters "fly" and pursue whatever it is that interests them.

Other than parents, the show was well attended by college students, private school students, art enthusiasts, activists, and leaders in the government and industry and the larger`,
            description3: `The art show was inaugurated by Corps Commander Karachi Lt. General Humayun Aziz. Karachi University Visual Studies department head Durriya Kazi, artist and educator Adeela Suleman, Education Secretary Qazi Shahid Pervez, Chief Secretary Mumtaz Ali Shah, British Deputy High Commissioner Ellin Burns, Actors Fahad Mustafa and Ahsan Khan, Sultan Allana Chairman HBL and Director AKFED, Ghias Khan of Engro and musician Bilal Maqsood were among some of the other notables who attended the event.

Zindagi Trust manages the two participating government schools - Khatoon-e-Pakistan Government School and SMB Fatima Jinnah Government Girls School - and has transformed the infrastructure, enrolment, parental engagement and student development at the school.

Singer and Zindagi Trust Founder Shehzad Roy was at the exhibition, showing guests from government and the entertainment industry around: “It is so humbling to see these young girls create such beautiful and creative art,” said Roy.

“For me it reinforces the importance of art in schools - not only does it ignite creative thinking but also positively impacts one’s self esteem and teaches children how to express themselves.”

According to the trust, one of the goals of the art show was to advocate for art to be taught in all government schools. To this end, an advocacy brief for art education was presented by the trust to the Education Secretary on his visit to the school.

“This exhibition is a message from Zindagi Trust to policymakers and the larger public that shows what a government school can and should achieve. Our children’s talent talents are waiting to be found – they need the government’s support through making art an integral part of the curriculum,” said Zara Hasnain, Manager of Programs at the trust.`,
            img: "/assets/images/NewsEvents/newsStories32.jpg",
            img1: "http://zindagitrust.org/photos/PO2252-11414842217.jpg",
            img2: "http://zindagitrust.org/photos/PO2250-41522264038.jpg",
            img3: "http://zindagitrust.org/photos/PO2245-121742448492.jpg",
            img4: "http://zindagitrust.org/photos/PO2255-bilal-art-show-1676358499.jpg",
            img5: "http://zindagitrust.org/photos/PO2243-131692876848.jpg",
        },
        {
            id: "33",
            date: "1/2/2019",
            title: "AN UPHILL DRIVE",
            description: "THE road that takes you to the Khatoon-e-Pakistan School, Karachi, is a steep one. It has been an equally uphill drive for Shehzad Roy's Zindagi Tr...",
            description1: `THE road that takes you to the Khatoon-e-Pakistan School, Karachi, is a steep one. It has been an equally uphill drive for Shehzad Roy's Zindagi Trust to transform the institution it adopted in 2015.

The school was in a shambles a few years ago like all peela schools I have visited. They have huge buildings and expansive playgrounds testifying to the vision of their founders from the early years of Pakistan. But lacking maintenance and good governance, they have fallen into decay.

Some committed people like Anita Ghulam Ali, the late managing director of the Sindh Education Foundation, tried to rectify the malaise. She conceptualised the Adopt-a-School programme and won sponsors for many public-sector schools. But the scheme failed because of the corruption and non-cooperation of functionaries of the education department. Many adopters abandoned their projects in frustration.

It is a feather in Shehzad Roy's cap that he has managed to take over Khatoon-e-Pakistan in the face of resistance and turn it around. It was his determination, a successful lawsuit and dexterous negotiations with the government on the transfer of management that helped him acquire and transform the school. He is a celebrity - a pop singer - and few in his position are interested in educating the poor man's child. Another achievement is that the education department continues to cooperate with him in this venture.

The school was in a shambles a few years ago.

What is Shehzad Roy's goal? He tells me he has learnt from his experience with the Fatima Jinnah School he adopted in 2006. He realised that if he had to make a policy impact he would have to create an enabling environment that would push the government to do its job. His strategy was to make the Zindagi Trust's presence felt in the school while the government worked on the brick-and-mortar stuff. The academic management has been entirely with the trust. The teachers, however, are on the government's payroll with the exception of a few. He hopes to make this a model of public-private partnership for others to follow.

I agreed to visit his project and see how he has managed the reform process. The school is elegantly but not ostentatiously done up. The decor is creative with pictures, artwork and handicraft produced by the students from inexpensive material. With a library containing 4,251 books and a huge playground, the school has two essential accessories. In Khatoon-e-Pakistan, a qualified librarian and a physical education instructor put them to good use. They ensure that all children read books and play games, keeping them mentally and physically healthy.

My focus was on the school management and the quality of education. Considering that the trust inherited a cluster of three schools with 870 students and 50 teachers in contentious relationships and with minimal discipline - some with special connections with the education department - one can imagine the challenge the new management faced.

In three years a system has been devised. Eleven Zindagi Trust teachers and a project manager (the principal) have been hired. Government teachers not willing to cooperate were transferred and replaced. It goes to the credit of the head, Anam Palla, that she has managed the transition process skilfully. Her professional development manager, Sana Husain, with a team of seven, addresses not just the pedagogy aspect but also enhances teachers' subject knowledge on a one-to-one basis. To rectify shortcomings, new material has been prescribed for additional reading and the NGO Ahung's Life Skills Based Education books introduced.

Anam describes her work in the first year as being "all about relationships". "At first the teachers did not relate to me, but now we get along well," she says.

There has been a marked improvement in the students' performance as the matriculation results testify. The percentage of students who passed has shot up from 22 per cent in the general group a few years ago to 88pc in 2018. In the sciences it has jumped up from 45pc to 89pc.

It was, however, disappointing to find the trust still trapped in the language dilemma. Roy agrees that a child learns best in her mother tongue. But he cites his "majboori" (compulsion) for the school's hybrid language policy which has a good dose of English as the medium of instruction.

I wonder about the University of Helsinki's thoughts on this matter. The university has recently entered into an agreement to help revamp the teachers' training college which the trust's subsidiary Durbeen has adopted to improve pedagogy in government schools. Experts tell me that Finland ranks the highest in international assessment tests on education because nearly all Finnish children get their education in their mother tongue.

Neither would the two teenagers from the trust's schools have addressed a crowd of thousands with such confidence and eloquence at the Aurat march last Friday, had they not opted to speak in Urdu to convey their message.`,
            img: "/assets/images/NewsEvents/newsStories33.jpg",
            img1: "/assets/images/NewsEvents/newsStories33.jpg",
        },
        {
            id: "34",
            date: "8/2/2018",
            title: "BALOCHISTAN GETS BOLD ABOUT CHILD PROTECTION",
            description: "Earlier this year, a Memorandum of Understanding was signed between Aahung and Balochistan Education Department.",
            description1: `QUETTA: The Government of Balochistan took a critical step for protecting its children through the introduction of Life Skills Based Education (LSBE) into the provincial school curriculum.

The official launch held in Quetta on Sunday was led by the provincial government leadership including interim Chief Minister Allahuddin Mari, Secretary of Secondary Education Noor-ul-Haq Baloch, Focal Person PPIU Jahangeer Kakar, Founder and President of Zindagi Trust Shehzad Roy and Program Manager of the host NGO Aahung, Aisha Ijaz.

All the key stakeholders from the Balochistan Education Department, who will be key players in the integration of the LSBE into the curriculum, expressed views on the initiative.

They highlighted the urgency of integrating LSBE into the provincial curriculum in order to empower children and adolescents with the skills they need to manage their health and safety in everyday life.

Both the Chief Minister and the Secretary Secondary Education thanked Mr Roy for taking the initiative to bring the LSBE to Balochistan after its successful implementation in the government schools in Sindh.

They pledged their commitment to support Aahung and Zindagi Trust in this initiative and gave their full endorsement to ensuring the smooth integration of LSBE into the provincial curriculum of Balochistan.

Roy shared his positive experience of implementing LSBE in the two government schools managed by the Zindagi Trust in Sindh, saying the impact it had made on the lives of the students and the school environment was transformative.

He appreciated the Balochistan government's ownership and urged upon other provinces to show leadership to protect Pakistan's children.

"When this year started, we all said we don't want another child like Zainab to suffer - Sindh and now Balochistan have shown leadership on this issue but what are the other provinces waiting for?" asked the singer-cum-activist.

Earlier this year, a Memorandum of Understanding was signed between Aahung and Balochistan Education Department to integrate the LSBE into the provincial curriculum.

A Project Coordination Committee (PCC) and Technical Advisory Committee (TAC) have been set up to ensure the ownership of the said initiative.

The TAC will also be responsible for reviewing Aahung's LSBE modules and integrating relevant content into existing textbooks for classes six to nine.

Simultaneously, a pilot LSBE intervention will be carried out in 10 schools of Quetta, to gather evidence and measure the impact of the LSBE.`,
            img: "/assets/images/NewsEvents/newsStories34.jpg",
            img1: "/assets/images/NewsEvents/newsStories34.jpg",
        },
        {
            id: "35",
            date: "16/1/2018",
            title: "PPP DECIDES TO EQUIP CHILDREN WITH LIFE SKILLS THROUGH EDUCATION",
            description: "Pakistan Peoples Party chairman Bilawal Bhutto-Zardari says the Sindh government has introduced child rights.",
            description1: `KARACHI: Pakistan Peoples Party chairman Bilawal Bhutto-Zardari says the Sindh government has introduced child rights and set up child protection units in all the 29 districts of the province.

He was speaking to the media at the Bilawal House here on Monday.

Chief Minister Murad Ali Shah, Senator Sherry Rehman, Education Minister Jam Mehtab Dahar, Information Minister Nasir Hussain Shah, Shahzad Roy, and representative of Ahang were also present on the occasion.

Appealing to the other provinces to follow Sindh's initiative, he said the Sindh government had also decided to introduce life skills in school curriculum from the next academic year so that the children would know how to act in a difficult situation.

The PPP chairman said life skills were first introduced informally in 200 schools in the province in 2009, including SMB Fatima Jinnah Government Girls School in Karachi, which is managed by singer Shehzad Roy.

"We initially feared negative reaction from parents but it received positive response from them and teachers alike as it was meant to teach children how to protect themselves against any abuse.

"Earlier, people did not discuss child abuse openly but after the Zainab incident they want to find out the solution to such problems," he added.

Bilawal said promotion of education was must to avoid Kasur-like incidents.

The PPP chairman added that the Sindh government would introduce it as a special subject from class sixth to create awareness among children.

"We all have to strive for the rights and protection of children because creating awareness among them is not a bad idea."

He said the Sindh government had taken ulema and NGOs on board and the chief minister had also constituted a committee to monitor it in which an ex-judge was also included.

Bilawal further said it was difficult to implement the laws made by the assembly in the past but they were now trying to overcome the weakness.

In reply to a question about policing, he said, "Our stand is very clear that police needs reforms, including accountability.

"Police should not be politicised and the government is now working to reform the department and all political parties will be consulted in this regard."

He said crimes could only be controlled when awareness was created among the masses along with convictions.

Shehzad Roy, on the occasion, said the Sindh government deserved full praise for introducing life skills formally in the curriculum from the next academic year.

Earlier, the chief minister constituted an 18-member committee under his chairmanship for effective implementation and enforcement of child protection rights.

In this connection, Chief Secretary Rizwan Memon with the approval of the chief minister issued a notification.

According to the notification, the chief minister would be the chairman of the committee while chief secretary, provincial ministers for education and law, adviser to CM on social welfare retired justice Nasir Aslam Zahid, special assistants to CM on human rights, secretary education, IG police, advocate Zia Awan, Sidqa Bari of Indus Resource Centre, Abdul Bari Khan of Indus Hospital, Aahung manager Aisha Aijaz and PeaceNiche chairman Khalid Mahmood among others will be the members.

The committee will monitor introduction of changes in the curriculum; progress in teachers' training for life skills education; implementation of actions required to be taken under Child Protection Authority 2011 and other relevant laws; performance of the Child Protection Authority, child protection units and child protection officers.

The committee will meet once a month wherein secretaries for school education and literacy, and social welfare departments will give presentation.`,
            img: "/assets/images/NewsEvents/newsStories35.jpg",
            img1: "/assets/images/NewsEvents/newsStories35.jpg",
        },
        {
            id: "36",
            date: "11/1/2018",
            title: "SHEHZAD ROY CALLS KASUR INCIDENT 'HEART-WRENCHING', DEMANDS JUSTICE",
            description: "Famous singer and social activist Shehzad Roy in a press conference on Thursday.",
            description1: `Famous singer and social activist Shehzad Roy in a press conference on Thursday demanded that the culprits behind the rape and murder of seven-year-old Zainab should be given strictest punishment.

Roy, who presented Geo News' programme 'Chal Parha' depicting state of the government schools in Pakistan, called the incident in Kasur heart-wrenching.

"To save the future Zainabs in Pakistan, better measures should be put in place," said the musician.

"In Pakistan, out of every five children, one is subjected to sexual abuse," said Roy, adding that the subject is still a taboo in the society.

"Most of the cases go unreported because there are laws for protection and we need to spread awareness about them" said the singer.

Roy said that stopping children from going out will not be justifiable and people need to teach their children and save from mishaps.`,
            img: "/assets/images/NewsEvents/newsStories36.jpg",
            img1: "/assets/images/NewsEvents/newsStories36.jpg",
        }
    ]

};

// const baseUrl = process.env.REACT_APP_API_BASE_URL;
const baseUrl = "http://localhost:3001/";

export default function useFetch(url) {
    const [data, setData] = useState(newses);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   setLoading(true);
    //   fetch(`${baseUrl}${url}`)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setData(data);
    //     })
    //     .catch((error) => {
    //       setError(error);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // }, [url]);

    return { data, error, loading };
}
