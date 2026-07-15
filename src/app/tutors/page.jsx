import { tutors } from "@/lib/data";
import InputData from "@/Ui/InputData";
import TutorCard from "@/Ui/TutorCard";



const TutorsPage = async() => {

    const data = await tutors();

    console.log(data);

    return (
        <div className="container mx-auto space-y-3">

            <div className="text-center mt-8 text-black font-bold text-2xl">
                All Tutors
            </div>




            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-20">
                {
                    data.map(tutor=> <TutorCard key={tutor._id} tutor={tutor}/>)
                }
            </div>
            
        </div>
    );
};

export default TutorsPage;