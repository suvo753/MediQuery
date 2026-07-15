import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (


    <div className=" container mx-auto  space-y-3 w-full h-full bg-white md:flex lg:flex px-20 py-20 justify-between items-center text-black">


    <div className="space-y-4 p-2 ">
        <p className="font-bold border w-fit p-1 rounded-xl text-blue-500"> Welcome to MediQueue</p>
        <h1 className="font-bold text-3xl">Find The Best Tutors Books <br/>  & Learn Easily</h1>
        <p> Connect with expert tutors and book your sessions that fit your schedule <br /> and achieve your goals faster   </p>

        <Link href="/tutors"> 
        
        <button className="btn btn-primary">Book Tutors <FaArrowAltCircleRight/> </button>
        
        </Link>
    </div>

        <div>
      <Image
        src="/cover.jpg"
        alt="Cover"
        width={400}
        height={400}
        className="rounded-xl object-cover hover:rotate-1 hover:scale-100 animate-accordion-up duration-500 transition-transform"
     
      />
    </div>






        </div>
  );
};

export default Banner;