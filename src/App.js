import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Booking from './routes/Booking';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path='/booknow' element={<Booking/>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
