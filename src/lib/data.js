export const tutors = async (search = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors?search=${search}`
  );

  return res.json();
};


export const tutorsLimit = async () => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutorslimit`);
    const data = await res.json();
    return data;

}

 
export const tutorsDetails = async(id,token)=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    });
    const data = await res.json();

    return data;


}


export const MyBookedSession = async(userID,token)=> {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-booking-tutors/${userID}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    });
    console.log(res);
    const data = await res.json();
    return data ;
}