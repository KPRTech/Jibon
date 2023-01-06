import React, { useState } from 'react';

const ScrollToTop = () => {

    const [scrollTop, setScrollTop] = useState(false)

    const toggleVisible = () => {
        const scrollValue = document.documentElement.scrollTop
        if(scrollValue > 200) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    }

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
    });
  };

    window.addEventListener('scroll', toggleVisible)

    return (
        <div 
            onClick={scrollToTop}  
            className={`${scrollTop ? 'visible' : 'invisible'} fixed bottom-5 left-5 border px-5 py-2 rounded-lg bg-black cursor-pointer opacity-30 hover:opacity-100 transition-opacity`}
        >
            <span className='text-3xl font-bold text-white'>^</span>
        </div>
    );
}

export default ScrollToTop;
