import React from 'react'

const PilotProjects = () => {
  return (
    <div className='p-3 lg:px-[45px] lg:pt-[30px] lg:w-[80%] m-auto text-center'>
        <h2 className='text-2xl font-bold text-[#ff6400] mt-5'>PILOT PROJECTS</h2>
        <p className='font-light mb-10'>We have adopted two government schools as pilot projects of school reform involving interventions in infrastructure upgrades, governance, administration, teacher professional development, academic innovation and tracking and a rich menu of co-curricular and extra-curricular activities.</p>
        <h1 className='mb-10 text-3xl font-bold'>OUR SCHOOLS</h1>
        <div style={{gridTemplateColumns: '200px 1fr 1fr'}} className='grid grid-rows-6 overflow-auto text-center mb-5'>
            <div className='invisible pointer-events-none'></div>
            <div className='bg-gradient-to-b from-[#9ED82B] to-[#95D131] lg:p-3 md:p-1 rounded-t-xl text-white font-bold'>SMB Fatima Jinnah Government Girls School</div>
            <div className='bg-gradient-to-b from-[#9ED82B] to-[#95D131] lg:p-3 md:p-1 rounded-t-xl text-white font-bold'>Khatoon-e-Pakistan Government Girls School</div>
            <div className='border lg:p-3 md:p-1 rounded-l-xl bg-gradient-to-r from-[#9ED82B] to-[#95D131] text-white font-bold text-left'>ADOPTED IN</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>2007</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>2015</div>
            <div className='border lg:p-3 md:p-1 rounded-l-xl bg-gradient-to-r from-[#9ED82B] to-[#95D131] text-white font-bold text-left'>STUDENTS</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>2200</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>850</div>
            <div className='border lg:p-3 md:p-1 rounded-l-xl bg-gradient-to-r from-[#9ED82B] to-[#95D131] text-white font-bold text-left'>TEACHERS</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>125</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>50</div>
            <div className='border lg:p-3 md:p-1 rounded-l-xl bg-gradient-to-r from-[#9ED82B] to-[#95D131] text-white font-bold text-left'>NATURE</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>Flagship School</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>Replicating Model</div>
            <div className='border lg:p-3 md:p-1 rounded-l-xl bg-gradient-to-r from-[#9ED82B] to-[#95D131] text-white font-bold text-left'>LOCATION</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>Garden West, Karachi</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>Stadium Road, Karachi</div>
            <div className='border lg:p-3 md:p-1 rounded-l-xl bg-gradient-to-r from-[#9ED82B] to-[#95D131] text-white font-bold text-left'>POPULATION</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>Multi-ethnic</div>
            <div className='border bg-[#DEF3CA] lg:p-3 md:p-1 text-[#929898] font-bold'>Multi-religious, Multi-ethnic</div>
        </div>
    </div>
  )
}

export default PilotProjects