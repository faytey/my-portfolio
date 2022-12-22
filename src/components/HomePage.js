import "./HomePage.css";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

export default function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <Hero />
      <Footer/>
    </div>
  );
}
