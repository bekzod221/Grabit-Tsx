// 'https://dummyjson.com/products?=limit=10'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Rating from '@mui/material/Rating';
import { productTypes } from "../types"; 

const Catalog: React.FC<{limit: number, skip: number}> = ({limit, skip}) => {
    const {data} = useQuery({
        queryKey: ['products', limit, skip],
        queryFn: ()=>{
            return axios.get(`https://dummyjson.com/products/category/groceries?limit=${limit}&skip=${skip}`)
                        .then(res => res.data)
        } 
    })
  return (
    <>
    <div>
        <div className="max-w-[1500px] mx-auto px-2">
            <div className="grid grid-cols-5 gap-4  max-[912px]:grid-cols-3  max-[548px]:grid-cols-2">
                {data?.products?.map((item: productTypes)=>(
                    <div key={item.id} className="flex flex-col border border-[#EEEEEE] rounded-[5px]">
                        <div className="">
                            <img src={item.thumbnail}/>
                        </div>
                        <div className="border border-[#EEEEEE] p-4">
                            <p className="text-[#999999] text-[13px]">{item.category}</p>
                            <h1 className="text-[#4B5966] text-[15px]">{item.title}</h1>
                            <Rating name="read-only" value={item.rating} readOnly size="small"/>
                            <div className="flex items-center gap-2">
                                <p className="text-[#4B5966] font-bold text-[14px]">${item.price}</p>
                                <p className="text-[#777777] text-[14px]"><del>${Math.floor(item.price / 2)}</del></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Catalog