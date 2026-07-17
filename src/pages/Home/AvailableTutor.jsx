import { tutorsLimit } from "@/lib/data";
import TutorCard from "@/Ui/TutorCard";
import Link from "next/link";
const AvailableTutor = async () => {


const tutor = await tutorsLimit();
    return (
        <div className="container mx-auto space-y-3">

            <div className="  flex justify-between items-center container mx-auto bg-white ">
                <h1 className="text-black font-bold text-2xl"> Available Tutors </h1>
              <Link href="/tutors">
              
               <button className="btn text-black bg-white"> View All  </button>
              
              </Link> 
            </div>


            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-20">
                {
                    tutor.map(tutor=> <TutorCard key={tutor._id} tutor={tutor}/>)
                }
            </div>
            
        </div>
    );
};

export default AvailableTutor;