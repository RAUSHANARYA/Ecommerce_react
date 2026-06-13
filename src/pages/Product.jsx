import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Loading from "../assets/Loading.gif";

const Product = () => {

  // api se aayega product use store krne k use state
  const [products, setProducts] = useState([]);

  // for loading track - initially false
  const [isLoading, setIsLoading] = useState(false);

  // for catch error- initial false
  const [isError, setIsError] = useState(false);

  // to show error message initial = ""
  const [errorMessage, setErrorMessage] = useState('');

  // api fetch krne k async - qki wo time lga skta h to use await
  const fetchProducts = async () => {

    try {
      setIsLoading(true);

      const res = await fetch(
        "https://fakestoreapi.com/products"
      );

      // convert to json
      const data = await res.json();

      setProducts(data);

    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // component mount hote hi ek bar call kia only single dependency - so useEffect
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (  // is else // firstagr lodaing true to gif dhekgea 
        <div className="flex justify-center items-center h-screen">
          <img src={Loading} alt="loading" />
        </div>
      ) : (
        <div className="p-10 grid grid-cols-4 gap-5">
   
       
          {isError && (  // show error mesage 
            <h1 className="text-red-500 text-center col-span-4">
              {errorMessage}
            </h1>
          )}

                  
          {products.map((product) => (   // main card start here // use as array so use map 

        <div
  key={product.id}
  className="h-[450px] border rounded-lg p-4 flex flex-col shadow-md"
>
  {/* Image */}
  <div className="h-40">
    <img
      src={product.image}
      alt={product.title}
      className="h-full w-full object-contain"
    />
  </div>

  {/* Content */}
  <div className="flex-1 flex flex-col mt-3">

    {/* Title */}
    <h3 className="font-semibold line-clamp-2">
      {product.title}
    </h3>

    {/* Rating */}
    <div className="flex items-center gap-1 mt-2">
      <span>{product.rating.rate}</span>
      <FaStar className="text-yellow-400" />
      <span>({product.rating.count})</span>
    </div>

    {/* Price */}
    <div className="flex items-center mt-2">
      <LiaRupeeSignSolid />
      <span>{Math.round(product.price * 100)}</span>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
      {product.description}
    </p>

    {/* Button always bottom */}
    <button
      className="
      mt-auto
      bg-amber-400
      hover:bg-amber-500
      rounded-md
      py-2
      font-semibold
      "
    >
      ADD TO CART
    </button>

  </div>
</div>

          ))}

        </div>
      )}
    </>
  );
};

export default Product;