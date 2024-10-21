import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';
import StorList from './component/StorList';
import Uncontrolled from './component/Uncontrolled';
import MarqueText from './component/MarqueText';
import Login from './component/Login';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={
  <div>
    <MarqueText />
    <Uncontrolled />
    <StorList />
  </div>} />
        <Route path='/About' element={
          <>
          <About />
          <Footer />
          </>} />
        <Route path='/Contact' element={
          <div>
            <Contact />
            <Footer />
        </div>}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>  
    </>
  );
}

export default App;
