import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


import React from 'react'

const Products = () => {

 const [products, setProducts] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(products);





  const handleProductId = (value) => {
    navigate(`/products/${value}`);
  };


  console.log(location)


  return (
    <div>
 <div className="flex gap-6 flex-wrap p-4">
      {products?.map((product) => (
        <div
          key={product?.id}
          onClick={() => handleProductId(product?.id)}
          className="border bg-white relative flex flex-col items-center border-gray-400 rounded-lg w-52 p-2 h-72"
        >
          <img className="w-20 h-20 object-contain" src={product?.image} />
          <h4 className=" w-48 text-center">{product?.title}</h4>
          <p className="text-gray-600 text-xs overflow-y-auto ">{product?.description}</p>
        </div>
      ))}
    </div>






    </div>
  )
}

export default Products