
const Breadcrumb = () => {
  return (
    <div className="py-10 mt-2.5 px-2">
        <div className="max-w-[1500px] mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[25px]">Day Of The <span className="text-green-500">Deal</span></h1>
                    <p className="text-[14px] text-[#777777] font-[300]">Don`t wait. The time will never be just right.</p>
                </div>
                <div>
                    <div className="bg-[#F8F8FB] p-2 rounded-[5px] max-[465px]:hidden"><p><span className="font-bold">25</span> Days <span className="font-bold">23 : 59 : 54</span></p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb