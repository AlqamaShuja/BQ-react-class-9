import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const ProductsDetails = () => {
    const { id } = useParams();

    function getProducts() {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          console.log(res.data, "saacascsacsasac");
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
      ProductsDetails
    </div>
  )
}

export default ProductsDetails
