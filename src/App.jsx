import { Analytics } from "./components/Analytics";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { NewLetter } from "./components/NewLetter";
import { PriceCard } from "./components/PriceCard";

const App = ()=>{
  return(
    <div className="bg-black">
      <Navbar/>
      <Hero/> 
      <Analytics/>
      <NewLetter/>
      <PriceCard/>
      <Footer/>
    </div>
  )
}

export default App;