import React, { useState } from 'react';

const AisaPakistanPage = () => {
    const [selected1, setSelected1] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [hoverText, setHoverText] = useState("")
    const handleSelect1 = () => {
        setSelected1(true)
        setSelected2(false)
        setSelected3(false)
        const value = 1000
        console.log(value);
    }
    const handleSelect2 = () => {
        setSelected1(false)
        setSelected2(true)
        setSelected3(false)
        const value = 2000
        console.log(value);
    }
    const handleSelect3 = () => {
        setSelected1(false)
        setSelected2(false)
        setSelected3(true)
    }
    const handleHover1 = () => {
        const text = "$10 holistic education, nutritious support and teacher training."
        setHoverText(text)
    }
    const handleHover2 = () => {
        const text = "$50 holistic education, nutritious support and teacher training."
        setHoverText(text)
    }
    const handleHover3 = () => {
        const text = "Donate to transform lives by reforming government schools."
        setHoverText(text)
    }
    return (
        <div>
            <div>
                <div className='mt-20 lg:mt-0 lg:h-[600px] relative'
                    style={{
                        background: 'url("assets/images/asiapakistan/ap-bg.png") top',
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <div className='pb-20 lg:pb-0 lg:h-[600px]'>
                        <div className='relative z-20'>
                            <div className='text-center pt-[90px] lg:pt-[150px] pb-8'>
                                <div className='text-2xl lg:text-[30px] text-[rgb(123,255,152)]/90 leading-7 font-mont font-medium'><strong>#</strong>Aisa<strong>Pakistan</strong></div>
                                <p className='font-play italic text-white'>Maximise your contribution by donating this Holiday Season</p>
                            </div>
                            <div className='w-3/4 mx-auto'>
                                <div className='text-white font-mont'>
                                    <p className='flex items-center font-bold'>Invest in <p className='mx-1 text-base lg:text-[20px] text-[rgb(123,255,152)]/90 leading-7 font-medium'><strong>#</strong>Aisa<strong>Pakistan</strong></p><em>Jo ho</em></p>
                                    <p className='font-bold -mt-2'>progressive, tolerant and prosperous</p>
                                    <p>{hoverText === '' ? <p>Donate to bring holistic education to our government schools</p> : <p>{hoverText}</p>}</p>
                                </div>
                                <div className='flex items-center gap-1 text-[17px] mt-6'>
                                    <span className={selected1 === true ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white` : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-300 transition-all ease-out`} onMouseOver={handleHover1} onClick={handleSelect1}>$10</span>
                                    <span className={selected2 === true ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white` : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-300 transition-all ease-out`} onMouseOver={handleHover2} onClick={handleSelect2}>$50</span>
                                    <span className={selected3 === true ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white` : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-300 transition-all ease-out`} onMouseOver={handleHover3} onClick={handleSelect3}>Other</span>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        placeholder="Amount($)"
                                        className="p-2 w-[275px] text-black font-mont mt-3 lg:mt-0"
                                        id="input"
                                    />
                                    <span className="text-lg ml-3 mt-2 text-white font-mont"> USD</span>
                                    <button className="linear duration-300 text-white bg-orange-500 px-5 py-2 rounded text-sm ml-5 hover:bg-orange-700 mt-2 font-mont">
                                        Donate Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-14 font-mont'>
                <h2 className='text-[25px] font-bold text-center'>Mera Khwab, #<span className='font-normal'>Aisa</span>Pakistan…</h2>
                <p className='font-rale text-center text-[#333]'>A progressive, tolerant and prosperous Pakistan</p>
            </div>
        </div>
    );
}

export default AisaPakistanPage;
