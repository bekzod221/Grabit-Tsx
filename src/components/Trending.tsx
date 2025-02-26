import { useQuery } from "@tanstack/react-query"
import img1 from "../assets/trend.jpg"
import axios from "axios"
import { productTypes } from "../types"

const Trending = () => {
  const {data} = useQuery({
      queryKey: ['products'],
      queryFn: ()=>{
        return axios.get(`https://dummyjson.com/products/category/groceries?limit=3`)
                    .then(res => res.data)
      }
    }
  )
  console.log(data);
  return (
    <div className="py-16">
        <div className="max-w-[1500px] mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 max-[931px]:grid-cols-2 max-[453px]:grid-cols-1">
                <div className="h-[421px] bg-center bg-cover bg-no-repeat p-6 rounded flex flex-col gap-6" style={{backgroundImage: `url(${img1})`}}>
                    <h1 className="text-2xl text-[#444444] font-semibold">Our Top Most Products <br /> Check It Now</h1>
                    <button className="w-[100px] h-[31px] bg-[#5CAF90] rounded text-white">Shop Now</button>
                </div>
                <div className="h-[421px] flex flex-col gap-2">
                  <h2 className="font-[700] text-[#4B5966] text-3xl">Trending <span className="text-green-600">Items</span></h2>
                  {data?.products?.map((item: productTypes)=>(
                    <div key={item.id} className="w-full border-[#EEEEEE] border rounded h-full">
                      <div className="flex">
                        <div className="flex items-center justify-center"><img src={item.thumbnail} className="h-[100px] object-contain"/></div>
                        <div className="flex flex-col p-4 justify-center">
                          <h2 className="text-[#777777] text-[14px]">{item.title}</h2>
                          <p className="text-[#777777] text-[12px]">{item.category}</p>
                          <p className="text-[#4B5966] font-bold text-[14px]">${item.price} <span className="text-[#777777] text-[12px] font-[400]"><del>${Math.floor(item.price * 2)}</del></span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-[421px] flex flex-col gap-2">
                  <h2 className="font-[700] text-[#4B5966] text-3xl">Top <span className="text-green-600">Rated</span></h2>
                  {data?.products?.map((item: productTypes)=>(
                    <div key={item.id} className="w-full border-[#EEEEEE] border rounded h-full">
                      <div className="flex">
                        <div className="flex items-center justify-center"><img src={item.thumbnail} className="h-[100px] object-contain"/></div>
                        <div className="flex flex-col p-4 justify-center">
                          <h2 className="text-[#777777] text-[14px]">{item.title}</h2>
                          <p className="text-[#777777] text-[12px]">{item.category}</p>
                          <p className="text-[#4B5966] font-bold text-[14px]">${item.price} <span className="text-[#777777] text-[12px] font-[400]"><del>${Math.floor(item.price * 2)}</del></span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-[421px] flex flex-col gap-2">
                  <h2 className="font-[700] text-[#4B5966] text-3xl">Top <span className="text-green-600">Selling</span></h2>
                  {data?.products?.map((item: productTypes)=>(
                    <div key={item.id} className="w-full border-[#EEEEEE] border rounded h-full">
                      <div className="flex">
                        <div className="flex items-center justify-center"><img src={item.thumbnail} className="h-[100px] object-contain"/></div>
                        <div className="flex flex-col p-4 justify-center">
                          <h2 className="text-[#777777] text-[14px]">{item.title}</h2>
                          <p className="text-[#777777] text-[12px]">{item.category}</p>
                          <p className="text-[#4B5966] font-bold text-[14px]">${item.price} <span className="text-[#777777] text-[12px] font-[400]"><del>${Math.floor(item.price * 2)}</del></span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending