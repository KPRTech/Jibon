import React from 'react';


const SignUpForm = () => {
    return (
        <div>
             <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-20  gap-y-10 justify-between ">
        <div className="lg:w-[70%]">
          <h2 className="font-mont text-black text-2xl font-bold">
          VOLUNTEER SIGN-UP FORM
          </h2>
          <p className='text-sm py-3 font-thin'> Please fill out the form below to help us find the right volunteer opportunity for you:</p>
        <hr/>
        <form className="flex flex-col gap-y-4 w-full py-4"
      >
     <div className='flex flex-col lg:flex-row gap-x-6 gap-y-4'>
   
   <input
          className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
          type={"text"}
          placeholder={"Name"}
          autoFocus
        />
  
        <input
          className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
          type={"email"}
          placeholder={"Email Address"}
        />
     </div>
        <input
          className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
          type={"number"}
          placeholder={"Phone Number"}
        />
        <textarea
          className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
          type={"text"}
          rows={4}
          placeholder={"Enter your message"}
        />
       </form>
        </div>
      
        <img
            src="/assets/images/volunteer/form-Img.jpg"
                alt="footer-img2"
              />
        </div>
      
        </div>
    );
};

export default SignUpForm;