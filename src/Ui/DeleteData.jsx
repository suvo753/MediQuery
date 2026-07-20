'use client';
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";


const DeleteData = ({userId}) => {

  const handleDelete=async()=>{
    





    
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors/${userId}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          }
        });
    
        const data = await res.json();
        console.log(data);

        if(data){

            toast.success("Tutor deleted successfully");

            redirect('/my-tutor')
            
        }
    
    
      }
    return (
        <div>

             <MdDelete onClick={handleDelete}   className="w-[70px] h-[20px] mr-30 hover:text-red-500 cursor-pointer"/>
            
        </div>
    );
};

export default DeleteData;