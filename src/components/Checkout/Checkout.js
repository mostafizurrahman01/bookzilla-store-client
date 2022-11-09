import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutDetails from '../CheckoutDetails/CheckoutDetails';
import './Checkout.css';

const Checkout = () => {
    
    const {id} = useParams();
    console.log(id);

    const [clickProduct,setClickProduct] =useState({});

    useEffect(() => {
        fetch('https://bookzilla-store-api.onrender.com/product/'+id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // const matchedData = data.find(pd =>pd._id === id)
            setClickProduct(data);
        })
    },[id])

    return (
        <div className="checkout-container">
            <CheckoutDetails clickProduct={clickProduct} ></CheckoutDetails>
        </div>
    );
};

export default Checkout;
