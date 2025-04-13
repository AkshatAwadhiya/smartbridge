import React, { useState } from 'react';
import LandingPage from './LandingPage';
import ProductDetails from './ProductDetails';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return selectedProduct ? (
    <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
  ) : (
    <LandingPage onProductClick={setSelectedProduct} />
  );
}

export default App;
