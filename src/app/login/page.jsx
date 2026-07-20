'use client';

import { authClient } from "@/lib/auth-client";
import { Card, FieldError, Input, Label, TextField } from "@heroui/react";
import { date } from "better-auth";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

  





// Module scope এ font loader call করতে হবে
const merriWeather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});



  const handleGoogleLogin=async()=>{
   const {data,error} = await authClient.signIn.social({
    provider: "google",
  });

}

  
  
  


const handleLogin=async(e)=>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const Data = Object.fromEntries(formData.entries());


    const { data, error } = await authClient.signIn.email({
        email: Data?.email,
        password: Data?.password,
         callbackURL: "/"
    });

    toast.success("Login Successful");





}



const LoginPage = () => {

    return (
       <div
        className={`container mx-auto flex justify-center px-4 py-6 md:p-5 md:mt-5 ${merriWeather.className}`}
      >
        <Card className="w-full max-w-[500px] p-5 sm:p-7 md:p-10 rounded-2xl shadow-xl">
          <h1 className="text-black text-center text-2xl font-bold">
            Login
          </h1>
      
          <p className="text-center text-black">
            Please Login to continue
          </p>
      
          <form onSubmit={handleLogin} className="space-y-4 mt-5">

      
            {/* Mobile = Column | Desktop = Row */}
           

      
              <TextField className="w-full" name="email" type="email">
                <Label>Email</Label>
                <Input
                  className="border border-black w-full"
                  placeholder="Enter your email"
                />
              </TextField>
   
      
      
            <TextField className={'w-full'}   isRequired name="password" type="password">
              <Label>Password</Label>
              <Input  className="border border-black w-full" />
             
            </TextField>
            <button className="btn w-full bg-black text-white">
            Login  
            </button>
      
          </form>
            <p className="text-black text-center">Or</p>
      
          <button onClick={handleGoogleLogin} className="btn w-full bg-white text-black mt-2">
            <FaGoogle />
            Continue With Google
          </button>
              <p  className="text-black text-center">dont have an account? <Link className="text-blue-500" href="/register">Register</Link></p>

        </Card>
      </div>
    );
};

export default LoginPage;