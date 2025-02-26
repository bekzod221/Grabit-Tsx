import img from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div>
        <div className="max-w-[1500px] mx-auto py-5">
            <div className="h-[600px] rounded-2xl" style={{ backgroundImage: `url(${img})`}}>
                <div className="flex flex-col gap-6 h-full justify-center max-[585px]:px-8 px-20 max-[955px]:items-center max-[955px]:text-center">
                    <h2 className="font-semibold text-[#5CAF90] text-[20px] max-[585px]:text-[16px]">Starting at $ 29.99</h2>
                    <h1 className="text-[55px] text-[#4B5966] font-bold max-[585px]:text-[35px]">Explore fresh & <br /> juicy fruits</h1>
                    <button className="bg-[#4B5966] w-[125px] h-[42px] rounded text-white">Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner