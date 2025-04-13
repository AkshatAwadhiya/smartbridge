import React from 'react';

const products = [
  { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$35", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product C", price: "$50", image: "https://via.placeholder.com/150" },
];

const LandingPage = ({ onProductClick }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <div className="font-bold text-xl">MyStore</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-300">Home</a>
          <a href="#" className="hover:text-yellow-300">Products</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center p-12 bg-yellow-100">
        <h1 className="text-4xl font-bold">Welcome to MyStore</h1>
        <p className="text-lg mt-4">Find the best products at amazing prices!</p>
      </header>

      {/* Products */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded shadow p-4 text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="mt-2 font-semibold">{product.name}</h2>
            <p>{product.price}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => onProductClick(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>Follow us on:</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:text-yellow-400">Twitter</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
