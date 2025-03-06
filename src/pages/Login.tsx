// 'https://dummyjson.com/auth/login'

import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "../store/authSlice";
import { toast } from "sonner";

interface InitialState {
    username: string,
    password: string
}
const Login = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState<InitialState>({ username: '', password: '' });
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        axios.post('https://dummyjson.com/auth/login', form)
            .then(res => {
                const token = res.data.accessToken;
                dispatch(set(token));
                navigate('/');
                toast.success('You logged in')
            })
            .catch(() => toast.error('username or password is wrong'))
    };

  return (
    <div className="bg-gray-200 px-2">
        <div className="max-w-[1500px] mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col bg-white w-[500px] h-[400px] rounded-2xl shadow-2xl p-12">
                    <div className="text-center py-6">
                        <h2 className="text-green-500 font-bold text-3xl">Login</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h2>Username</h2>
                                <input 
                                    type="text" 
                                    name="username" 
                                    value={form.username} 
                                    onChange={handleChange} 
                                    autoComplete="on" 
                                    className="w-full h-[40px] border border-[#cdcdcd] rounded px-4"
                                />
                            </div>
                            <div>
                                <h2>Password</h2>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={form.password} 
                                    onChange={handleChange} 
                                    autoComplete="on" 
                                    className="w-full h-[40px] border border-[#cdcdcd] rounded px-4"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full h-[40px] bg-green-600 text-white rounded-[8px] mt-4 cursor-pointer hover:opacity-80 duration-300"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
