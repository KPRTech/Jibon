import React from 'react';
import ReactBeforeSliderComponent from "react-before-after-slider-component";

const KhtoonBeforeAfterSlider = () => {
    const img1 = {
        imageUrl: "assets/images/khatoone pakistan/pafter1.jpg",
      };
      const img2 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore1.jpg",
      };
    const img3 = {
        imageUrl: "assets/images/khatoone pakistan/pafter2.jpg",
      };
      const img4 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore2.jpg",
      };
    const img5 = {
        imageUrl: "assets/images/khatoone pakistan/pafter3.jpg",
      };
      const img6 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore3.jpg",
      };
    const img7 = {
        imageUrl: "assets/images/khatoone pakistan/pafter4.jpg",
      };
      const img8 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore4.jpg",
      };
    const img9 = {
        imageUrl: "assets/images/khatoone pakistan/pafter5.jpg",
      };
      const img10 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore5.jpg",
      };
    const img11 = {
        imageUrl: "assets/images/khatoone pakistan/pafter6.jpg",
      };
      const img12 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore6.jpg",
      };
    
      const delimiterIconStyles = {
        width: "40px",
        height: "40px",
        backgroundSize: "24px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "none",
        backgroundColor: "#fff",
        backgroundImage: "url('assets/images/beforeAfter slider/sliderIcon.png')",
      };
    return (
       <div className='lg:mx-24 mx-4 py-12'>
         {/* <div className="lg:w-[55%] md:w-[60%] m-auto lg:p-4 md:p-3 p-2"> */}
        <div className='grid grid-rows-1 gap-10 lg:grid-cols-2 grid-cols-1'>
        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img1}
          secondImage={img2}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Primary Block Front View</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img3}
          secondImage={img4}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Primary Block Side View</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img5}
          secondImage={img6}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Outside Primary Block</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img7}
          secondImage={img8}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Primary Block Corridor</h3>
        </div>
        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img9}
          secondImage={img10}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Secondary Block Entrance</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img11}
          secondImage={img12}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Stairs Enabling Student Learning</h3>
        </div>

        </div>
       </div>
    );
};

export default KhtoonBeforeAfterSlider;