export const tutors = async () => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);
    const data = await res.json();

    return data;

}



export const tutorsLimit = async () => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutorslimit`);
    const data = await res.json();
    return data;

}

 
export const tutorsDetails = async(id)=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`);
    const data = await res.json();
    return data ;


}