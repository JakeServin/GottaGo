import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Find from './routes/Find';
import BathroomInfo from './routes/BathroomInfo';
import NewBathroom from './routes/NewBathroom';
import SignIn from './routes/SignIn';
import Register from './routes/Register';

function App() {
  return (
		<BrowserRouter>
			<div className='body'>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/find" element={<Find />} />
					<Route path="/bathroominfo" element={<BathroomInfo />} />
					<Route path="/newbathroom" element={<NewBathroom />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/register" element={<Register />} />
				</Routes>

			</div>
		</BrowserRouter>
  );
}

export default App;
