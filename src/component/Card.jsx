import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Card = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [escuelaProducts, setEscuelaProducts] = useState([]);

  // Fetch products data from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')  // Fetching all products from Fake Store API
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  // Fetch products data from Escuela API
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setEscuelaProducts(data))
      .catch(err => console.error(err));
  }, []);

  // If the products data hasn't loaded yet, show a loading state
  if (!products.length && !escuelaProducts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {/* First API (Fake Store API) Products */}
      {products.map((product) => (
        <div key={product.id} className='flex flex-row'>
          <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img className="object-cover" src={product.image} alt={product.title} />
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={() => addToCart(product)}
              >
                <FaShoppingCart className="mr-2" />
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Second API (Escuela API) Products */}
      {escuelaProducts.map((product) => (
        <div key={product.id} className='flex flex-row'>
          <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img className="object-cover" src={product.images[0]} alt={product.title} />
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={() => addToCart(product)}
              >
                <FaShoppingCart className="mr-2" />
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
