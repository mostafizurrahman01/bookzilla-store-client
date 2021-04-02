import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './BookCard.css';
import { Link } from 'react-router-dom';

const BookCard = ({product}) => {
    
    const history = useHistory();

    const handleCheckout = () => {
        history.push(`/checkout/${product._id}`);
    }
  
    return (
        <div id='card'>
            <div className='card-container' >
                <div className="image-container">
                    <img src={product.imageURL} alt="" />
                </div>

                <div className="card-content">
                    <div className="card-title">
                        <h3>{product.bookName}</h3>
                        <p>{product.authorName}</p>
                    </div>
                </div>

                <div className="btn">
                    <p><span className="price">${product.Price} </span> <span><Link to='/checkout/${_id}'></Link><button onClick={handleCheckout}  className="btn-modify">Buy Now</button></span></p>
                </div>


            </div>
        </div>

    );
};

export default BookCard;