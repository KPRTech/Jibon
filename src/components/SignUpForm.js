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
                    <hr />
                    <form className="flex flex-col gap-y-4 w-full py-4"
                    >
                        <div className='flex flex-col lg:flex-row gap-x-6 gap-y-4'>
                            <input
                                className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={"text"}
                                placeholder={"Name*"}
                                autoFocus
                            />
                            <input
                                className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={"Email Address*"}
                                placeholder={"Email Address"}
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-x-6 gap-y-4'>
                            <input
                                className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={"number"}
                                placeholder={"Phone Number*"}
                                autoFocus
                            />
                            <input
                                className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={""}
                                placeholder={"Occupation (Specify If Student)"}
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-x-6 gap-y-4'>
                            <input
                                className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={"text"}
                                placeholder={"Education"}
                                autoFocus
                            />
                            <input
                                className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={"text"}
                                placeholder={"Age In Years"}
                            />
                        </div>
                        <div className='flex'>
                            <h2 className='mr-2 font-bold text-[17px]'>Gender:</h2>
                            <input className='mr-2' type="radio" id="html" name="fav_language" value="HTML" />
                            <label className='mr-2' for="html">Male</label>
                            <input className='mr-2' type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">Female</label>
                        </div>
                        <input
                            className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
                            type={"number"}
                            placeholder={"Phone Number"}
                        />
                        <select name="dropdown">
                            <option value="Computer Architecture" selected>Computer Architecture</option>
                            <option value="Java">Java</option>
                            <option value="Discrete Mathematics">Discrete Mathematics</option>
                        </select>
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