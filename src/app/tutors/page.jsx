import { tutors } from "@/lib/data";
import { SearchButton } from "@/Ui/SearchButton";
import TutorCard from "@/Ui/TutorCard";



export const metadata = {
  title: "Tutor | Tutor Booking ",
  description: "Tutor Booking",
};





const TutorsPage = async({searchParams}) => {
    const sParams = await searchParams;
    console.log(sParams);
    const data = await tutors(sParams?.search || "");
    console.log(data);
    return (
        <div className="container mx-auto space-y-3">
            <div className="text-center mt-8 text-black font-bold text-2xl">
                All Tutors
            </div>


            <SearchButton/>


            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-20">
                {
                    data.map(tutor=> <TutorCard key={tutor._id} tutor={tutor}/>)
                }
            </div>
            
        </div>
    );
};

export default TutorsPage;