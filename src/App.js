import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    {/* <Signup/>
    <Login/> */}
    </BrowserRouter>
  );
}

export default App;
