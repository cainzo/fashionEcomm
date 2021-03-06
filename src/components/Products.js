import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat ? `http://localhost:5000/api/products?cat=${cat}` : "http://localhost:5000/api/products"
      );
      setProducts(res.data);
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    
  }, [products, cat, filter]);

  useEffect(() => {
    
    if(( sort === "newest")){
      setFilteredProducts((prev)=>[...prev].sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt)));
    }else if( (sort === "asc")){
      setFilteredProducts((prev)=>[...prev].sort((a,b)=> a.price - b.price));
    }else{
        setFilteredProducts((prev)=>[...prev].sort((a,b)=> b.price - a.price));
    }

  }, [sort]);

  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product key={item._id} item={item}></Product>
      )): products.slice(0, 8).map((item) => (
        <Product key={item._id} item={item}></Product>
      ))}
    </Container>
  );
};

export default Products;
