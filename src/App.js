import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar/Navbar";
import Index from "./component/Hero/Index";
import ServiceIndex from "./component/Service/Index";
import PortIndex from "./component/Portfolio/Index";
import Pricing from "./component/Pricing/Index";
import TeamIndex from "./component/Team/Index";
import Testimonials from "./component/Testimonial/Index";
import Blog from "./component/Blog/Index";
import Client from "./component/Clinet/Index";
import Contact from "./component/Contact/Index";
import Footer from "./component/Footer/Index";
function App() {
  useEffect(() => {
    Aos.init({
      debounceDelay: 50,
      offset: 300,
      delay: 10,
      duration: 500,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className="App">
      <Navbar />
      <Index />
      <ServiceIndex />
      <PortIndex />
      <Pricing />
      <TeamIndex />
      <Testimonials />
      <Blog />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
