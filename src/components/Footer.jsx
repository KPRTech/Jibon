import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#1A1A1A]'>
          <div className="container mb-12 lg:py-8 lg:px-24 py-4 px-2 grid grid-rows-1 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div>
        <h1 className="text-base font-bold text-gray-300">STAY CONNECTED</h1>
         <div className="border-t-4 border-[#FF6400] w-8 my-4"></div>
         <h2 className="text-gray-400 text-sm pb-1">Subscribe to our newsletter</h2>
         <input className="text-sm border-none outline-none py-2 px-3" type="email" name="" id="" placeholder='Enter Email Address....' /> <button className="text-white bg-[#FF6400] py-1 px-2 rounded-[5px]">join</button>
        </div>
        <div>
        <h1 className="text-base font-bold text-gray-300">NAVIGATE</h1>
        <div className="border-t-4 border-[#FF6400] w-8 my-4"></div>
       <div className="grid grid-cols-2">
      <div> 
        <a href=""> <h2 className="text-gray-400 text-sm pb-1 hover:text-[#FF6400]">About Us</h2></a>
        <a href=""> <h2 className="text-gray-400 text-sm pb-1">Our Work</h2></a>
        <a href=""> <h2 className="text-gray-400 text-sm pb-1">About Us</h2></a>
        <a href=""> <h2 className="text-gray-400 text-sm pb-1">About Us</h2></a>
      </div>
      <div> 
        <a href=""> <h2 className="text-gray-400 text-sm pb-1">Donate</h2></a>
        <a href=""> <h2 className="text-gray-400 text-sm pb-1">Donate</h2></a>
        <a href=""> <h2 className="text-gray-400 text-sm pb-1">Donate</h2></a>
        <a href=""> <h2 className="text-gray-400 text-sm pb-1">Donate</h2></a>
        </div>
       </div>
        </div>
          <h1 className="text-2xl text-purple-600">This is footer</h1>
         <h1 className="text-2xl text-purple-600">This is footer</h1>
          <h1 className="text-2xl text-purple-600">This is footer</h1>
      
          </div>
            </div>
           
        </div>
    );
}

export default Footer;
