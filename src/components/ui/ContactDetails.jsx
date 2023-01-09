import React from 'react';
import PrimaryButton from '../PrimaryButton';

const ContactDetails = () => {
    return (
        <div>
        <hr />
         <div className='lg:mx-24 mx-4 py-12'>
         <div className='grid grid-rows-1 lg:grid-cols-2 gap-4 sm:grid-cols-1'>
            <div className='w-[100%]'>
            <h2 className='text-2xl pb-5 font-bold text-[#FF6400]'>
            CONTACT DETAILS:</h2>
<h3 className='leading-8 text-gray-700 text-[17px] tracking-normal'><span className='font-bold'>Address:</span> Khatoon-e-Pakistan Government Girls School, Sir Ibrahim Haroon Jafar Road, Bahadurabad, Karachi, Karachi City, Sindh</h3>
<h3 className='leading-8 text-gray-700 text-[17px] tracking-normal'><span className='font-bold'>Phone:</span> 021-34911119</h3>
<h3 className='leading-7 py-4 text-gray-700 text-[17px] tracking-normal'>For queries, suggestions or contributions feel free to contact us at info@zindagitrust.org</h3>
<h3 className='leading-7 font-bold text-gray-700 text-[17px] tracking-normal'>GOOGLE MAP/DIRECTIONS:</h3>
<div className='mt-4 sm:mr-4'>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7238.51821313431!2d67.072871!3d24.889142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31c6fa448211baee!2sKhatoon-e-Pakistan%20Government%20Girls%20School%20(Adopted%20by%20Zindagi%20Trust)!5e0!3m2!1sen!2sus!4v1673256521472!5m2!1sen!2sus" width="600" height="280"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
            </div>
            <div className='lg:ml-40'>
            <h2 className='text-2xl mt-4 leading-8 font-bold'>
            GENERAL INQUIRIES</h2>
            <p className='leading-8 text-gray-700 text-sm tracking-normal'>Kindly fill following form to send your general inquiries</p>
         
<div>

<form action="">
    <input  placeholder="Name" className="border my-2 text-gray-800 border-gray-400 p-3 text-[16px] font-medium outline-none w-full" type="text" name='name' />
    <input placeholder="Email Address" className="border my-2 text-gray-800 border-gray-400 p-3 text-[16px] font-medium outline-none w-full" type="email" name="email-address" id="" />
    <input placeholder="Phone Number" className="border my-2 text-gray-800 border-gray-400 p-3 text-[16px] font-medium outline-none w-full" type="number" name="" id="" />
    <textarea placeholder="Enter Your Message" className="border my-2 text-gray-800 border-gray-400 p-3 text-[16px] font-medium outline-none w-full" name="description" id="" cols="15" rows="3"></textarea>
</form>
<div className="border my-2 border-gray-400 w-80 h-20 bg-[#F9F9F9] rounded">
    <div className='flex items-center justify-items-center p-2  justify-between'>
      <div className='flex'>
      <input className='w-6 mr-2' type="checkbox" name="" id="" />
        <h3>
I'm not a robot</h3>
      </div>
      <div className='text-center'>
        <img className='w-8 text-center' src="assets/images/khatoone pakistan/recaptcha.png" alt="" />
        <h3 className='text-[10px]'>reCAPTCHA</h3>
     <div className='flex text-center text-[10px]'>
     <a href=""><p>Privacy</p></a>
        <span>-</span>
        <a href=""><p>Terms</p></a>
     </div>
    </div>
    </div>
  

</div>
<PrimaryButton>send</PrimaryButton>
</div>
            </div>
        </div>
         </div>
      </div>
      
    );
};

export default ContactDetails;