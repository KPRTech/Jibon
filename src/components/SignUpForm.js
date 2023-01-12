import React from 'react';
import PrimaryButton from './PrimaryButton';


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
                                required
                                autoFocus
                            />
                            <input
                                className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={"Email Address*"}
                                placeholder={"Email Address"}
                                required
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
                        <select className='w-full rounded-none px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300' name="dropdown">
                            <option value="Select Location*" selected>Select Location*</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Out Site Pakistan">Out Site Pakistan</option>
                        </select>
                        <select className='w-full rounded-none px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300' name="dropdown">
                            <option value="Select City*" selected>Select City*</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Multan">Multan</option>
                            <option value="Gujranwala">Gujranwala</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Quetta">Quetta</option>
                            <option value="Sargodha">Sargodha</option>
                            <option value="Others">Others</option>
                        </select>
                        <select className='w-full rounded-none px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300' name="dropdown">
                            <option value="Preferred Volunteer Areas" selected>Preferred Volunteer Areas</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Film-making">Film-making</option>
                            <option value="Fundraising">Fundraising</option>
                            <option value="Writing">Writing</option>
                            <option value="Others">Others</option>
                        </select>
                        <select className='w-full rounded-none px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300' name="dropdown">
                            <option value="Relevant Skills" selected>Relevant Skills</option>
                            <option value="Computer">Computer</option>
                            <option value="Tutoring">Tutoring</option>
                            <option value="Writing">Writing</option>
                            <option value="Fundraising">Fundraising</option>
                            <option value="Clerical skills">Clerical skills</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Supervision">Supervision</option>
                            <option value="Others">Others</option>
                        </select>
                        <input
                                className="px-4 w-full  py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                                type={"text"}
                                placeholder={"Availability"}
                            />
                              <p className='text-xs font-thin'>(Example: Jan – March, Every Saturday, 9am-1pm/ During week days, 8:30am-2pm / 9am - 2pm on weekdays)

</p>
                        <textarea
                            className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                            type={"text"}
                            rows={4}
                            placeholder={"Previous work,volunteer experience or training relevant to the Zindagi Trust"}
                        />
                        <textarea
                            className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                            type={"text"}
                            rows={4}
                            placeholder={"Reason for volunteering"}
                        />
                        <textarea
                            className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300"
                            type={"text"}
                            rows={4}
                            placeholder={"Anything else you'd like to tell us"}
                        />
                         <select className='w-full rounded-none px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#FF6400] linear duration-300' name="dropdown">
                            <option value=" How did you hear about us" selected>
                                How did you hear about us
                            </option>
                            <option value="Google">Google</option>
                            <option value="Newspaper">Newspaper</option>
                            <option value="Newsletter">Newsletter</option>
                            <option value="Magazine">Magazine</option>
                            <option value="Others">Others</option>
                        </select>
                        <PrimaryButton
          children="SUBMIT"
          className="text-lg px-6"
          
        />
                    </form>
                </div>

                <img className='h-[40%] w-full lg:w-[30%]'
                    src="/assets/images/volunteer/form-Img.jpg"
                    alt="footer-img2"
                />
            </div>

        </div>
    );
};

export default SignUpForm;