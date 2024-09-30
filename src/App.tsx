import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

// Define the shape of a Product using TypeScript interface
interface Product {
  name: string;
  category: string;
  price: number;
}

const App: React.FC = () => {
  // Array of product objects
  const products: Product[] = [
    { name: "Smartphone", category: "Electronics", price: 299 },
    { name: "Laptop", category: "Electronics", price: 799 },
    { name: "T-shirt", category: "Clothing", price: 20 },
    { name: "Headphones", category: "Electronics", price: 99 },
    { name: "Jeans", category: "Clothing", price: 50 },
  ];

  // State to manage active filter
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filter products based on the active filter
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  // Event handler for changing filter
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>

      {/* Filter Buttons */}
      <section id="filter-section">
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Electronics")}>
          Electronics
        </button>
        <button onClick={() => handleFilterChange("Clothing")}>Clothing</button>
      </section>

      {/* Product List */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
