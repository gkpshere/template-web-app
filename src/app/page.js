import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/navigation";
import About from "./components/about";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <About></About>
    <Menu></Menu>
    <Services></Services>
    <Gallery></Gallery>
    <Contact></Contact>
    <Footer></Footer>

    </> 
    
  );
}
