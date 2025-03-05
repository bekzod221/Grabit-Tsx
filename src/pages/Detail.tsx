import { Rating } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Catalog from "../components/Catalog"
import { useDispatch } from "react-redux"
import { addItem } from "../store/cartSlice"

const Detail = () => {
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [])
    const dispatch = useDispatch()
    const {id}= useParams()
    const [amount, setAmount] = useState<number>(1)
    const [isAdded, setIsAdded] = useState<boolean>(false)
    const {data, isLoading} = useQuery({
        queryKey: ['detail', id],
        queryFn: ()=>{
            return axios.get(`https://dummyjson.com/products/${id}`).then(res=> res.data)
        }
    })
    console.log(data);

    
    if(isLoading){
        return <div>Loading...</div>
    }
    const handleDec = ()=>{
        if(amount > 1){
            setAmount(p=> p - 1)
        }
    }
    const handleInc = ()=>{
        setAmount(p=> p + 1)
    }
    
    const addCart = ()=>{
        if(data){
            dispatch(addItem({id: data.id, quantity: amount, price: data.price, data}))
            setIsAdded(true)
        }
    }
  return (
    <div className="px-4 py-10">
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-2 gap-4 max-[676px]:grid-cols-1">
                <div className="flex flex-col border border-[#EEEEEE] rounded">
                    <div className="flex items-center justify-center">
                        <img src={data?.thumbnail} className="object-contain h-[601px] hover:scale-110 duration-300 cursor-pointer"/>
                    </div>
                    <div className="grid grid-cols-4 px-2 py-2">
                        <img src={data?.images[0]} className="object-contain h-[150px] hover:scale-110 duration-300 cursor-pointer border border-[#5CAF90] rounded"/>
                        <img src={data?.images[0]} className="object-contain h-[150px] hover:scale-110 duration-300 cursor-pointer"/>
                        <img src={data?.images[0]} className="object-contain h-[150px] hover:scale-110 duration-300 cursor-pointer"/>
                        <img src={data?.images[0]} className="object-contain h-[150px] hover:scale-110 duration-300 cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#4B5966] text-[22px] font-semibold">{data?.title}, {data?.shippingInformation}</h1>
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center"><Rating name="read-only" value={data?.rating} readOnly size="small"/></div>
                        <div className="flex items-center"><p className="text-[14px] text-[#999999]">| {data?.reviews.length} Ratings</p></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center"><h2 className="text-[#4B5966] font-bold text-2xl">${data?.price}</h2></div>
                        <div className="flex items-center"><p className="text-[18px] text-[#5CAF90] font-semibold">-{data?.price * 2}%</p></div>
                    </div>
                    <p className="text-[14px] text-[#999999]">{data?.description}</p>
                    <ul className="px-5 flex flex-col gap-3">
                        <li className="list-disc text-[#777777] font-bold">Closure: <span className="list-none font-[400]">Hook & Loop</span></li>
                        <li className="list-disc text-[#777777] font-bold">Sole: <span className="list-none font-[400]">Polyvinyl Chloride</span></li>
                        <li className="list-disc text-[#777777] font-bold">Width: <span className="list-none font-[400]">Medium</span></li>
                        <li className="list-disc text-[#777777] font-bold">Outer Material: <span className="list-none font-[400]">A-Grade Standard Quality</span></li>
                    </ul>
                    <h2 className="text-[#202020] text-[15px] font-[500]">WEIGHT</h2>
                    <div className="flex gap-4">
                        <div className="rounded bg-[#5CAF90] border border-[#5CAF90] w-[53px] h-[22px] cursor-pointer text-white text-[12px] flex items-center justify-center"><p>250g</p></div>
                        <div className="rounded bg-[#F8F8FB] border border-[#EEEEEE] w-[53px] h-[22px] cursor-pointer text-[#777777] text-[12px] flex items-center justify-center"><p>500g</p></div>
                        <div className="rounded bg-[#F8F8FB] border border-[#EEEEEE] w-[53px] h-[22px] cursor-pointer text-[#777777] text-[12px] flex items-center justify-center"><p>1kg</p></div>
                        <div className="rounded bg-[#F8F8FB] border border-[#EEEEEE] w-[53px] h-[22px] cursor-pointer text-[#777777] text-[12px] flex items-center justify-center"><p>2kg</p></div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex gap-6 w-[120px] h-[40px] border rounded items-center justify-center border-[#EEEEEE]">
                            <button className="cursor-pointer" onClick={handleDec}>-</button> <h2>{amount}</h2> <button className="cursor-pointer" onClick={handleInc}>+</button>
                        </div>
                        <button className={`bg-[${isAdded ? "#5CAF90" : "#4B5966"}] w-[160px] h-[40px] rounded text-white font-semibold duration-300 cursor-pointer`} onClick={()=> addCart()}>{isAdded ? "ADDED" : "ADD TO CART"}</button>
                        <button className="w-[40px] h-[40px] border border-[#EEEEEE] rounded flex items-center justify-center text-[20px] cursor-pointer"><CiHeart/></button>
                        <button className="w-[40px] h-[40px] border border-[#EEEEEE] rounded flex items-center justify-center text-[20px] cursor-pointer"><FaEye/></button>
                    </div>
                </div>
            </div>

            <div className="mt-14">
                <div className="flex flex-col gap-3 text-center items-center py-10">
                    <h1 className="text-[#4B5966] font-bold text-[26px]">Related <span className="text-[#5CAF90] font-bold text-[26px]">Products</span></h1>
                    <p className="text-[#777777] text-[14px]">Browse The Collection of Top Products</p>
                </div>
                <Catalog category="groceries" skip={4} limit={5}/>
            </div>
        </div>
    </div>
  )
}

export default Detail