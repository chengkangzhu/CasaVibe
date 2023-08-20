
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";


//components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";

//pages
import Landing from "./pages/Landing";


function App() {
  return (
    <Router>
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/pdp" element={<PDP />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/payment" element={<Payment />} /> */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
