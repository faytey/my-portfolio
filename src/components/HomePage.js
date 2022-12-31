import "./HomePage.css";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import Footer from "./Footer/Footer";

export default function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <div className="feed">
        <LeftSideBar />
        <Hero />
        <RightSideBar />
      </div>
      <Footer />
    </div>
  );
}
