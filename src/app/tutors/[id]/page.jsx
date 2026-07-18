import { tutorsDetails } from '@/lib/data';
import { BookSession } from '@/Ui/BookSession';
import Image from 'next/image';
import React from 'react';

const tutorDetails = async ({params}) => {
    const {id} = await params;
    const tutorDetailsData = await tutorsDetails(id);
    console.log(tutorDetailsData);


    return (
        <div className='container mx-auto mt-10'>


            <div className='md:flex  items-center  shadow-2xl py-10 lg:mx-20 justify-center gap-7  rounded-2xl  '>



            <div className='flex justify-center'>
                <Image
                src={tutorDetailsData?.photo}
                width={300}
                height={300}
                alt="profile"
                className='rounded-xl flex justify-center  items-center'

                
                />
            </div>



            <div className='p-3'>
                <h1 className=' text-2xl font-bold'>{tutorDetailsData?.tutorName}</h1>
                <p>{tutorDetailsData?.subject}</p>
                <p className='font-bold'> <span>Institute : </span> {tutorDetailsData?.institution}</p>
                <p> <span className='font-bold'>Experience : </span> {tutorDetailsData?.experience}</p> 
                <p> <span className='font-bold'>Location: </span> {tutorDetailsData?.location}</p>
                <p> <span className='font-bold'> Mode : </span>{tutorDetailsData?.teachingMode}</p>
                <p> <span className='font-bold'>Available Time : </span>{tutorDetailsData?.availableTime}</p>
                <p> <span className='font-bold'>hourly Fee : </span>{tutorDetailsData?.hourlyFee}</p>
                <p> <span className='font-bold'> Remaining Slots : </span>{tutorDetailsData?.totalSlots}</p>
                <p> <span className='font-bold'>Session Start Date : </span>{tutorDetailsData?.sessionStartDate}</p>
              
              <div className='mt-3'>

               <BookSession  tutorDetailsData={tutorDetailsData}/>
              </div>
              

            </div>


            
            <div>
                
            </div>
            
            </div>
        </div>
    );
};

export default tutorDetails;