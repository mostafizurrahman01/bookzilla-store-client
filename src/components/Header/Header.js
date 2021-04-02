import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Heade.css';
import logo from '../../images/logo.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.name);
    const history = useHistory();
    const handleSignIn = () => {
        history.replace("/login")
    }

    return (
        <div className="header">
            <nav className="nav">
                <ul>
                    <li className="logo-img">
                        <img className="logo"src={logo} alt="" ></img>                      
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">Deals</Link>
                    </li>
                    {
                        <li className="userName">{loggedInUser.name || loggedInUser.displayName}</li>
                    }
                    <li>
                        {
                            loggedInUser.email ? <button className="btn-login1" onClick={() => setLoggedInUser({})}>Logout</button> : <button className="btn-login1" onClick={handleSignIn} >Login</button>
                        }
                    </li>
                </ul>
            </nav>
        </div>


    );
};

export default Header;