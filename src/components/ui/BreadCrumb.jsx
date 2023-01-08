import React from 'react';

const BreadCrumb = ({ breadCrumbText }) => {
    return (
        <div className='text-sm font-mont flex items-center mx-3 my-5 lg:mx-40 lg:my-20'>
            <a href='/' className='text-[#ff6400] hover:underline'>Home</a>
            <span className='text-[#333] mx-1'>»</span>
            <p className='text-[#333] text-[15px]'>{breadCrumbText}</p>
        </div>
    );
}

export default BreadCrumb;
