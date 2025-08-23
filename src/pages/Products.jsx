import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/products/ProductCard";
import BlueButton from "../components/button/BlueButton";
import AddProductModal from "../components/products/AddProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isShowProdModal, setIsShowProdModal] = useState(false);

  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-3xl">Product List</h1>
        <BlueButton onClick={() => setIsShowProdModal(true)}>
          Add Product
        </BlueButton>
      </div>
      <div className="flex gap-4 flex-wrap">
        {products?.map((prod, index) => (
          <ProductCard data={prod} />
        ))}
      </div>
      <AddProductModal
        open={isShowProdModal} // true || false 
        onSuccess={() => setIsShowProdModal(false)}
        onCancel={() => setIsShowProdModal(false)}
      />
    </div>
  );
};

export default Products;
