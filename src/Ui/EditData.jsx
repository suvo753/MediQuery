"use client";
import {Button, Input, Select, Label, Modal, Surface, TextField, ListBox} from "@heroui/react";
import { EditIcon } from "lucide-react";

export function EditData({tutor}) {

  const useId  = tutor?._id;

  console.log(useId);

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors/${useId}`,{
      method:'PATCH',
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })

    const result = await res.json();
    console.log(result);



  }
  return (
    <Modal>
      <Button variant="secondary"><EditIcon/></Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-black font-bold text-center">Book Session</Modal.Heading>
              <p className=" text-black text-center mt-1.5 text-sm leading-5">
                Make changes to your profile here. Click save when you re done.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex justify-between gap-4">
                   <TextField defaultValue={tutor?.tutorName} className="w-full" name="tutorName" type="text" variant="secondary">
                    <Label>Tutor Name</Label>
                    <Input  />
                  </TextField>
                  <TextField defaultValue={tutor?.photo} className="w-full" name="photo" type="text" variant="secondary">
                    <Label>Photo Url </Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                    </div>



            <div className="flex justify-between gap-4">
            <Select defaultValue={tutor?.subject} className={"w-full"} name="subject" placeholder="Select one">
            <Label>Subject</Label>
            <Select.Trigger className={'border border-[#e7dddd]'} >
              <Select.Value  />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Mathematics" textValue="Mathematics">
                  Mathematics
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Physics" textValue="Physics">
                  Physics
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Chemistry" textValue="Chemistry">
                  Chemistry
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="English" textValue="English">
                  English
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>


                  
             <TextField defaultValue={tutor?.availableTime} fullWidth name="availableTime">
           <Label>Available Time</Label>
           <Input className={`border border-[#e7dddd] w-full`} placeholder="Sun- Thu 5.00 pm to 8.00 pm" />
         </TextField>
            </div>

    <div className="flex justify-between gap-4">

                
      <TextField defaultValue={tutor?.hourlyFee} fullWidth name="hourlyFee">
        <Label>Hourly Fee</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="500 w-full"/>
      </TextField>

      <TextField defaultValue={tutor?.totalSlots} fullWidth name="totalSlots">
        <Label>Total Slots</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="500"/>
      </TextField>


            </div>

            <div className="flex justify-between gap-4">

                      <TextField defaultValue={tutor?.sessionStartDate} fullWidth>
                        <Label>Session Start Date</Label>
                        <input defaultValue={tutor?.sessionStartDate} type="date"  name="sessionStartDate" className="input w-full" />
                      </TextField>
                
                
                        <TextField defaultValue={tutor?.institution} fullWidth name="institution">
                        <Label>Institution</Label>
                        <Input className={`border border-[#e7dddd] w-full`} placeholder="Dhaka University" />
                      </TextField>

            </div>


            <div className="flex justify-between gap-4">


                
                        <TextField defaultValue={tutor?.location} fullWidth name="location">
                        <Label>Location (Area / City )</Label>
                        <Input className={`border border-[#e7dddd] w-full`} placeholder="Khulna" />
                      </TextField>
                
                      <Select defaultValue={tutor?.teachingMode} className={"w-full"} name="teachingMode" placeholder="Select one">
                      <Label>Teaching Mode</Label>
                      <Select.Trigger className={'border border-[#e7dddd]'} >
                        <Select.Value  />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Online" Online="Online">
                            Online
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Offline" textValue="Offline">
                            Offline 
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Both" textValue="Both">
                            Both
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                
                        </ListBox>
                      </Select.Popover>
                    </Select>

            </div>


                    <TextField defaultValue={tutor?.experience} fullWidth name="experience">
                    <Label>Experience</Label>
                    <Input className={`border border-[#e7dddd] w-full max-h-28`} placeholder="3 Years Teaching Experience" />
                  </TextField>


           
              <Button type="submit" className={'w-full bg-black text-white'} >Update</Button>
     

                </form>
                <Button className={'w-full mt-5'} slot="close" variant="secondary">
                Cancel
              </Button>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}