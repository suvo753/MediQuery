import AvailableTutor from "@/pages/Home/AvailableTutor";
import Banner from "@/pages/Home/Banner";
import MediQuery from "@/pages/Home/Mediquery";

export const metadata = {
  title: " Tutor | Tutor Finder  ",
  description: "Tutor Finder ",
};




export default function Home() {
  return (
    <div >

      <Banner/>
      <AvailableTutor/>
      <MediQuery/>
    </div>
  );
}
