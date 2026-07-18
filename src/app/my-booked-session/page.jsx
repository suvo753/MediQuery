import { auth } from "@/lib/auth";
import { MyBookedSession } from "@/lib/data";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import { MdCancel } from "react-icons/md";


const page = async() => {


  const session = await auth.api.getSession({
    headers: await headers() 
})


const userID = session?.user?.id;


const bookedData = await MyBookedSession(userID);

console.log(bookedData);




    return (
        <div className="container mx-auto mt-10">
      <Table>
          
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Phone</Table.Column>
            <Table.Column>Tutor Name </Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Cancel</Table.Column>
          </Table.Header>
          <Table.Body>

            {
              bookedData.map(tutor=>
              <Table.Row key={tutor._id}>
              <Table.Cell>{tutor.name}</Table.Cell>
              <Table.Cell>{tutor.phone}</Table.Cell>
              <Table.Cell>{tutor.tutorName}</Table.Cell>
              <Table.Cell>{tutor.email}</Table.Cell>

              {
                tutor.status === 'Confirmed'? 

             
                  
                <Table.Cell className={'text-green-500'}
                >{tutor.status}</Table.Cell>
                :
                <Table.Cell className={'text-red-500'}
                >{tutor.status}</Table.Cell> 
                
              }
             
             
             
              <Table.Cell>
                {
                  tutor.status === 'Confirmed'? 
                  <button className="btn">
                    <MdCancel />
                  </button>
                  :
                  <button  className="btn btn-disabled opacity-50 cursor-not-allowed">
                <MdCancel />
                </button>
                }

       
              </Table.Cell>
            </Table.Row>
            
          )
            }


          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
        </div>
    );
};

export default page;