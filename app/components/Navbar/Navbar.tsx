import Image from "next/image";
import logo from '../../../public/assets/Logo.png'
import user from '../../../public/assets/Subtract.png'
import menu from '../../../public/assets/Menu.png'



const navLinks = [
    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Enterprise' },
    { name: 'Careers' },
]




export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center">
                <Image src={logo} alt="logo"></Image>


                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item, index) => {
                        return <p key={index} className="text-=[#36485C]   font-medium cursor-pointer">{item.name}</p>;
                    })}


                </div>

            </div>

            <div className="flex gap-5">
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an Account</p>

                <div className="flex items-center gap-x-2">
                    <Image src={user} alt="user"></Image>
                    <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
                </div>
                <Image src={menu} alt="menu" className="lg:hidden"></Image>
            </div>

        </nav>
    )
}