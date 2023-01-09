import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-gray-200 pt-16 lg:px-40">
      <hr
        className="border-t-1 pt-10 
          border-gray-400 w-[100%] mx-auto mt-4"
      />
      <div className="lg:flex lg:justify-around">
        <div className="grid justify-items-center p-2 text-justify lg:mx-2">
          <img src="/assets/images/LeaderShip/tajwar.png" alt="" />
          <h2 className="mt-[15px] text-[18px] font-bold text-[#333333]">
            Tajwar Hashmi – ACA
          </h2>
          <p className="text-[#333333] mt-2 text-[14px] pb-[20px] leading-6">
            CFO &amp; Director Operations
          </p>

          <p className="text-[#333333] text-[14px] pb-[10px] leading-6">
            Syed Tajwar Hashmi leads Zindagi Trust’s finance and operations. In
            his role he oversees the organisations revenue growth, human
            resources, facility management and procurement, compliance and risk
            management functions to ensure the highest level of fiscal
            accountability and transparency at the Trust. Prior to joining
            Zindagi Trust, Tajwar has 15 years of demonstrated history of
            working in the sectors of International Trade, Hospitality and
            Tourism, Education, and Retail in Middle East and Pakistan with the
            ability to streamline business operations that drive growth and
            increase efficiency. Tajwar began his career in the assurance group
            of A.F.Ferguson &amp; Co. (PwC) as an auditor of Manufacturing,
            FMCGs, NGOs, Asset Management and Banking companies. Tajwar is a
            Chartered Accountant and is a member of Institute of Chartered
            Accountants of Pakistan.
          </p>

          <a
            href="https://www.linkedin.com/in/tajwar-hashimi-aca-90921030"
            className="bg-[#FF6400] text-[#fff] mt-[10px] py-1 px-3 rounded flex"
          >
            <span className="p-1">
              <FaLinkedinIn />
            </span>
            &nbsp;|&nbsp; View Linkedin Profile
          </a>
        </div>

        {/* two  */}

        <div className="grid justify-items-center p-2 text-justify lg:mx-2 lg:mg-2 mt-4">
          <img src="/assets/images/LeaderShip/aamnapasha.png" alt="" />
          <h2 className="mt-[15px] text-[18px] font-bold text-[#333333]">
            Aamna Pasha
          </h2>
          <p className="text-[#333333] mt-2 text-[14px] pb-[20px] leading-6">
            Chief Academic Officer
          </p>

          <p className="text-[#333333] text-[14px] pb-[10px] leading-6">
            Aamna Pasha is the Chief Academic Officer of Zindagi Trust where she
            is responsible for the academic oversight of two of the largest
            government schools adopted under a public private partnership. In
            her role Aamna helps to set strategic direction for Zindagi Trusts
            academic programmes and partnerships. Aamna completed her PhD from
            the Institute of Education, University College London (UCL),
            England. Her research interests include global education, global
            citizenship, and global skills from the context of the global south.
            Aamna completed her Masters of Arts from the same institution in
            Development Education and her Bachelors degree from the University
            Of Waterloo, Canada where she majored in Psychology and Business
            Management. With over 10 years of experience in the field of
            education, Aamna has worked extensively in the areas on skill and
            competency development, use of technology in education, community
            based approaches to improving the quality of teaching and learning
            and on teacher professional development. Aamna has previously held
            leadership roles at Durbeen, Aga Khan Foundation and the Aga Khan
            University Examination Board.
          </p>

          <a
            href="https://www.linkedin.com/in/aamna-pasha-72286a97"
            className="bg-[#FF6400] text-[#fff] mt-[10px] py-1 px-3 rounded flex"
          >
            <span className="p-1">
              <FaLinkedinIn />
            </span>
            &nbsp;|&nbsp; View Linkedin Profile
          </a>
        </div>

        {/* three  */}

        <div className="grid justify-items-center p-2 text-justify mt-4">
          <img src="/assets/images/LeaderShip/faiq.png" alt="" />
          <h2 className="mt-[15px] text-[18px] font-bold text-[#333333]">
            Faiq Ahmed
          </h2>
          <p className="text-[#333333] mt-2 text-[14px] pb-[20px] leading-6 text-center">
            Senior Marketing & Resource Development Manager
          </p>

          <p className="text-[#333333] text-[14px] pb-[10px] leading-6">
            Faiq oversees Zindagi Trust’s resource development, communications
            and marketing department, playing a key role in developing and
            achieving Zindagi Trust’s strategic marketing plan, resource
            development and brand objectives to further strengthen brand
            recognition and organization’s mission on a global scale. Before
            joining Zindagi Trust, Faiq has an experience of over 8 years of
            working in the advertising industry with Pakistan’s biggest FMCG
            Brands and currently teaches as a visiting faculty at Iqra
            University & Ziauddin College of Media Sciences. He also holds
            various Digital Media certifications from Google (Blue & Green
            Belt), Meta, HubSpot, Coursera & UNSW Sydney.
          </p>

          <a
            href="https://www.linkedin.com/in/fiqister"
            className="bg-[#FF6400] text-[#fff] mt-[10px] py-1 px-3 rounded flex"
          >
            <span className="p-1">
              <FaLinkedinIn />
            </span>
            &nbsp;|&nbsp; View Linkedin Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
