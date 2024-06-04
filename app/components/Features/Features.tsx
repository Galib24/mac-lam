import Image from "next/image";
import feature1 from '../../../public/assets/Image (3).png'
import feature2 from '../../../public/assets/check 1.png'
import feature3 from '../../../public/assets/Button.png'

export function Features() {
    return (
        <>

        {/* feature */}
            <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
                <div className="flex flex-col">
                    <Image src={feature1} alt="" className="hidden w-1/2 sm:block"></Image>
                    <div>
                        <h3 className="font-medium text-[#0085FF]">Sales Monitoring</h3>
                        <h1 className=" pt-[12px] text-xl font-medium text-[#172026]">Simplify your sales monitoring</h1>
                        <Image src={feature1} alt="" className="pt-[24px] sm:hidden"></Image>
                        <p className="text-sm py-[24px] text-[#36485C] leading-6 font-normal">
                            Stay on top of things and revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.
                        </p>

                        <ul className="flex flex-col gap-y-3">
                            <li className="flex items-center gap-x-2 text-[#36485C]">
                                <span><Image src={feature2} alt=""></Image></span>
                                Lorem ipsum dolor sit amet

                            </li>
                            <li className="flex items-center gap-x-2 text-[#36485C]">
                                <span><Image src={feature2} alt=""></Image></span>
                                Lorem ipsum dolor sit amet

                            </li>
                            <li className="flex items-center gap-x-2 text-[#36485C]">
                                <span><Image src={feature2} alt=""></Image></span>
                                Lorem ipsum dolor sit amet

                            </li>
                        </ul>
                        <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF]">
                            Learn more <span><Image src={feature3} alt=""></Image></span>
                        
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}