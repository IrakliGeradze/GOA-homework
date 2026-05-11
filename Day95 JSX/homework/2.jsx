import React, { useMemo, useState } from "react";

const productsData = [
  { id: 1, name: "iPhone 15", price: 1200, category: "Electronics" },
  { id: 2, name: "Samsung TV", price: 900, category: "Electronics" },
  { id: 3, name: "Sofa", price: 700, category: "Furniture" },
  { id: 4, name: "Table", price: 300, category: "Furniture" },
  { id: 5, name: "T-Shirt", price: 40, category: "Clothing" },
  { id: 6, name: "Jeans", price: 80, category: "Clothing" },
];

const categories = ["All", "Electronics", "Furniture", "Clothing"];

const Product = React.memo(function Product({ product }) {
  console.log("Product render:", product.name);

  return (
    <div style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}>
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
});

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    if (selectedCategory === "All") {
      return productsData;
    }

    return productsData.filter(
      (p) => p.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "20px" }}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}