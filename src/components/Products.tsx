import Catalog from "./Catalog"

const Products = () => {
  return (
    <>
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
    <Catalog limit={10} skip={4}/>
    </>
  )
}

export default Products