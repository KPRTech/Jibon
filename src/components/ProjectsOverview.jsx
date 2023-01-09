import React from 'react'

const ProjectsOverview = () => {

    const project_overview = [
        {
            img: 'https://www.zindagitrust.org/img/pastprojects/1.jpg',
            title: 'OVERVIEW',
            content1: 'Approximately 10.5 million children from low-income families are forced into child labour in Pakistan. The Paid to Learn program was launched in 2002 to educate working children from urban slums across Pakistan and ran for 18 years.',
            content2: 'This was an accelerated two-year course which provided primary education to children employed as street vendors, store or factory helpers or auto-repair workers across Rawalpindi, Lahore and Karachi. As an incentive for the children and to make up for the loss of money due to skipping work, the children were paid a scholarship stipend on completion of every term.'
        },
        {
            img: 'https://www.zindagitrust.org/img/pastprojects/2.jpg',
            title: 'VISION',
            content1: 'The Paid to Learn program envisioned helping working children find a path out of a tough life of labour through education.',
            content2: 'The goal of the program was to empower children with basic literacy and numeracy, and where possible, help them transition from non-formal education to a mainstream school.'
        },
        {
            img: 'https://www.zindagitrust.org/img/pastprojects/3.jpg',
            title: 'DETAILS',
            content1: 'Regional academic coordinators recruited working children from the streets of major slums In Rawalpindi, Lahore and Karachi after speaking with their parents and employers. Once registered as students, the children were taught an accelerated course covering primary education in two years and 2 months.',
            content2: 'The program also sponsored the continuing education of top graduates who were encouraged to enroll in mainstream secondary schools, covering their admissions and monthly fee, as well as the cost of their textbooks, stationery and uniforms.'
        },
        {
            img: 'https://www.zindagitrust.org/img/pastprojects/4.jpg',
            title: 'IMPLEMENTATION',
            content1: 'Implementation of the project started with regional academic coordinators recruiting working children from the streets of major slums in Rawalpindi, Lahore and Karachi after speaking with their parents and employers. Once registered as students, the children were taught an accelerated course covering primary education in two years and two months.',
            content2: 'The program also facilitated its top graduates who were encouraged to enroll in mainstream secondary schools, covering their admissions and monthly fee, as well as the cost of their textbooks, stationery and uniforms.'
        },
        {
            img: 'https://www.zindagitrust.org/img/pastprojects/5.jpg',
            title: 'IMPACT',
            content1: 'The program enrolled over 6000 children, who previously spent most of their days toiling in car-repair shops, street markets, cottage industries, general stores or as domestic servants. With almost 900 working children being educated by the program at any given time, the program was able to graduate 5000 children from the primary education course. Several of our graduates have gone on to do well in mainstream private secondary schools, ending up completing their Matriculation and aspiring to enroll in college in order to get better jobs and have successful lives.'
        },
    ]

  return (
    <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[80%] m-auto'>
        {project_overview.map((overview, index) => {
            return (
                <div className='grid lg:grid-cols-2 grid-cols-1 mb-20' key={index}>
                    <div className='lg:px-10 md:px-10 px-5 text-left'>
                        <h2 className='py-5 text-[#FF6400] text-2xl font-bold'>{overview.title}</h2>
                        <hr />
                        <p className='py-5 text-[1.1rem]'>{overview.content1}</p>
                        {overview.content2 && <p className='py-5 text-[1.1rem]'>{overview.content2}</p>}
                    </div>
                    <div className='lg:mt-20 m-auto'>
                        <img className='' src={overview.img} alt="" />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProjectsOverview