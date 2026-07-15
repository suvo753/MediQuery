export const tutors = async () => {


    const res = await fetch("http://localhost:9090/tutors");
    const data = await res.json();

    return data;

}