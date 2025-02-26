import gradient from "../assets/gradients/brown.png"
import { FaApple } from "react-icons/fa";
import { GiSlicedBread } from "react-icons/gi";
import { GiCorn } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { RiDrinks2Fill } from "react-icons/ri";


const Category = () => {
  return (
    <div>
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-6 max-[1472px]:grid-cols-3 gap-6 max-[495px]:grid-cols-2 px-2">
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full"  style={{ backgroundImage: `url(${gradient})`}}>
                    <div className="bg-white h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><FaApple/></div>
                        <h2 className="font-bold text-[#4B5966]">Fruits</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">320 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full"  style={{ backgroundImage: `url(${gradient})`}}>
                    <div className="bg-white h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><GiSlicedBread/></div>
                        <h2 className="font-bold text-[#4B5966]">Bakery</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">65 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full"  style={{ backgroundImage: `url(${gradient})`}}>
                    <div className="bg-white h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><GiCorn/></div>
                        <h2 className="font-bold text-[#4B5966]">Vegetables</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">546 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full"  style={{ backgroundImage: `url(${gradient})`}}>
                    <div className="bg-white h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><GiMilkCarton/></div>
                        <h2 className="font-bold text-[#4B5966]">Dairy & Milk</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">48 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full"  style={{ backgroundImage: `url(${gradient})`}}>
                    <div className="bg-white h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><CiFries/></div>
                        <h2 className="font-bold text-[#4B5966]">Snack & Spice</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">59 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full"  style={{ backgroundImage: `url(${gradient})`}}>
                    <div className="bg-white h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><RiDrinks2Fill/></div>
                        <h2 className="font-bold text-[#4B5966]">Juice & Drinks</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">845 items</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category