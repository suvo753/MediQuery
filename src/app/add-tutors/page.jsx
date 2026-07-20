'use client';

import { authClient } from '@/lib/auth-client';
import { Input, Label, TextField,Select, ListBox, Description } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';









const addTutors = () => {

      const { data: session,} = authClient.useSession() 
      
      const user = session?.user;

      const userId = user?.id;

  const postTutorsData = async(e)=> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    if(

    !data.tutorName ||
    !data.photo ||
    !data.subject ||
    !data.availableTime ||
    !data.hourlyFee ||
    !data.totalSlots ||
    !data.sessionStartDate ||
    !data.institution ||
    !data.experience ||
    !data.location ||
    !data.teachingMode


    ){

      toast.error('Please fill all the fields');
      return;

    }


    const formAllData = {
      ...data,
  hourlyFee: Number(data.hourlyFee),
  totalSlots: Number(data.totalSlots),
      userId:userId

    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`,{
      
      method:'POST',
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(formAllData)
    })

    const result = await res.json();
    console.log(result);

    if(result.insertedId){
      toast.success('Tutor Added Successfully');
      redirect('/tutors');
    }

  }








    return (
        <div className='p-10 max-w-screen-xl mx-auto'>


      


        <div className='p-2 shadow-2xl max-w-full rounded-2xl border border-amber-50 '>


        <form onSubmit={postTutorsData} className='space-y-4 p-8'>

            
        <TextField  name="tutorName">
        <Label>Tutor Name</Label>
        <Input className={`border border-[#e7dddd] shadow-3xl w-full`} placeholder="Rifat Ahmed" />
      </TextField>

        <TextField fullWidth name="photo">
        <Label>Photo URL</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="imgbb/ postimage Link" />
      </TextField>


      <Select className={"w-full"} name="subject" placeholder="Select one">
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


          <TextField fullWidth name="availableTime">
        <Label>Available Time</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="Sun- Thu 5.00 pm to 8.00 pm" />
      </TextField>

      <TextField fullWidth name="hourlyFee">
        <Label>Hourly Fee</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="500 w-full"/>
      </TextField>

      <TextField fullWidth name="totalSlots">
        <Label>Total Slots</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="500"/>
      </TextField>

      <TextField fullWidth>
        <Label>Session Start Date</Label>
        <input type="date"  name="sessionStartDate" className="input w-full" />
      </TextField>


        <TextField fullWidth name="institution">
        <Label>Institution</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="Dhaka University" />
      </TextField>


        <TextField fullWidth name="experience">
        <Label>Experience</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="3 Years Teaching Experience" />
      </TextField>

        <TextField fullWidth name="location">
        <Label>Location (Area / City )</Label>
        <Input className={`border border-[#e7dddd] w-full`} placeholder="Khulna" />
      </TextField>

      <Select className={"w-full"} name="teachingMode" placeholder="Select one">
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


    <button className='btn w-full rounded-2xl'>Add Tutor</button>

      
























      

        </form>
            </div>


            
            
        </div>
    );
};

export default addTutors;