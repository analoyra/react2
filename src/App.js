import React from "react";
import Header from "./components/layout/Header";
import Naveg from "./components/layout/Naveg";
import Footer from "./components/layout/Footer";
import { BrowserRouter , Routes , Route} from "react-router-dom";

import ContactoPage from './pages/ContactoPage';
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Naveg/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="nosotros" element={<NosotrosPage/>}/>
        <Route path="novedades" element={<NovedadesPage/>}/>
        <Route path="contacto" element={<ContactoPage/>}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
