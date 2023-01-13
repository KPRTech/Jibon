import React, { useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import BreadCrumb from "../../components/ui/BreadCrumb";
import { TfiAngleRight } from "react-icons/tfi";
import OtherDonate from "../../components/otherDonate/OtherDonate";
import FeatureDonation from "../../components/FeatureDonation";
import AchievementHeader from "../../components/AchievementHeader";
import "./donatePage.css";

const DonatePage = () => {
  const [indexNum, setIndexNum] = useState(0);

  const [donateAmount, setDonateAmount] = useState(null);
  const [otherAmount, setOtherAmount] = useState(0);

  const [isSubmit, setIsSubmit] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donateAmount !== null) {
      if (donateAmount === "0") {
        setDonateAmount(otherAmount);
      }
      setErrMsg("");
      setIsSubmit(true);
    } else {
      setErrMsg("Please select an amount first.");
    }
  };

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    console.log("final submit");
  };

  const [donateOptionsArr, setDonateOptionsArr] = useState([
    {
      title: "Sponsor a Child's Education",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p className="font-rale text-sm text-primary font-semibold mt-2 mb-5">
            {" "}
            Help us educate a child
          </p>
          <div>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
                id="edu1"
                type={"radio"}
                className={"hidden"}
                value={15}
              />
              <label
                id="eduLabel1"
                for={"edu1"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $15 – One month of classes for a student at our reformed
                government schools
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
                id="edu2"
                type={"radio"}
                className={"hidden"}
                value={500}
              />
              <label
                id="eduLabel2"
                for={"edu2"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $500 – Textbooks, technology and other classroom aids for one
                school
              </label>
            </p>

            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
                id="edu3"
                type={"radio"}
                className={"hidden"}
                value={0}
              />
              <label
                id="eduLabel3"
                for={"edu3"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                Other Amount
              </label>
            </p>
            <input
              name="otherAmount"
              className={`px-4 py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#333333] linear duration-300`}
              type={"number"}
              placeholder={"Enter other amount ($)"}
              onChange={(e) => {
                setOtherAmount(e.target.value);
                setErrMsg("");
              }}
            />
          </div>
        </div>
      ),
      status: true,
    },
    {
      title: "Breakfast, Arts, Sports, Health & Counseling ",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p className="font-rale text-sm text-primary font-semibold mt-2 mb-5">
            {" "}
            Support our holistic programs to enrich a child's school experience
          </p>
          <div>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu1"
                type={"radio"}
                className={"hidden"}
                value={10}
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
              />
              <label
                id="eduLabel1"
                for={"edu1"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $10 – sponsors one month of breakfast for one child{" "}
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu2"
                type={"radio"}
                className={"hidden"}
                value={100}
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
              />
              <label
                id="eduLabel2"
                for={"edu2"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $100 – Supports Sports & Arts activities for a class of 30
                students for one academic term
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu3"
                type={"radio"}
                className={"hidden"}
                value={0}
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
              />
              <label
                id="eduLabel3"
                for={"edu3"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                Other Amount
              </label>
            </p>
            <input
              name="otherAmount"
              className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#333333] linear duration-300"
              type={"number"}
              placeholder={"Enter other amount ($)"}
              onChange={(e) => {
                setOtherAmount(e.target.value);
                setErrMsg("");
              }}
            />
          </div>
        </div>
      ),
      status: false,
    },
    {
      title: "Zakat to Educate a Student",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p className="font-rale text-sm text-primary font-semibold mt-2 mb-5">
            {" "}
            Sponsor the education of zakat-eligible students at our schools
          </p>
          <div>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu1"
                type={"radio"}
                className={"hidden"}
                value={30}
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
              />
              <label
                id="eduLabel1"
                for={"edu1"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $30 – Sponsors one week of education for 10 students
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu2"
                type={"radio"}
                className={"hidden"}
                value={100}
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
              />
              <label
                id="eduLabel2"
                for={"edu2"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $100 – Sponsors one week of education for 10 students
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu3"
                type={"radio"}
                className={"hidden"}
                value={0}
                onChange={(e) => {
                  setDonateAmount(e.target.value);
                  setErrMsg("");
                }}
              />
              <label
                id="eduLabel3"
                for={"edu3"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                Other Amount
              </label>
            </p>
            <input
              name="otherAmount"
              className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#333333] linear duration-300"
              type={"number"}
              placeholder={"Enter other amount ($)"}
              onChange={(e) => setOtherAmount(e.target.value)}
            />
          </div>
        </div>
      ),
      status: false,
    },
  ]);

  const [donateDespArr, setDonateDespArr] = useState([
    {
      title: `SPONSOR A CHILD'S EDUCATION`,
      desp: `Every child has a dream and deserves a chance to make these dreams come true. A holistic education empowers a child with the key to realizing her dreams. Sponsor quality education for a child in our government schools for one month, one year or a time period of your choice.`,
      imgSrc: "/assets/images/donate/donate1.jpg",
    },
    {
      title: `Breakfast, Arts, Sports, Health & Counseling`,
      desp: `There are many athletes, artists, and geniuses hiding undiscovered in our government schools. We bring a diverse array of holistic education to our schools – sports, art, chess, life skills, guest talks and summer camps. Support us to enrich the government school experience for these young children so that they can reach their full potential and transform their lives.`,
      imgSrc: "/assets/images/donate/donate2.jpg",
    },
    {
      title: `Zakat for Education`,
      desp: `A holistic school education can truly transform an individual’s life. Zindagi Trust is certified as Shariah compliant in its management of zakat – our school management teams determine zakat eligibility of students based on a thorough training after which cases are vetted by our Shariah advisor. Support the complete education of a child (including classes, textbooks and lab/co-curricular costs) by donating your zakat today.`,
      imgSrc: "/assets/images/donate/donate3.jpeg",
    },
  ]);

  const handleJobs = (clickIndex) => {
    setIndexNum(clickIndex);
    donateOptionsArr.map((item, index) => {
      if (index == clickIndex) {
        item.status = !item.status;
      } else {
        item.status = false;
      }
      setDonateOptionsArr([...donateOptionsArr]);
    });
  };

  return (
    <div>
      <HeroBanner
        title={"Donate Us"}
        heroTextOne={
          "Zindagi Trust is a non-governmental, non-profit organization that strives to improve the quality of education."
        }
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Donate Us"}></BreadCrumb>

      {/* main contents */}
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-28 gap-y-20 justify-between">
        {/* help us part */}
        <div className="lg:w-40% animate-[slideYTwo_1s_ease_1] rounded-lg px-6 py-4 border-[1px] border-[#333333]/30">
          <h2 className="font-mont text-2xl text-secondary font-bold pb-3 mb-6 mt-5 border-b-2">
            HELP US REFORM PUBLIC EDUCATION ACROSS PAKISTAN
          </h2>

          <p className="font-rale text-sm text-secondary mt-2 mb-5">
            {" "}
            Donate today and transform students’ lives
          </p>

          <div className="mb-6">
            <form action="#" method="POST">
              {!isSubmit ? (
                donateOptionsArr.map((item, index) => (
                  <div className="font-time">
                    <p
                      className="cursor-pointer text-sm font-mont font-bold mt-2 p-4 border-[1px] flex justify-start gap-x-2 items-center hover:bg-secondary/20  active:bg-slate-300 linear duration-300"
                      onClick={() => handleJobs(index)}
                    >
                      <TfiAngleRight
                        className={
                          item.status
                            ? "text-primary w-[10%] text-lg rotate-90 linear duration-300"
                            : "text-primary w-[10%] text-lg linear duration-300"
                        }
                      />
                      <span className="w-[90%]">{item.title}</span>
                    </p>

                    {item.status && item.details()}
                  </div>
                ))
              ) : (
                <div className="text-secondary text-lg">
                  <p className="text-2xl mb-4">
                    Amount:{" "}
                    <span className="text-primary font-semibold">
                      ${donateAmount} USD
                    </span>
                  </p>
                  <p className="text-lg mb-3 font-semibold">
                    YOUR PAYMENT METHOD
                  </p>
                  <div className="flex gap-x-3 justify-items-stretch">
                    <p
                      className="w-full mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300"
                      onClick={() => {
                        setPaymentMethod("0");
                      }}
                    >
                      <input
                        name="method"
                        id="edu1"
                        type={"radio"}
                        className={"hidden"}
                        value={1}
                      />
                      <label
                        id="eduLabel1"
                        for={"edu1"}
                        className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
                      >
                        {" "}
                        Credit / Debit Card
                      </label>
                    </p>
                    <p
                      className="w-full mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300"
                      onClick={() => {
                        setPaymentMethod("1");
                      }}
                    >
                      <input
                        name="method"
                        id="edu2"
                        type={"radio"}
                        className={"hidden"}
                        value={2}
                      />
                      <label
                        id="eduLabel2"
                        for={"edu2"}
                        className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
                      >
                        {" "}
                        Bank Transfer
                      </label>
                    </p>
                  </div>

                  {/* CONTACT INFORMATION */}
                  <p className="text-lg mb-3 mt-5 font-semibold">
                    YOUR CONTACT INFORMATION
                  </p>
                  <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4 mb-3">
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"text"}
                      placeholder={"First Name*"}
                      required
                      autoFocus
                    />
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"text"}
                      placeholder={"Last Name*"}
                      required
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4 mb-3">
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"email"}
                      placeholder={"Email Address*"}
                    />
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"tel"}
                      placeholder={"Phone Number*"}
                    />
                  </div>
                  <select
                    className="w-full rounded-none px-4 py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                    name="dropdown"
                  >
                    <option selected="">Select Country*</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia (Plurinational State of)</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">C么te DIvoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="KP">
                      Democratic Peoples Republic of Korea
                    </option>
                    <option value="CD">
                      Democratic Republic of the Congo&nbsp;
                    </option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GR">Greece</option>
                    <option value="GD">Grenada</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HN">Honduras</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran (Islamic Republic of)</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">
                      Lao People鈥檚 Democratic Republic
                    </option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia (Federated States of)</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="QA">Qatar</option>
                    <option value="KR">Republic of Korea</option>
                    <option value="MD">Republic of Moldova</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="LK">SriLanka</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="KR">South Korea</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">
                      United Kingdom of Great Britain and Northern Ireland
                    </option>
                    <option value="US">United States of America</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">
                      Venezuela (Bolivarian Republic of)
                    </option>
                    <option value="VN">Viet Nam</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                  <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4 mb-3 mt-3">
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"text"}
                      placeholder={"Address*"}
                      required
                    />
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"text"}
                      placeholder={"City*"}
                      required
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4">
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"text"}
                      placeholder={"State*"}
                    />
                    <input
                      className="px-4 w-full lg:w-[50%] py-3.5 text-sm border-[1px] border-[#333333]/20 outline-0 focus:border-[#FF6400] linear duration-300"
                      type={"tel"}
                      placeholder={"ZIP/Postal Code*"}
                    />
                  </div>
                  {/* Designate  */}
                  <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4 mt-3">
                    <div className="border-r-2 pr-5">
                      <h2 className="mr-2 font-semibold  mb-1 text-sm">
                        Designate this donation as Zakat
                      </h2>
                      <input
                        className="mr-2"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label className="mr-2" for="html">
                        Yes
                      </label>
                      <input
                        className="mr-2"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html">No</label>
                    </div>
                    <div className="">
                      <h2 className="mr-2 mb-1  font-semibold text-sm">
                        Make this a Monthly Contribution
                      </h2>
                      <input
                        className="mr-2"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label className="mr-2" for="html">
                        Yes
                      </label>
                      <input
                        className="mr-2"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html">No</label>
                    </div>
                  </div>
                  {/* paymentMethod */}
                  {paymentMethod === "0" ? (
                    <div>
                      <p className="text-lg mt-5 mb-3 font-semibold">
                        SELECT PAYMENT METHOD
                      </p>
                      <div class="flex flex-wrap gap-3 gap-x-5">
                        <div class="inputGroup2 flex gap-x-2">
                          <input
                            id="method1"
                            name="paymenttype"
                            type="radio"
                            value="ppl"
                          />
                          <label for="method1" className="cursor-pointer">
                            <div align="center border-2">
                              <img src="assets/images/donate/method1.jpeg" />
                            </div>
                          </label>
                        </div>
                        <div class="inputGroup2 flex gap-x-2">
                          <input
                            id="method2"
                            name="paymenttype"
                            type="radio"
                            value="HBL"
                          />
                          <label for="method2" className="cursor-pointer">
                            <div align="center border-2">
                              <img src="assets/images/donate/method1-2.jpeg" />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg mt-5 mb-3 font-semibold mt-3">
                        SELECT BANK
                      </p>
                      <div class="flex flex-wrap gap-3 gap-x-5">
                        <div class="inputGroup2 flex gap-x-2">
                          <input
                            id="method1"
                            name="paymenttype"
                            type="radio"
                            value="ppl"
                          />
                          <label for="method1" className="cursor-pointer">
                            <div align="center border-2">
                              <img
                                loading="lazy"
                                className=""
                                src="assets/images/donate/method1-2.jpeg"
                              />
                            </div>
                          </label>
                        </div>
                        <div class="inputGroup2 flex gap-x-2">
                          <input
                            id="method2"
                            name="paymenttype"
                            type="radio"
                            value="HBL"
                          />
                          <label for="method2" className="cursor-pointer">
                            <div align="center border-2">
                              <img
                                loading="lazy"
                                className=""
                                src="assets/images/donate/method2.jpeg"
                              />
                            </div>
                          </label>
                        </div>
                        <div class="inputGroup2 flex gap-x-2">
                          <input
                            id="method3"
                            name="paymenttype"
                            type="radio"
                            value="HBL"
                          />
                          <label for="method3" className="cursor-pointer">
                            <div align="center border-2">
                              <img
                                loading="lazy"
                                className="w-24"
                                src="assets/images/donate/method2-2.png"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {errMsg && (
                <p className="ml-4 text-base my-3 font-semibold text-[red] animate-[popUpY_1s_ease_1]">
                  {errMsg}
                </p>
              )}
              <div className="flex justify-end gap-x-3 mt-2">
                <a
                  className={`uppercase text-white bg-secondary/70 hover:bg-secondary text-sm font-mont font-semibold py-2 hidden px-3 rounded duration-300 items-center mt-8 cursor-pointer ${
                    isSubmit && "!flex"
                  }`}
                  onClick={() => {
                    setIsSubmit(false);
                    setDonateAmount(null);
                  }}
                >
                  Back
                </a>
                <button
                  type="submit"
                  className={`uppercase text-white bg-[#FF6400] text-sm font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center mt-8`}
                  onClick={isSubmit ? handleSubmitFinal : handleSubmit}
                >
                  {isSubmit ? "Donate" : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* help us part */}

        {/* sponsor part */}
        <div className="lg:w-60% text-center lg:text-left flex flex-col items-center lg:items-start lg:w-4/5 animate-[slideYTwo_1s_ease_1]">
          {donateDespArr.map(
            (item, index) =>
              index === indexNum && (
                <div>
                  <picture className="">
                    <img
                      src={item.imgSrc}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </picture>
                  <h2 className="font-mont text-2xl text-secondary font-bold pb-3 mb-6 mt-5 border-b-2">
                    {item.title}
                  </h2>

                  <p className="font-rale text-base text-secondary mt-2 mb-5">
                    {item.desp}
                  </p>
                </div>
              )
          )}

          <a href="#otherDonate">
            <button
              className={`uppercase text-white bg-[#FF6400] text-xs font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center`}
            >
              Other Ways to donate
            </button>
          </a>
          <p className="font-rale text-base text-secondary mt-4 mb-1">
            {" "}
            Having problems making a donation?
          </p>
          <p className="font-rale text-base text-secondary mt-1 mb-2">
            {" "}
            Email us at donate@zindagitrust.org or call at 111-111-439
          </p>

          <p className="font-rale text-xs leading-5 italic text-secondary mt-8 mb-5">
            {" "}
            Donations to Zindagi Trust are tax-exempt in both Pakistan and in
            the United States. <br /> <strong> In USA:</strong> Zindagi Inc. is
            a 501 (3) (c) tax-exempt organization (No. 20-1287010), which grants
            funds that benefit Zindagi Trust, its schools and other charitable
            educational projects. In compliance with the IRS regulations, the
            Board of Trustees of Zindagi Inc. maintain complete discretion over
            allocation of gifts/funds to Zindagi Trust. <br />
            <strong> In Pakistan:</strong> Tax Exemption # CIT/COS.V/2007/499 &
            NTN Certificate # 1735920-1.
          </p>
        </div>
      </div>
      <FeatureDonation />
      <OtherDonate id={"otherDonate"} />

      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-10 gap-y-20 justify-between ">
        <div className="lg:w-1/2">
          {" "}
          <AchievementHeader achiveHeader="HUMARAY SCHOOLS, HUMARA MUSTAQBIL" />
          <iframe
            className="lg:h-[40vw] w-full mt-12 m-auto"
            // width="100%"
            // height="558"
            src="https://www.youtube.com/embed/gQGjR6GBk-s"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="lg:w-1/2">
          {" "}
          <AchievementHeader achiveHeader="SHARIAH COMPLIANCE CERTIFICATE" />
          <picture className="">
            <img
              src="/assets/images/donate/cert.jpg"
              className="mt-12 m-auto w-2/3 lg:w-full lg:h-[40vw]"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
