import DrInfo from "../features/Appointments/DrInfo";
import DrCardList from "./drCardSpeciallity/DrCardList";
import Search from "./Search";
import Header from "./Header";

function Home() {
  return (
    <>
      <div>Home</div>
      <DrCardList />
      <DrInfo />
    </>
  );
}

export default Home;
