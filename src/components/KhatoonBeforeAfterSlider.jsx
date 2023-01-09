import React from 'react';
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import './KhatoonBeforeAfterSlider.css'

const KhatoonBeforeAfterSlider = () => {
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
    const img13 = {
        imageUrl: "assets/images/khatoone pakistan/pafter7.jpg",
      };
      const img14 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore7.jpg",
      };
    const img15 = {
        imageUrl: "assets/images/khatoone pakistan/pafter8.jpg",
      };
      const img16 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore8.jpg",
      };
    
    const img17 = {
        imageUrl: "assets/images/khatoone pakistan/pafter9.jpg",
      };
      const img18 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore9.jpg",
      };
    
    const img19 = {
        imageUrl: "assets/images/khatoone pakistan/pafter10.jpg",
      };
      const img20 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore10.jpg",
      };
    const img21 = {
        imageUrl: "assets/images/khatoone pakistan/pafter11.jpg",
      };
      const img22 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore11.jpg",
      };
    const img23 = {
        imageUrl: "assets/images/khatoone pakistan/pafter12.jpg",
      };
      const img24 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore12.jpg",
      };
    
    const img25 = {
        imageUrl: "assets/images/khatoone pakistan/pafter13.jpg",
      };
      const img26 = {
        imageUrl: "assets/images/khatoone pakistan/pbefore13.jpg",
      };
    
    const img27 = {
        imageUrl: "assets/images/khatoone pakistan/pafter14.jpg",
      };
      const img28= {
        imageUrl: "assets/images/khatoone pakistan/pbefore14.jpg",
      };
    const img29 = {
        imageUrl: "assets/images/khatoone pakistan/pafter15.jpg",
      };
      const img30= {
        imageUrl: "assets/images/khatoone pakistan/pbefore15.jpg",
      };
    const img31 = {
        imageUrl: "assets/images/khatoone pakistan/pafter16.jpg",
      };
      const img32= {
        imageUrl: "assets/images/khatoone pakistan/pbefore16.jpg",
      };
    const img33 = {
        imageUrl: "assets/images/khatoone pakistan/pafter17.jpg",
      };
      const img34= {
        imageUrl: "assets/images/khatoone pakistan/pbefore17.jpg",
      };
    
      const delimiterIconStyles = {
        width: "40px",
        height: "40px",
        backgroundSize: "24px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "none",
        backgroundColor: "#FF6400",
        backgroundImage: "url('assets/images/beforeAfter slider/sliderIcon.png')",
      };
    return (
       <div className='mx-auto  w-[60%]  py-12'>
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

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img13}
          secondImage={img14}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Walls used for interactive learning</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img15}
          secondImage={img16}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Bright Classrooms</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img17}
          secondImage={img18}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Chalk Boards in Classrooms</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img19}
          secondImage={img20}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Under-utilized Hall converted to Art Room</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img21}
          secondImage={img22}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Greenery Outside Art Room</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img23}
          secondImage={img24}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Safe Space outside Art Room</h3>
        </div>
        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img25}
          secondImage={img26}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Secure Wiring</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img27}
          secondImage={img28}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Washrooms / Toilets (A)</h3>
        </div>
        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img29}
          secondImage={img30}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Washrooms / Toilets (B)</h3>
        </div>

        <div className="">
        <ReactBeforeSliderComponent
          firstImage={img31}
          secondImage={img32}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Administration Block</h3>
        </div>

        <div className="khatun-slider">
        <ReactBeforeSliderComponent
          firstImage={img33}
          secondImage={img34}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
        <h3 className='text-center p-2 text-lg'>Back Side of School</h3>
        </div>
       
        </div>
       </div>
    );
};

export default KhatoonBeforeAfterSlider;