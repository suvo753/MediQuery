'use client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { MdCancel } from 'react-icons/md';

const CancelButton = ({tutor}) => {

    const handleCancel = async ()=> {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-booking-tutors-status/${tutor._id}`,{
            method: "PATCH",
            headers:{
                "content-type": "application/json"
            },
        });

        const result = await res.json();

      
            if(result){
                toast.success("Booking Cancelled!");
                redirect("/my-booked-session");

            }
        


    }





    console.log(tutor);
    return (
              <button onClick={handleCancel} className="btn">
                        <MdCancel />
                      </button>
    );
};

export default CancelButton; 