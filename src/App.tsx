// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderForm from './components/OrderForm';
import PaimentPage from './components/PaimentPage';



const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OrderForm />} />
          <Route path="/payment" element={<PaimentPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
