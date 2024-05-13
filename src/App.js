import React from "react";
import TopBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contactme";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <section id="Home"><Home /></section>
      <section id="Aboutme"><About /></section>
      <section id="Projects"><Projects /></section>
      <section id="Blog"><Blog /></section>
      <section id="Contactme"><Contact /></section>
      <Footer />
    </div>
  );
}


export default App;













