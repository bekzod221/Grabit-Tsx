
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { decQuantity, incQuantity, removeItem } from "../store/cartSlice"
const Carts = () => {
    const cartItems = useSelector((state: RootState)=> state.carts || [])
    const cart = cartItems.carts
    console.log(cart);
    const dispatch = useDispatch()
  return (
   <div className="py-16">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="bg-[#F8F8FB] border border-[#EEEEEE] rounded p-4 w-full lg:w-[35%]">
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#4B5966] text-[20px] font-bold">Summary</h1>
                <p className="text-[#777777] text-[17px] font-bold border-b border-[#EEEEEE]">Estimate Shipping</p>
                <p>Enter your destination to get a shipping estimate</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h2>Country *</h2>
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full h-[50px] rounded border border-[#EEEEEE] bg-white p-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2>State/Province</h2>
                  <input type="text" className="w-full h-[50px] rounded border border-[#EEEEEE] bg-white p-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2>Zip/Postal Code</h2>
                  <input
                    type="text"
                    placeholder="Zip/Postal Code"
                    className="w-full h-[50px] rounded border border-[#EEEEEE] bg-white p-4"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <div className="flex justify-between text-[#4B5966] text-[14px]">
                  <div>
                    <p>Sub-Total</p>
                  </div>
                  <div>
                    <p>$162.00</p>
                  </div>
                </div>
                <div className="flex justify-between text-[#4B5966] text-[14px]">
                  <div>
                    <p>Delivery Charges</p>
                  </div>
                  <div>
                    <p>$32.40</p>
                  </div>
                </div>
                <div className="flex justify-between text-[#4B5966] text-[14px] border-b pb-2 border-[#EEEEEE]">
                  <div>
                    <p>Coupon Discount</p>
                  </div>
                  <div>
                    <p className="text-[#5CAF90] cursor-pointer">
                      <u>Apply Discount</u>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-[#4B5966] text-[14px]">
                  <div>
                    <p className="font-bold text-[#4B5966]">Total Amount</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#4B5966]">$194.40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-[#4B5966]">
                    <th className="text-left p-4">Product</th>
                    <th className="text-left p-4">Price</th>
                    <th className="text-left p-4">Quantity</th>
                    <th className="text-left p-4">Total</th>
                    <th className="text-left p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                      <tr key={item.id} className="border-b border-[#EEEEEE]">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 bg-[#F8F8FB] rounded flex items-center justify-center">
                              <img
                                src={item.data.thumbnail || "/placeholder.svg"}
                                alt={item.data.title}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <span className="text-[#4B5966]">{item.data.title}</span>
                          </div>
                        </td>
                        <td className="p-4 text-[#4B5966]">${item.price}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2 border border-[#EEEEEE] w-[94px] h-[35px] rounded">
                            <button
                              className="w-6 h-6 flex items-center justify-center rounded cursor-pointer"
                              onClick={()=> dispatch(decQuantity(item.id))}
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <button
                              className="w-6 h-6 flex items-center justify-center rounded cursor-pointer"
                              onClick={()=> dispatch(incQuantity(item.id))}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-[#4B5966]">${(item.price * item.quantity).toFixed(2)}</td>
                        <td className="p-4">
                          <button className="text-[#4B5966] cursor-pointer" onClick={()=> dispatch(removeItem(item.id))}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-6">
              <button className="px-6 py-3  rounded text-[#4B5966] transition-colors">
                <u>Continue Shopping</u>
              </button>
              <button className="px-6 py-3 bg-[#5CAF90] text-white rounded hover:bg-[#4a9e7f] transition-colors">
                <u>Check Out</u>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carts