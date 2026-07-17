import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import { MdDelete, MdModeEdit } from "react-icons/md";



const MyTutor = async () => {

const session = await auth.api.getSession({
    headers: await headers() 
})

const user = session?.user;
const userId = user?.id;

console.log(session);
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors/${userId}`);
  const data = await res.json();
  console.log(data);



    return (
        <div className="container mx-auto mt-10">


          {data.length === 0 ? <h1 className="text-center text-2xl font-bold text-black">You have not added any tutors yet</h1> :

          

        <Table>
      <Table.ScrollContainer>
        <Table.Content count={7} aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Tutor Name</Table.Column>
            <Table.Column>Subject</Table.Column>
            <Table.Column>Available</Table.Column>
            <Table.Column>Hourly Fee</Table.Column>
            <Table.Column>Total Slots</Table.Column>
            <Table.Column>Registration Date</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>

                        {
              data.map(tutor=> <Table.Row key={tutor._id}>
              <Table.Cell>{tutor.tutorName}</Table.Cell>
              <Table.Cell>{tutor.subject}</Table.Cell>
              <Table.Cell>{tutor.availableTime}</Table.Cell>
              <Table.Cell> ${tutor.hourlyFee}</Table.Cell>
              <Table.Cell>{tutor.totalSlots}</Table.Cell>
              <Table.Cell>{tutor.sessionStartDate}</Table.Cell>
              <Table.Cell className={'flex items-center'}>
                <MdDelete className="w-[70px] h-[20px] hover:text-red-500 cursor-pointer"/>
                <MdModeEdit className="w-[70px] h-[20px] mr-30 hover:text-red-500 cursor-pointer"/>

              </Table.Cell>
            </Table.Row>)
            }
  



          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>

          
          
          
          
   
          
          
          }


        
        </div>
    );
};

export default MyTutor;