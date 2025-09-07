import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Copy from "./components/Copy/Copy"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Learn from "./components/Learn/Learn"
import Logo from "./components/Logo/Logo"
import Maap from "./components/Maap/Maap"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Slider from "./components/Slider/Slider"
import Supplier from "./components/Supplier/Supplier"


function App() {


  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Supplier></Supplier>
      <Slider></Slider>
      <Services></Services>
      <Learn></Learn>
      <Logo></Logo>
      <Blog></Blog>
      <Maap></Maap>
      <Contact></Contact>
      <Footer></Footer>
      <Copy></Copy>
      


    </>
  )
}

export default App
