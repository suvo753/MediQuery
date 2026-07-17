import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

const TutorCard = ({tutor}) => {
    return (
        <Card className=" container mx-auto flex justify-center items-center w-full bg-shadow-300 shadow-lg drop-shadow-amber-50-100 bg-white  rounded-xl p-4 ">

   <div className="relative w-full h-64 overflow-hidden rounded-2xl">
  <Image
    src={tutor?.photo}
    alt={tutor?.tutorName}
    fill
    className="object-cover hover:scale-110 transition-transform duration-500"
  />
</div>

            <div className="space-y-1">
                <h1 className="text-black font-bold text-xl">{tutor?.tutorName}</h1>
                <p className="text-black text-sm">{tutor?.subject}</p>
          
                <p className="text-black text-sm "> Available  {tutor?.availableTime}</p>
                <p className="text-black text-sm ">Session Start Date :   {tutor?.sessionStartDate}</p>


              <h1 className="text-black font-bold mt-5"> Fee :  ${tutor?.hourlyFee}</h1>


              <Link href={`/tutors/${tutor?._id}`}>
                <button className=' mt-1 w-full btn rounded-xs drop-shadow-amber-50 bg-blue-500 border-none text-white '> Book Session  </button>
              
              </Link>
              
            </div>

        </Card>
    );
};

export default TutorCard;