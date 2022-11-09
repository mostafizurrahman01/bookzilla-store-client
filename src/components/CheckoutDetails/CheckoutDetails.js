import { Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './CheckoutDetails.css';

const CheckoutDetails = (props) => {
    const { bookName, Price, _id } = props.clickProduct;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const productName = bookName;
    const productId = _id;
    const productPrice = Price;

    const history = useHistory();

    const handleOrderPlaced = () => {
        
        
        const orderDetails = { ...loggedInUser, productName, productId, productPrice, orderTime: new Date() }
        console.log('checkout clicked');
        fetch('https://bookzilla-store-api.onrender.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed successfully.');
                }
            })
        history.push('/orders');
    }

    return (
        <div>
            <h2>CheckOut</h2>
            <div className="checkoutDetails-container" >
                <Grid container spacing={3} className="inner-container">
                    <Grid item xs={5} sm={4} className="description underline">
                        <h3>Description</h3>
                        <h6>{bookName}</h6>
                        <br />
                        <p>Total</p>
                    </Grid>
                    <Grid item xs={4} sm={4} className="quantity underline">
                        <h3>Quantity</h3>
                        <p>{1}</p>

                    </Grid>
                    <Grid item xs={3} sm={4} className="price2 underline">
                        <h3>Price</h3>
                        <p>{Price}</p>
                        <br />
                        <p></p>
                        <p>{Price}</p>
                    </Grid>
                </Grid>
            </div>
            <div className="btn-checkout">
                <button className="btn-success" onClick={handleOrderPlaced}>Checkout</button>
            </div>
        </div>
    );
};

export default CheckoutDetails;
