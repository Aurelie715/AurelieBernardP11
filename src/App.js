import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Accommodation from "./pages/accommodation/Accommodation";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import Footer from "./components/footer/Footer";
import "./style.scss";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="/error/404" element={<Error />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/fiche/*" element={<Error />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
