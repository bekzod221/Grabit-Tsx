import img1 from "../assets/blog1.png"
import img2 from "../assets/blog2.png"
import img3 from "../assets/blog3.png"
import img4 from "../assets/blog4.png"
import img5 from "../assets/blog5.png"

const Blog = () => {
  return (
    <>
    <div className="py-10 mt-2.5 px-2">
        <div className="max-w-[1500px] mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[25px]">Latest <span className="text-green-500">Blog</span></h1>
                    <p className="text-[14px] text-[#777777] font-[300]">We tackle interesting topics every day in 2023.</p>
                </div>
                <div>
                    <h2 className="text-[#777777]">All Blogs</h2>
                </div>
            </div>
        </div>
    </div>
    
    <div className="px-2">
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-5 gap-4 max-[1037px]:grid-cols-3 max-[925px]:grid-cols-2 max-[391px]:grid-cols-1">
                <div className="flex flex-col">
                    <img src={img1} className="rounded-2xl h-[220px] object-cover mb-2"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] text-[#999999]">June 30,2022 - Organic</p>
                        <h2 className="text-[#4B5966] text-[17px]">Marketing Guide: 5 Steps to Success to way.</h2>
                        <a className="text-[13px] text-[#4B5966] cursor-pointer">Read More</a>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <img src={img2} className="rounded-2xl h-[220px] object-cover mb-2"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] text-[#999999]">June 30,2022 - Organic</p>
                        <h2 className="text-[#4B5966] text-[17px]">Marketing Guide: 5 Steps to Success to way.</h2>
                        <a className="text-[13px] text-[#4B5966] cursor-pointer">Read More</a>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <img src={img3} className="rounded-2xl h-[220px] object-cover mb-2"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] text-[#999999]">June 30,2022 - Organic</p>
                        <h2 className="text-[#4B5966] text-[17px]">Marketing Guide: 5 Steps to Success to way.</h2>
                        <a className="text-[13px] text-[#4B5966] cursor-pointer">Read More</a>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <img src={img4} className="rounded-2xl h-[220px] object-cover mb-2"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] text-[#999999]">June 30,2022 - Organic</p>
                        <h2 className="text-[#4B5966] text-[17px]">Marketing Guide: 5 Steps to Success to way.</h2>
                        <a className="text-[13px] text-[#4B5966] cursor-pointer">Read More</a>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <img src={img5} className="rounded-2xl h-[220px] object-cover mb-2"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] text-[#999999]">June 30,2022 - Organic</p>
                        <h2 className="text-[#4B5966] text-[17px]">Marketing Guide: 5 Steps to Success to way.</h2>
                        <a className="text-[13px] text-[#4B5966] cursor-pointer">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog