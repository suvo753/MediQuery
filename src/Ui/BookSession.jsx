"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function BookSession({tutorDetailsData}) {

const { data: session,} = authClient.useSession() 
        
const user = session?.user;

const tutorId = tutorDetailsData?._id;

const seat = tutorDetailsData?.totalSlots;



console.log(tutorId);


const handleSubmit = async (e) => {

    e.preventDefault();

    const today = new Date();
    today.setHours(0,0,0,0);

    const SessionDate = new Date(tutorDetailsData.sessionStartDate);
    SessionDate.setHours(0,0,0,0);


    if(today > SessionDate){

    toast.error("Session Already Started!");
    return;


    }




    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);


    if(!data.phone){

      toast.error('Please add your phone number');
      return;

    }


    const dataToSend = {
        ...data,
        userId: user?.id
    }


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-booking-tutors/${tutorId}`,{
      method: "PATCH",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })


    const result = await res.json();

    if(result){

      toast.success("Booking Successful!");
      redirect("/my-tutor");

    }

    console.log(result);

    

}

  return (

    <div>

      {

        seat === 0 ? <button className="btn" onClick={()=> toast.error('Session Seat not Available')}> Book Session </button> :

        
    <Modal>
      <Button variant="secondary" className={'rounded-none btn '}>Book Session</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center font-bold">Book Session</Modal.Heading>
              <p className="mt-1.5 text-center text-black text-sm leading-5 font-bold">
                Make changes to your profile here. Click save when youre done.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6 ">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <TextField defaultValue={user?.name} className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>


                    <TextField className="w-full" name="phone" variant="secondary">
                    <Label>Phone</Label>
                    <Input placeholder="017XX-XXXXXX" />
                  </TextField>



                  <TextField className="w-full" defaultValue={tutorDetailsData.tutorName} name="tutorName" type="tel" variant="secondary">
                    <Label>Tutor Name </Label>
                    <Input />
                  </TextField>

                  <TextField  defaultValue={user?.email} className="w-full" name="email" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>

                  <Button type="submit" className={'w-full mt-5 bg-black text-white'} slot="close" variant="secondary"> Confirm Booking </Button> 

                </form>
                  <Button className={'w-full mt-5'} slot="close" variant="secondary"> Confirm Booking </Button> 
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
      



      }

    </div>

  );
}