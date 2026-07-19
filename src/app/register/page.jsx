'use client';

import { authClient } from "@/lib/auth-client";
import { Card, FieldError, Input, Label, TextField } from "@heroui/react";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

// Module scope এ font loader call করতে হবে
const merriWeather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const RegisterPage = () => {



  const handleGoogleLogin=async()=>{
   const {data,error} = await authClient.signIn.social({
    provider: "google",
  });
  }


    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData);
        const Data = Object.fromEntries(formData.entries());
        console.log(Data);

    const { data, error } = await authClient.signUp.email({

      name: Data?.name,
      image: Data?.imageUrl,
      email: Data?.email,
      password: Data?.password,
});

if(data){

  alert("Account Created Successfully");
  redirect('/');
}






    };





  return (
  <div
  className={`container mx-auto flex justify-center px-4 py-6 md:p-5 md:mt-5 ${merriWeather.className}`}
>
  <Card className="w-full max-w-[500px] p-5 sm:p-7 md:p-10 rounded-2xl shadow-xl">
    <h1 className="text-black text-center text-2xl font-bold">
      Register
    </h1>

    <p className="text-center text-black">
      Create Your Account Start Learning
    </p>

    <form onSubmit={handleSubmit} className="space-y-4 mt-5">
        <TextField className="w-full" name="name">
          <Label>Name</Label>
          <Input
            className="border border-black w-full"
            placeholder="Enter your name"
          />
        </TextField>
      {/* Mobile = Column | Desktop = Row */}
      <div className="flex flex-col md:flex-row gap-4">

      <TextField className="w-full" name="imageUrl" type="text">
        <Label>Image Url </Label>
        <Input
          className="border border-black w-full"
          placeholder="Enter your imageUrl"
        />
      </TextField>

        <TextField className="w-full" name="email" type="email">
          <Label>Email</Label>
          <Input
            className="border border-black w-full"
            placeholder="Enter your email"
          />
        </TextField>
      </div>


      <TextField fullWidth  isRequired name="password" type="password">
        <Label>Password</Label>
        <Input className={'w-full'} />
       
      </TextField>

      <button className="btn w-full bg-black text-white">
        Create Account
      </button>

    </form>
      <p className="text-black text-center">Or</p>

    <button onClick={handleGoogleLogin} className="btn w-full bg-white text-black mt-2">
      <FaGoogle />
      Continue With Google
    </button>

    <p className="text-center text-black"> Already have an account? <Link  className="text-blue-500" href="/login">Login</Link></p>




  </Card>
</div>
  );
};

export default RegisterPage;