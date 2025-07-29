import HeroSection from "../components/HeroSection";
import ExploreSection from "../components/ExploreSection";
import TableSection from "../components/TableSection";
import AboutSection from "../components/AboutSection";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { isLoggedIn } = useOutletContext(); // Get isLoggedIn from Outlet context

  return (
    <div>
      <HeroSection isLoggedIn={isLoggedIn} />
      <ExploreSection/>
      <TableSection/>
      <AboutSection/>
    </div>
  );
};

export default Home;
