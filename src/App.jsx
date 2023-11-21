import { BrowserRouter, Routes,Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"; 

import "./App.css";

function App() {
  return  (
  
    <BrowserRouter> 
      <NavBar/>
       <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemsDetailsContainer/>} />
        <Route path="*" element={<>Error 404 vinculo erroneo de la pagina</>} />
       </Routes>
    </BrowserRouter> 
  );
  
}

export default App;
