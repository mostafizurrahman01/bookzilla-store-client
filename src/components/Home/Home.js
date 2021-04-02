import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import './Home.css';



const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-waters-97250.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [products])

    return (
        <div className="product-container">
            {
                products.length === 0 && <p><CircularProgress /></p>
            }
            {
                products.map(product => <BookCard product={product} id={product._id} ></BookCard>)
            }

        </div>
    );
};

export default Home;