import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";

//pages
import Landing from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import Location from "./pages/Location";
import ThankYou from "./pages/ThankYou";

function App() {
	return (
		<Router>
			<AnnouncementBar />
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/pdp" element={<ProductDetail />} />
				<Route path="/shop" element={<Shop />} />
          		<Route path="/cart" element={<ShoppingCart />} />
          		<Route path="/location" element={<Location />} />
          		<Route path="/checkout/completed" element={<ThankYou />} />
         {/* <Route path="/auth" element={<AuthPage />} />
          <Route path="/payment" element={<Payment />} /> */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
