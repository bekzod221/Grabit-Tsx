import img from "../assets/banner2.jpg"

const Ads = () => {
  return (
    <div>
        <div className="max-w-[1500px] mx-auto py-5">
            <div className="h-[399px] bg-center bg-cover" style={{ backgroundImage: `url(${img})`}}>
                <div className="text-right max-[661px]:text-center h-full justify-center px-20 max-[661px]:px-8 flex flex-col gap-4">
                    <h1 className="text-[55px] max-[661px]:text-[35px] text-[#4B5966] max-[661px]:text-[#323d47] font-bold">Fresh Fruits <br />Healthy Products</h1>
                    <h2 className="text-[20px] text-[#777777] font-[300"><span className="text-[#5CAF90] font-semibold">30% off sale</span> Hurry up!!!</h2>
                    <p><button className="bg-[#5CAF90] duration-300 hover:scale-110 cursor-pointer hover:bg-green-300 w-[125px] h-[42px] rounded text-white">Shop Now</button></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ads