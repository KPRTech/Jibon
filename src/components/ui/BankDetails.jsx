import React from 'react';
import AchievementHeader from '../AchievementHeader';


const BankDetails = () => {
    return (
        <div className='mx-24'>
             <AchievementHeader achiveHeader="OUR BANK DETAILS" achiveDescription="The details of our Bank Accounts are as follows:" />
         <div className='container grid grid-rows-1 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 lg:py-12 py-4 px-4'>
            <div>
                <h2 className='text-2xl font-bold text-[#FF6400]'>1. HABIB BANK LTD.</h2>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Title of Account:</span> Zindagi Trust</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Bank Name:</span> Habib Bank <br /> Limited</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Account No:</span> 0526-79010777-03</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Branch Code No:</span> 0526 (Bahadurabad Branch, Karachi)</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>IBAN:</span> PK66HABB0005267901077703</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>SWIFT Code:</span> HABBPKKA</h3>
            </div>

            <div>
            <h2 className='text-2xl font-bold text-[#FF6400]'>2. BANK AL HABIB LTD.</h2>
            <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Title of Account:</span> Zindagi Trust</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Bank Name:</span> Bank Al Habib <br /> Limited</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Account No:</span> 1088-0081-001019-01-6</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Branch Code No:</span> 1088 (City Towers Branch, Karachi)</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>IBAN No::</span> PK05 BAHL 1088 0081 0010 1901</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>SWIFT Code:</span> BAHLPKKA</h3>
            </div>

            <div>
            <h2 className='text-2xl font-bold text-[#FF6400]'>3. BANK AL HABIB LTD. (Islamic Banking for Zakat)</h2>
            <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Title of Account:</span> M/S Zindagi Trust</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Bank Name:</span> Habib Al Bank <br /> Limited</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Account No:</span> 5001-0069-015752-04-2</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Branch Code No:</span> 5001 (Islamic Banking Branch Shahrah-e-Faisal, Karachi)</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>IBAN NO:</span> PK66 BAHL 5001 0069 0157 5204</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>SWIFT Code:</span> BAHLPKKA</h3>
            </div>

            <div>
            <h2 className='text-2xl font-bold text-[#FF6400]'>4. FAYSAL BANK LIMITED</h2>
            <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Title of Account:</span> Zindagi Trust</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Bank Name:</span> Habib Al Bank <br /> Limited</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Account No:</span> 3574390000000032</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Branch Code No:</span> 3574</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>IBAN NO:</span> PK89FAYS3574390000000032</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>SWIFT Code:</span> FAYSPKKA</h3>
            </div>

            <div>
            <h2 className='text-2xl font-bold text-[#FF6400]'>5. UNITED BANK LIMITED</h2>
            <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Title of Account:</span> Zindagi Trust</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Bank Name:</span> United Bank <br /> Limited</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Account No:</span> 000282398486</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>Branch Code No:</span> 0932</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>IBAN NO:</span> PK46UNIL0109000282398486</h3>
                <h3 className='leading-7 text-gray-700 text-lg tracking-normal'><span className='font-bold'>SWIFT Code:</span> UNILPKKA</h3>
            </div>

         </div>
        </div>
    );
};

export default BankDetails;