import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const TutorCard = ({tutor}) => {
    console.log(tutor, "card ");
    return (
        <Card className=" container mx-auto flex justify-center items-center w-full bg-shadow-300 shadow-lg drop-shadow-amber-50-100 bg-white  rounded-xl p-4 ">

            <div>
            <Image
            src={tutor?.photo}
            width={100}
            height={200}          
            alt="Tutor"
            className="rounded-full"
            />
            </div>

            <div className="text-center space-y-1">
                <h1 className="text-black font-bold text-xl">{tutor?.name}</h1>
                <p className="text-black text-sm font-semibold">{tutor?.subject}</p>
              <div className="flex items-center justify-center gap-1">
                <FaRegStar className="text-yellow-500"/>
                <p className="text-black text-sm text-center"> <span className="mr-3 font-bold"> 
                    {tutor?.rating}
                    </span>
                
                      ({tutor?.totalReviews})
                           </p>
              </div>

              <h1 className="text-black font-bold mt-5">  ${tutor?.price} / Session</h1>


              
                <button className=' mt-1 btn rounded-xs drop-shadow-amber-50 bg-blue-500 border-none text-white '> Book Session  </button>
            </div>

        </Card>
    );
};

export default TutorCard;