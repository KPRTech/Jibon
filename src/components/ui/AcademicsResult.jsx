import React from 'react';


const AcademicsResult = () => {
    return (
        <div className=''>
            <hr />
            <div className='pb-12 lg:mx-24 mx-6'>
                <div className='mx-auto text-center py-12'>
                    <h2 className='text-2xl font-bold text-[#FF6400]'>
                        IMPACT ON ACADEMICS - SSC BOARD EXAM RESULTS</h2>
                    <h4 className='text-gray-700 text-lg'>Our Board Exam Result Comparision</h4>
                </div>
                <div className='grid grid-rows-1 grid-gap-10 lg:grid-cols-2 grid-cols-1'>
                    <div className='mx-auto w-9/12'>
                        <h2 className='text-2xl font-bold text-center text-[#FF6400]'>GRADE 10</h2>
                        <img className='' src="assets/images/khatoone pakistan/result-img1.jpg" alt="" />
                        <h2 className='text-2xl font-bold text-center py-4 text-[#FF6400]'>KHATOON-E-PAKISTAN GOVERNMENT GIRLS SCHOOL</h2>
                       <div className='lg:ml-20 ml-8'>
                       <div className='flex pb-2'>
                        <img className='mr-4 w-[22px] h-[20px]' src="assets/images/khatoone pakistan/green.jpg" alt="" />
                            <h3 className='font-bold text-gray-800'>After Adoption (2017-2018)</h3>
                        </div>
                        <div className='flex'>
                        <img className='mr-4 w-[22px] h-[20px]' src="assets/images/khatoone pakistan/red.jpg" alt="" />
                            <h3 className='font-bold text-gray-800'>Before Adoption (2015-2016)</h3>
                        </div>
                       </div>

                    </div>

                    <div className='mx-auto w-9/12'>
                        <h2 className='text-2xl font-bold text-center text-[#FF6400]'>GRADE 9</h2>
                        <img className='' src="assets/images/khatoone pakistan/result-img2.jpg" alt="" />
                        <h2 className='text-2xl font-bold text-center py-4 text-[#FF6400]'>KHATOON-E-PAKISTAN GOVERNMENT GIRLS SCHOOL</h2>
                       <div className='lg:ml-20 ml-8'>
                       <div className='flex pb-2'>
                        <img className='mr-4 w-[22px] h-[20px]' src="assets/images/khatoone pakistan/green.jpg" alt="" />
                            <h3 className='font-bold text-gray-800'>After Adoption (2017-2018)</h3>
                        </div>
                        <div className='flex'>
                        <img className='mr-4 w-[22px] h-[20px]' src="assets/images/khatoone pakistan/red.jpg" alt="" />
                            <h3 className='font-bold text-gray-800'>Before Adoption (2015-2018)</h3>
                        </div>
                       </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AcademicsResult;