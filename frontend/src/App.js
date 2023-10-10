import { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";

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
import Payment from "./pages/Payment";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function App() {
	return (
		<Router>
			<AnnouncementBar />
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/pdp/:id" element={<ProductDetail />} />
				<Route path="/shop/:type" element={<Shop />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/cart" element={<ShoppingCart />} />
				<Route path="/location" element={<Location />} />
				<Route path="/payment/completed/:id" element={<ThankYou />} />
				<Route path="/payment" element={<Payment />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
