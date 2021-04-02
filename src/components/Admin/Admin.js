import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Grid, Paper } from '@material-ui/core';
import { Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';
import { useHistory } from 'react-router';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const history = useHistory();
    const handleSave = () => {
        history.push('/admin')
    }


    const onSubmit = data => {
        const eventData = {
            bookName: data.bookName,
            authorName: data.authorName,
            Price: data.Price,
            imageURL: imageURL
        };
        console.log(eventData);
        const url = `https://sleepy-waters-97250.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c61558e6e8b84e9a450363caf0b321f5');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response)
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleManageBook =()=>{
        history.push('/manageBooks')
    }
    return (
        <div className="admin">
            {/* <h1>Add your awesome Event here</h1> */}
            <div className="admin-container" >
                <Grid container spacing={5} >
                    <Grid item xs={2} className="btn-section">
                        <Button variant="primary" onClick={handleManageBook}>Manage Books</Button>
                        <br />
                        <Button variant="secondary"> {"+"} Add Book</Button>
                        <br />
                        <Button variant="success">Edit Book</Button>
                        <br />
                    </Grid>

                    <Grid item xs={9} className="form-container">
                        <div  className="add-title">
                            <h4 >Add Book</h4>
                        </div>

                        <Form onSubmit={handleSubmit(onSubmit)} className="input-form">
                            <Row>
                                <Col className="form-modify">
                                    <Form.Label>Book Name</Form.Label>

                                    <Form.Control name="bookName" defaultValue="" ref={register} />
                                    {/* <Form.Control placeholder="bookName" ref={register} /> */}
                                    <Form.Label>Add Price</Form.Label>
                                    <Form.Control name="Price" defaultValue="" ref={register} />
                                </Col>
                                <Col className="form-modify2">
                                    <Form.Label>Author Name</Form.Label>
                                    <Form.Control name="authorName" defaultValue="" ref={register} />
                                    <Form.Label>Add Book Cover Photo</Form.Label>
                                    <Form.File
                                        id="custom-file-translate-scss"
                                        lang="en"
                                        onChange={handleImageUpload}
                                    />
                                </Col>
                                <Col className="btn">
                                    <button className="btn-modify2" onClick={handleSave}>Save</button>
                                </Col>
                            </Row>
                        </Form>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
};

export default Admin;

