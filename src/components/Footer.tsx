import logo from "../assets/logo.png.png"
import android from "../assets/android.png.png"
import apple from "../assets/apple.png.png"
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import pay from "../assets/payment.png.png"

const Footer = () => {
  return (
    <>
    <div className="mt-20 border-t border-[#EEEEEE] px-4">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-5 h-full gap-12 max-[1408px]:grid-cols-4 max-[1144px]:grid-cols-3 max-[844px]:grid-cols-2 max-[558px]:grid-cols-1 py-10">
          <div className="flex flex-col gap-6 justify-center items-start">
            <img src={logo} className="h-[40px] object-contain"/>
            <h2 className="text-[14px] text-[#777777]">Grabit is the biggest market of grocery products. Get your daily needs from our store.</h2>
            <div className="flex gap-2">
              <img src={android} className="h-[42px] object-contain"/>
              <img src={apple} className="h-[42px] object-contain"/>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="border-b border-[#EEEEEE] w-full">
              <h2 className="text-[#4B5966] text-[18px] font-semibold py-2">Category</h2>
            </div>
            <div className="flex flex-col text-[#777777] text-[14px] gap-2">
              <a>About us</a>
              <a>Delivery</a>
              <a>Legal Notice</a>
              <a>Terms & conditions</a>
              <a>Secure payment</a>
              <a>Contact us</a>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="border-b border-[#EEEEEE] w-full">
              <h2 className="text-[#4B5966] text-[18px] font-semibold py-2">Company</h2>
            </div>
            <div className="flex flex-col text-[#777777] text-[14px] gap-2">
              <a>Sign In</a>
              <a>View Cart</a>
              <a>Return Policy</a>
              <a>Become a Vendor</a>
              <a>Affiliate Program</a>
              <a>Payments</a>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="border-b border-[#EEEEEE] w-full">
              <h2 className="text-[#4B5966] text-[18px] font-semibold py-2">Account</h2>
            </div>
            <div className="flex flex-col text-[#777777] text-[14px] gap-2">
              <a>Dried Fruit</a>
              <a>Cookies</a>
              <a>Foods</a>
              <a>Fresh Fruit</a>
              <a>Tuber root</a>
              <a>Vegetables</a>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-14">
            <div className="border-b border-[#EEEEEE] w-full">
              <h2 className="text-[#4B5966] text-[18px] font-semibold py-2">Contact</h2>
            </div>
            <div className="flex flex-col text-[#777777] text-[14px] gap-4">
              <p className="flex text-[#777777] text-[14px]"><span className="text-[20px] text-green-600"><IoLocationOutline/></span> 2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
              <p className="flex text-[#777777] text-[14px]"><span className="text-[20px] text-green-600"><FaWhatsapp/></span> +00 9876543210</p>
              <p className="flex text-[#777777] text-[14px]"><span className="text-[20px] text-green-600"><MdOutlineMailOutline/></span> example@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#F8F8FB] px-2">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-between items-center h-[51px] max-[670px]:justify-center text-center">
          <div><p className="text-[#777777] text-[13px]">Copyright © <span className="text-green-600">Grabit</span> all rights reserved. Powered by Grabit.</p></div>
          <div><img src={pay} className="h-[30px] object-contain max-[670px]:hidden"/></div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Footer