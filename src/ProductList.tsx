import React from "react";

// Define props interface to pass filtered products
interface Product {
  name: string;
  category: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section id="product-list">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
