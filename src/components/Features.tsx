import { PiTruck } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { CiDollar } from "react-icons/ci";



const Features = () => {
  return (
    <div>
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-4 gap-4 text-center max-[906px]:grid-cols-2 max-[472px]:grid-cols-1 px-4">
                <div className="h-[200px] border border-[#EEEEEE] flex flex-col gap-2 rounded justify-center items-center">
                    <div className="text-[#5CAF90] text-6xl"><PiTruck/></div>
                    <h2>Free Shipping</h2>
                    <p className="text-[#777777] text-[14px] ">Free shipping on all US order <br /> or orderabove $200</p>
                </div>
                <div className="h-[200px] border border-[#EEEEEE] flex flex-col gap-2 rounded justify-center items-center">
                    <div className="text-[#5CAF90] text-6xl"><FaHandHoldingMedical/></div>
                    <h2>24X7 Support</h2>
                    <p className="text-[#777777] text-[14px] ">Contact us 24 hours a day, 7 days a week</p>
                </div>
                <div className="h-[200px] border border-[#EEEEEE] flex flex-col gap-2 rounded justify-center items-center">
                    <div className="text-[#5CAF90] text-6xl"><LuBadgePercent/></div>
                    <h2>30 Days Return</h2>
                    <p className="text-[#777777] text-[14px] ">Simply return it within 30 days for an exchange</p>
                </div>
                <div className="h-[200px] border border-[#EEEEEE] flex flex-col gap-2 rounded justify-center items-center">
                    <div className="text-[#5CAF90] text-6xl"><CiDollar/></div>
                    <h2>Payment Secure</h2>
                    <p className="text-[#777777] text-[14px] ">Contact us 24 hours a day, 7 days a week</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features