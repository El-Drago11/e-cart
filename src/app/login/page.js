'use client'

import { LoginUser } from "@/apis/LoginApi";
import Link from "next/link"
import { useRouter } from "next/navigation";

const Login = () => {
    const router  = useRouter();
    const getUserCredentials = async(e) => {
        
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const Response = await LoginUser(email,password)
        if(Response){
            alert('Login successfully')
            router.push('/')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="font-bold text-4xl text-center mb-4">Login</div>

            <form
                className="bg-slate-400 p-6 rounded-md flex flex-col gap-7 w-11/12 md:w-1/2 lg:w-[25%] py-6"
                onSubmit={getUserCredentials}
            >
                <div className="flex flex-col gap-1">
                    <div className="text-lg font-bold">Email</div>
                    <input
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        className="px-2 py-1 border-2 rounded-md border-slate-300"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-bold">Password</div>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        className="px-2 py-1 border-2 rounded-md border-slate-300"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md cursor-pointer font-bold text-lg"
                >
                    Login
                </button>

                <p className="font-semibold">
                    Don't have account? <Link href="/signup"><span className="font-bold cursor-pointer">Signup Now</span></Link>
                </p>
            </form>
        </div>
    )
}

export default Login
