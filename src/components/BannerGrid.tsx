import img1 from "../assets/banner3.jpg"
import img2 from "../assets/banner4.jpg"

const BannerGrid = () => {
  return (
    <div className="py-24">
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-2 gap-4 px-4 max-[910px]:grid-cols-1">
                <div className="bg-center bg-cover bg-no-repeat h-[388px] flex flex-col gap-2 items-end text-center justify-center p-12" style={{backgroundImage: `url(${img1})`}}>
                    <div className="flex text-left flex-col gap-2">
                        <h1 className="text-[#4B5966] font-[700] text-[34px] ">Tasty Snack <br />& Fastfood</h1>
                        <p className="text-[#777777] text-base font-[400]">The Flavor Of <br /> Something special</p>
                        <button className="text-white bg-[#5CAF90] w-[100px] h-[30px] rounded">Shop Now</button>
                    </div>
                </div>
                <div className="bg-center bg-cover bg-no-repeat h-[388px] flex flex-col gap-2 items-end text-center justify-center p-12" style={{backgroundImage: `url(${img2})`}}>
                    <div className="flex text-left flex-col gap-2">
                        <h1 className="text-[#4B5966] font-[700] text-[34px] ">Tasty Snack <br />& Veggies</h1>
                        <p className="text-[#777777] text-base font-[400]">The Flavor Of <br /> Something special</p>
                        <button className="text-white bg-[#5CAF90] w-[100px] h-[30px] rounded">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerGrid