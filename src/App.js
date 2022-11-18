import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Fiche from "./pages/fiche/Fiche";
import Propos from "./pages/propos/Propos";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="/a-propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
