import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DouceurBienvenue from "./components/douceurBienvenue/DouceurBienvenue";
import YouMightLike from "./components/youMightLike/YouMightLike";
import SkinCareRitualTips from "./components/skincareRitualTips/SkincareRitualTips";
import Footer from "./components/footer/Footer";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 200;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > heightToHideFrom) {
        isVisible && // to limit setting state only the first time
          setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#fcfcfc",
      }}
    >
      {isVisible && <Navbar />}
      <DouceurBienvenue />
      <YouMightLike />
      <div
        style={{
          marginBottom: 200,
        }}
      ></div>
      <SkinCareRitualTips />
      <Footer />
    </div>
  );
};

export default App;
