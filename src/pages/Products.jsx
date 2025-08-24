import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/products/ProductCard";
import BlueButton from "../components/button/BlueButton";
import AddProductModal from "../components/products/AddProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isShowProdModal, setIsShowProdModal] = useState(false);

  function getProducts() {
    // const oldProd = localStorage.getItem("products");
    // if(!oldProd){
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res.data);
          // localStorage.setItem("products", JSON.stringify(res.data))
          setProducts(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    // }
    // else {
    //   const parsedProd = JSON.parse(oldProd);
    //   setProducts(parsedProd)
    // }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const addProducts = (newProd) => {
    console.log(newProd);
    // this is not the good way
    const updatedProducts = [newProd, ...products];
    // localStorage.setItem("products", JSON.stringify(updatedProducts))
    setProducts(updatedProducts);
    setIsShowProdModal(false);
  }

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
        addProducts={addProducts}
        onCancel={() => setIsShowProdModal(false)}
      />
    </div>
  );
};

export default Products;
