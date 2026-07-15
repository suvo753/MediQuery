export const tutors = async () => {


    const res = await fetch("http://localhost:9090/tutors");
    const data = await res.json();

    return data;

}



export const tutorsLimit = async () => {


    const res = await fetch("http://localhost:9090/tutorslimit");
    const data = await res.json();
    return data;

}