import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import NotFound from "./component/NotFound"
import Product from "./component/Product"
function App() {

  return (
    <>
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/product">Product</Link>{" "}
      </nav>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
