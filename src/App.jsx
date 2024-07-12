import "./App.css";
import Navbar from "./Componants/Navbar.jsx"
import Cards from  "./Componants/cards.jsx"
function App() {
  const productcard = [
    {
      name: "Wireless Headphones",
      price: 79.99,
      image: "images/headphones.jpg",
      description: "Enjoy crystal-clear audio with these comfortable wireless headphones."
    },
    {
      name: "Fitness Tracker",
      price: 49.95,
      image: "images/fitnesstracker.jpg",
      description: "Track your steps, heart rate, and more with this sleek fitness tracker."
    },
    {
      name: "Smart Speaker",
      price: 99.00,
      image: "images/smartspeaker.jpg",
      description: "Control your smart home and enjoy rich sound with this voice-activated speaker."
    },
    {
      name: "Laptop Backpack",
      price: 34.50,
      image: "images/backpack.jpg",
      description: "Carry your laptop and essentials comfortably in this stylish backpack."
    },
    {
      name: "Wireless Charging Pad",
      price: 22.99,
      image: "images/chargingpad.jpg",
      description: "Charge your phone wirelessly with this convenient charging pad."
    }
  ];
  
  return (
    <div className="flex items-center justify-center">
          <Navbar />
          <div className="flex items-center justify-center gap-5 flex-wrap">
          <Cards productcard={productcard}/>  
          {
            productcard.map((product) =>{
              return(
             <Cards pro = {product}/>
              )
            })
          }

            </div>               
      
    </div>
    
  )
}

export default App