import React from 'react';
import Image from 'next/image';
import arrow from '../../../public/assets/Arrow.png'
import grad from '../../../public/assets/Gradient.png'
import img from '../../../public/assets/mn.png'
import google from '../../../public/assets/Google.png'
import slack from '../../../public/assets/Slack.png'
import Truspilot from '../../../public/assets/Trustpilot.png'
import cnn from '../../../public/assets/CNN.png'
import cluth from '../../../public/assets/Clutch.png'


function Hero() {
    return (
        <div className='pt-4 lg:pt-10'>
            <div className='px-[20px] lg:px-[350px]'>
                <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px] '>Start monitoring your website like a pro</h1>
                <p className='lg:text-[18px] lg:leading-7 text-center font-medium pt-6 text-[#36485C]'>
                    Get a birds eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!x
                </p>

                <div className='flex w-full pt-8 gap-x-6 justify-center'>
                    <button className='bg-[#4328EB] px-8 py-4 w-1/2 rounded-[4px] text-white lg:w-fit'>Try for free</button>
                    <button className='w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit'>view Pricing  <span><Image src={arrow} alt='arrow'></Image>  </span>  </button>


                </div>

            </div>

            <div className='h-full w-full lg:mt-48 mt-5 relative flex justify-center'>
                <Image src={grad} alt='grad' className='min-h-[500px] w-full object-cover lg:h-auto' />

                <div className='absolute  bottom-5 flex w-full flex-col items-center'>
                    <Image src={img} alt='image' className='-ml-10 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]' />

                    <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-center lg:px-20'>
                        <p className='text-[#ffffff] leading-6 lg:text-[18px]'>Trusted by these companies</p>
                   

                    <div className='grid grid-cols-2 lg:grid-cols-5 items-center justify-center justify-items-center px-[20px] align-middle'>

                        <Image  src={google} alt=''/>
                        <Image  src={slack} alt=''/>
                        <Image  src={Truspilot} alt=''/>
                        <Image  src={cnn} alt=''/>
                        <Image  src={cluth} alt=''/>

                    </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Hero;