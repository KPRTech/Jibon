import React from 'react';

const AisaPakistanPage = () => {
    return (
        <div>
            <div>
                <div className='mt-20 lg:mt-0 h-[200px] lg:h-[600px] relative'
                    style={{
                        background: 'url("assets/images/asiapakistan/ap-bg.png") top',
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <div className='h-[200px] lg:h-[600px]'>
                        <div className='relative z-20'>
                            <div className='text-center pt-[90px] lg:pt-[150px] pb-8'>
                                <div className='text-2xl lg:text-[30px] text-[rgb(123,255,152)]/90 leading-7 font-mont font-medium'><strong>#</strong>Aisa<strong>Pakistan</strong></div>
                                <p className='font-play italic text-white'>Maximise your contribution by donating this Holiday Season</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AisaPakistanPage;
