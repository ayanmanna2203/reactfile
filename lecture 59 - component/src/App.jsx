

// import Footer from "./components/Footer";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Products";


// function Navbar(){
//   return(
//     <ul>
//       <li>Home</li>
//       <li>Shop</li>
//       <li>About Us</li>
//       <li>Login</li>
//     </ul>
//   );
// }

const user ={
  name: "Ayan",
  isActive: true,
}

const products =[
  {
    title: "Nike ka juta",
    price: 999,
  },
   {
    title: "Puma ka juta",
    price: 999,
  },
   {
    title: "Adidas ka juta",
    price: 999,
  },
   {
    title: "adibas ka juta",
    price: 999,
  },
]

function App() {
  return (
    <>
      <Navbar/>
      <Products products ={products}/>
      <Footer/>
    </>

  );
}

export default App;
