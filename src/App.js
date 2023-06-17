import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Owner from './pages/Owner';
import Inventory from './components/owner/Inventory';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/owner/login" element={<Owner/>}/>
        <Route path="/owner/inventory" element={<Inventory/>}/>
      </Routes>
    </div>
  );
}

export default App;
