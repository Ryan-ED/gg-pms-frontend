import Navbar from './components/layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductCaptureTemplatesPage from './pages/ProductCaptureTemplatesPage';
import ProductStockUpdatesPage from './pages/ProductStockUpdatesPage';

function App() {
  return (
    <>
      <Navbar />
      <div className='container mt-5 mb-5'>
        <Routes>
            <Route path="/" element={<DashboardPage/>}></Route>
            <Route path="/product-capture" element={<ProductCaptureTemplatesPage/>}></Route>
            <Route path="/product-stock-update" element={<ProductStockUpdatesPage/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
