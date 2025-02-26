import logo from "../assets/logo.png.png"
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { MdWifiCalling1 } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div>
        <div className="bg-[#F8F8FB]">
            <div className="max-w-[1500px] px-4 mx-auto text-[13px] max-[890px]:text-[10px] max-[697px]:text-[8px] max-[395px]:text-[6px] text-[#777777]">
                <div className="flex justify-between h-[40px] items-center">
                    <div className="flex gap-4">
                        <p className="flex items-center gap-1"><span className="text-[18px]"><MdWifiCalling1/></span> +91 987 654 3210</p>
                        <p className="flex items-center gap-1"><span className="text-[18px]"><FaWhatsapp/></span> +91 987 654 3210</p>
                    </div>
                    <div className="max-[500px]:hidden"><h1>World`s Fastest Online Shopping Destination</h1></div>
                    <div>
                        <ul className="flex gap-4">
                            <li className="cursor-pointer">Help?</li>
                            <li className="cursor-pointer">Track Order?</li>
                            <li className="cursor-pointer">English</li>
                            <li className="cursor-pointer">Dollar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-[1500px] px-4 mx-auto">
            <div className="flex justify-between items-center h-[70px]">
                <div className="w-[200px]">
                    <img src={logo} className="object-contain h-[40px] max-[730px]:h-[30px]"/>
                </div>
                <div className="w-full flex items-center justify-center max-[730px]:hidden">
                    <input type="text" placeholder="Search Products..." className="w-[70%] border border-[#b8b8b8b6] rounded-[10px] focus:outline-green-100 duration-300 py-3 px-4"/>
                </div>
                <div className="flex  items-center">
                    <div className="flex items-center w-[90px] gap-2 max-[543px]:hidden">
                        <div className="flex items-center justify-center text-3xl max-[730px]:text-[24px]"><IoPersonOutline/></div>
                        <div className="flex flex-col text-[12px] max-[730px]:text-[9px]">
                            <h2 className="text-[#0000008f]">Account</h2>
                            <h1 className="font-semibold">LOGIN</h1>
                        </div>
                    </div>
                    <div className="flex items-center w-[90px] gap-2 max-[543px]:hidden">
                        <div className="flex items-center justify-center text-3xl max-[730px]:text-[24px]"><CiHeart /></div>
                        <div className="flex flex-col text-[12px] max-[730px]:text-[9px]">
                            <h2 className="text-[#0000008f]">Wishlist</h2>
                            <h1 className="font-semibold">3-ITEMS</h1>
                        </div>
                    </div>
                    <div className="flex items-center w-[90px] gap-2">
                        <div className="flex items-center justify-center text-3xl max-[730px]:text-[24px]"><PiHandbagSimpleLight /></div>
                        <div className="flex flex-col text-[12px] max-[730px]:text-[9px]">
                            <h2 className="text-[#0000008f]">Cart</h2>
                            <h1 className="font-semibold">3-ITEMS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-b border-t border-[#9e9e9e7c]">
            <div className="max-w-[1500px] h-[55px] mx-auto">
                <div className="flex justify-between items-center h-full">
                    <div>
                        <button className="bg-[#5CAF90] text-white rounded px-10 py-3 flex items-center gap-2 max-[946px]:hidden"><span className="text-[20px]"><BiCategory/></span>All Categories<span className="text-2xl"><MdKeyboardArrowDown/></span></button>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4">
                            <li className="flex items-center text-[#4B5966] cursor-pointer">Home <span className="text-[20px]"><MdKeyboardArrowDown/></span></li>
                            <li className="flex items-center text-[#4B5966] cursor-pointer">Categories <span className="text-[20px]"><MdKeyboardArrowDown/></span></li>
                            <li className="flex items-center text-[#4B5966] cursor-pointer">Products <span className="text-[20px]"><MdKeyboardArrowDown/></span></li>
                            <li className="flex items-center text-[#4B5966] cursor-pointer max-[503px]:hidden">Blog <span className="text-[20px]"><MdKeyboardArrowDown/></span></li>
                            <li className="flex items-center text-[#4B5966] cursor-pointer max-[503px]:hidden">Pages <span className="text-[20px]"><MdKeyboardArrowDown/></span></li>
                            <li className="flex items-center text-[#4B5966] cursor-pointer max-[503px]:hidden">Offers <span className="text-[20px]"><MdKeyboardArrowDown/></span></li>
                        </ul>
                    </div>
                    <div>
                        <button className="bg-[#5CAF90] text-white rounded px-4 py-3 flex items-center gap-2 max-[946px]:hidden"><span className="text-[20px]"><IoLocationOutline/></span>New York<span className="text-2xl"><MdKeyboardArrowDown/></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header