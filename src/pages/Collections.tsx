import img from "../assets/collection.jpeg"
import { FaTshirt } from "react-icons/fa";
import { TiWatch } from "react-icons/ti";
import { GiLargeDress } from "react-icons/gi";
import Catalog from "../components/Catalog";
import Breadcrumb from "../components/Breadcrumb";
import Ads from "../components/Ads";
import img1 from "../assets/snack1.jpeg"
import img2 from "../assets/snack2.jpeg"
import img3 from "../assets/snack3.jpeg"
import Features from "../components/Features";
import Trending from "../components/Trending";
import Blog from "../components/Blog";

const Collections = () => {
  return (
    <>
    <div>
        <div className="max-w-[1500px] mx-auto py-5">
            <div className="h-[600px] rounded-2xl bg-center bg-cover" style={{ backgroundImage: `url(${img})`}}>
                <div className="flex flex-col gap-6 h-full justify-center max-[585px]:px-8 px-20 max-[955px]:items-center max-[955px]:text-center">
                    <h2 className="font-semibold text-[#5CAF90] text-[20px] max-[585px]:text-[16px]">Starting at $ 29.99</h2>
                    <h1 className="text-[55px] text-white font-bold max-[585px]:text-[35px]">Explore glasses <br /> sale for Women's</h1>
                    <button className="bg-[#4B5966] w-[125px] h-[42px] rounded text-white">Shop Now</button>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-6 max-[1472px]:grid-cols-3 gap-6 max-[495px]:grid-cols-2 px-2">
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full">
                    <div className="bg-[#F7F7F7] h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><FaTshirt/></div>
                        <h2 className="font-bold text-[#4B5966]">Clothes</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">320 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full">
                    <div className="bg-[#F7F7F7] h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><TiWatch/></div>
                        <h2 className="font-bold text-[#4B5966]">Clothes</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">320 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full">
                    <div className="bg-[#F7F7F7] h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><GiLargeDress/></div>
                        <h2 className="font-bold text-[#4B5966]">Clothes</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">320 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full">
                    <div className="bg-[#F7F7F7] h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><FaTshirt/></div>
                        <h2 className="font-bold text-[#4B5966]">Clothes</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">320 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full">
                    <div className="bg-[#F7F7F7] h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><TiWatch/></div>
                        <h2 className="font-bold text-[#4B5966]">Clothes</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">320 items</p>
                    </div>
                </div>
                <div className="h-[170px] w-[246px] p-3 max-[1472px]:w-full">
                    <div className="bg-[#F7F7F7] h-full shadow-[0px_5px_15px_0px_#586E7D1A] flex flex-col items-center justify-center">
                        <div className="text-5xl text-green-500"><GiLargeDress/></div>
                        <h2 className="font-bold text-[#4B5966]">Clothes</h2>
                        <p className="text-[13px] text-[#777777] font-[300]">320 items</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="py-7">
        <Breadcrumb/>
        <Catalog skip={4} limit={5}/>
    </div>
    <Ads/>
    <div className="py-7">
    <div className="py-10 mt-2.5 px-2">
        <div className="max-w-[1500px] mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[25px]">New <span className="text-green-500">Arrivals</span></h1>
                    <p className="text-[14px] text-[#777777] font-[300]">Shop online for new arrivals and get free shipping!</p>
                </div>
                <div>
                    <ul className="flex gap-4 max-[655px]:hidden">
                        <li className="text-[#5CAF90] text-[14px] font-[500] cursor-pointer">ALL</li>
                        <li className="text-[##777777] text-[14px] font-[400] cursor-pointer">SNACK & SPICES</li>
                        <li className="text-[##777777] text-[14px] font-[400] cursor-pointer">FRUITS</li>
                        <li className="text-[##777777] text-[14px] font-[400] cursor-pointer">VEGETABLES</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        <Catalog category="groceries" skip={10} limit={10}/>
    </div>

    <div className="py-24">
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-3 gap-4 px-4 max-[910px]:grid-cols-1">
                <div className="bg-left bg-cover bg-no-repeat h-[388px] flex flex-col gap-2 items-end text-center justify-center p-12" style={{backgroundImage: `url(${img1})`}}>
                    <div className="flex text-left flex-col gap-2">
                        <h1 className="text-white font-[700] text-[34px] ">Women's <br />Collection</h1>
                        <button className="text-white bg-[#5CAF90] w-[100px] h-[30px] rounded">Shop Now</button>
                    </div>
                </div>
                <div className="bg-left bg-cover bg-no-repeat h-[388px] flex flex-col gap-2 items-end text-center justify-center p-12" style={{backgroundImage: `url(${img2})`}}>
                    <div className="flex text-left flex-col gap-2">
                        <h1 className="text-white font-[700] text-[34px] ">Kid's <br />Collection</h1>
                        <button className="text-white bg-[#5CAF90] w-[100px] h-[30px] rounded">Shop Now</button>ß
                    </div>
                </div>
                <div className="bg-left bg-cover bg-no-repeat h-[388px] flex flex-col gap-2 items-end text-center justify-center p-12" style={{backgroundImage: `url(${img3})`}}>
                    <div className="flex text-left flex-col gap-2">
                        <h1 className="text-white font-[700] text-[34px] ">Men's <br />Collection</h1>
                        <button className="text-white bg-[#5CAF90] w-[100px] h-[30px] rounded">Shop Now</button>ß
                    </div>
                </div>
            </div>
        </div>ß
    </div>

    <Features/>
    <Trending/>
    <Blog/>
    </>
  )
}

export default Collections
