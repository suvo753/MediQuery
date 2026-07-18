'use client';

import Link from "next/link";
import { IoBookSharp } from "react-icons/io5";
import MyNavbar from "./MyNavbar";
import { Profile } from "@/Ui/Profile";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

    const { data: session,} = authClient.useSession() 
    
    const user = session?.user;

    return (

  <nav className="rounded-xs">

    

<div className="navbar  bg-white text-black shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost bg-white text-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="font-semibold menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-white">
         
      {
        user? 

        <ul className="menu menu-vertical px-1 gap-3 font-semibold"> 

        <MyNavbar path={'/'}><li>Home </li> </MyNavbar>
        <MyNavbar path={'/tutors'}><li>Tutors</li> </MyNavbar>
        <MyNavbar path={'/add-tutors'}><li>Add Tutors </li> </MyNavbar>
        <MyNavbar path={'/my-tutor'}><li>My Tutors</li> </MyNavbar>
        <MyNavbar path={'/my-booked-session'}><li>My Booked Session</li> </MyNavbar>
        
        </ul>
        : 

        <ul className="menu menu-vertical px-1 gap-3 font-semibold">

           <MyNavbar path={'/'}><li>Home </li> </MyNavbar>
        <MyNavbar path={'/tutors'}><li>Tutors</li> </MyNavbar>

        
    </ul>


      }
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost font-bold  bg-white text-blue-500 text-xl"> <span> <IoBookSharp/> </span> MediQueue</Link>
  </div>
  <div className="navbar-center hidden lg:flex">


      {
        user? 

        <ul className="menu menu-horizontal px-1 gap-3 font-semibold"> 

        <MyNavbar path={'/'}><li>Home </li> </MyNavbar>
        <MyNavbar path={'/tutors'}><li>Tutors</li> </MyNavbar>
        <MyNavbar path={'/add-tutors'}><li>Add Tutors </li> </MyNavbar>
        <MyNavbar path={'/my-tutor'}><li>My Tutors</li> </MyNavbar>
        <MyNavbar path={'/my-booked-session'}><li>My Booked Session</li> </MyNavbar>
        
        </ul>
        : 

        <ul className="menu menu-horizontal px-1 gap-3 font-semibold">

           <MyNavbar path={'/'}><li>Home </li> </MyNavbar>
        <MyNavbar path={'/tutors'}><li>Tutors</li> </MyNavbar>

        
    </ul>


      }



  </div>
  <div className="navbar-end">

    <ul className="flex gap-3 font-semibold">


      {user? <Profile/> : 
      
      <ul className="flex justify-between items-center gap-1 md:gap-3">

      <Link className="btn" href={'/login'}><li>Login</li></Link>
      <Link className="btn" href={'register'}><li>Reginter</li></Link>
      
      </ul>
      
      }






        
    </ul>
    
  </div>
   
</div>
            
        </nav>
    );
};

export default Navbar;