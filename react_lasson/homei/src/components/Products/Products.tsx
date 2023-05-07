import React, { useEffect, useState } from 'react';
import type Product from './types/Product';
import  style  from './Product.module.css';
import { Link } from 'react-router-dom';

export default function Products():JSX.Element {

    const [products,setProduct] = useState<Product[]>([]);

    async function fetchProduct():Promise<void> {
        const responce = await fetch("https://fakestoreapi.com/products");
        const arr = await responce.json();
        console.log(arr);
    
            setProduct(arr);

    }
    
    useEffect(()=>{
        fetchProduct();
    });

    return (
        <div>
          <h1>Products</h1>
          <ul className={style.productList}>
            {products.map((product) => (
              <li key={product.id} className={style.productCard}>
                <p className={style.title}>{product.title}</p>
                <img className={style.image} src={product.image} alt="" />
                <p className={style.price}>{product.price}</p>
                <Link className={style.link} to={`${product.id}`}>Посмотреть товар</Link>
              </li>
            ))}
          </ul>
        </div>
      );
}
