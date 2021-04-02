import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('https://sleepy-waters-97250.herokuapp.com/orders?email='+loggedInUser.email,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>setOrders(data))

    }, [loggedInUser])
    return (
        <div className="order-container">
            <h3>Your Order Count : {orders.length}</h3>
            {
                orders.map(book => <li> <p>Product Name: {book.productName}  &&   Order Time: {new Date(book.orderTime).toDateString('dd/MM/yyyy')}</p></li>)
            }
        </div>
    );
};

export default Orders;