import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import SignUpForm from '../../components/SignUpForm';
import BreadCrumb from '../../components/ui/BreadCrumb';

const VolunteerSignUpPage = () => {
    return (
        <div>
            <HeroBanner
        title={"Volunteer Program"}
        heroTextOne={
          "Volunteer your time and help make a difference to the future of Pakistan."
        }
      ></HeroBanner>
      <BreadCrumb 
        breadCrumbText={"Get Involved » Volunteer Program"}
      ></BreadCrumb>
      <SignUpForm></SignUpForm>
        </div>
    );
};

export default VolunteerSignUpPage;