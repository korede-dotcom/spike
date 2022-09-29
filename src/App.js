import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Booking from './routes/Booking';
import AboutUS from './routes/About';
import Contact from './routes/contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/booknow' element={<Booking/>} />
        <Route path='/about' element={<AboutUS/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
