import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageBookDetails from '../ManageBookDetails/ManageBookDetails';
import './ManageBook.css';

const ManageBook = ({pd}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-waters-97250.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <div className="managebook-container">
            {
                product.map(pd => <ManageBookDetails pd={pd}></ManageBookDetails> )
            }          
        </div>
    );
};

export default ManageBook;