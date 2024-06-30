import './App.css';
import Navbar from './components/layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductCaptureTemplatesPage from './pages/ProductCaptureTemplatesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<DashboardPage/>}></Route>
          <Route path="/product-capture" element={<ProductCaptureTemplatesPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
