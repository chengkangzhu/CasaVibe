
import { useEffect, useState } from "react";
import {
	BrowserRouter as Router, 
	Route,
	Routes,
	useLocation,
	Navigate,
} from "react-router-dom";

//redux
import { useSelector } from "react-redux";

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
import Auth from "./pages/Auth";
import About from "./pages/About";

function App() {
	// Ensure that the App component is wrapped in the Router
	return (
		<Router>
			<AppComponent />
		</Router>
	);
}


function AppComponent() {
	const location = useLocation(); 
	const [isAuthPage, setIsAuthPage] = useState(false);
	const token = useSelector(state => state.auth.token)

 

	// Check if the current route is in the array
	useEffect(() => {
		const authRoutes = ["/signin", "/signup"];
		setIsAuthPage(authRoutes.includes(location.pathname));   
	}, [location.pathname]); 

	
 


	return (
		<>
			{!isAuthPage && <AnnouncementBar />}
			{!isAuthPage && <Navbar />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/signin" element={token ? <Navigate to="/"/> : <Auth isSignIn={true} /> } />
      			<Route path="/signup" element={token ? <Navigate to="/" />:<Auth isSignIn={false} /> } />
				<Route path="/pdp/:id" element={<ProductDetail />} />
				<Route path="/shop/:type" element={<Shop />} /> 
				<Route path="/cart" element={token ? <ShoppingCart />:<Navigate to="/signin"/> } />
				<Route path="/location" element={<Location />} />
				<Route path="/payment/completed/:id" element={<ThankYou />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/profile" element={<UnderConstruction />} />
				<Route path="/orders" element={<UnderConstruction />} />
				<Route path="/wishlist" element={<UnderConstruction />} />
				<Route path="/about" element={<About />} /> 
			</Routes>
			{!isAuthPage && <Footer />}
		</>
	);
}

function UnderConstruction() {
	return (
	  <img
		src="https://www.seekpng.com/png/detail/259-2598162_page-in-under-construction.png"
		className="under_construction_image"
		alt="site under construction"
	  />
	);
  }
export default App;
