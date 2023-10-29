import { useState } from "react";
import { nav } from "../Data/data";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ()=>{
    const [navv, setNav] = useState(true);
    const handleNav = ()=>{
        setNav(!navv)
    }
    return(
        <div className="text-white w-full flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">NAGAPAVAN.</h1>
            <ul className="hidden md:flex">
                {nav.map((item)=>{
                    const {id,name,href} = item
                    return <li className="p-4" key={id}><a href={href}>{name}</a></li>
                })}
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!navv?<AiOutlineClose size={20}  />:<AiOutlineMenu size={20} />}
            </div>
            <div className={!navv?"fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500":"fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-8 mx-5">NAGAPAVAN.</h1>
                <ul className="p-4 uppercase">
                    {nav.map((item)=>{
                        const {id,name,href} = item
                        return <li className="p-4 border-b border-gray-600" key={id}><a href={href}>{name}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;