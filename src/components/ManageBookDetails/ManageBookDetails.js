import React from 'react';
import './ManageBookDetails.css';

const ManageBookDetails = ({pd}) => {

    

    const deleteProduct = (event,_id) =>{
        console.log('clicked');
        fetch(`https://bookzilla-store-api.onrender.com/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('successfully deleteProduct')
                }
            })
    }

    return (
        <div>
            <table id='product'>
                <tbody>
                    <tr className='table-body'>
                        <td className='table-book'>{pd.bookName}</td>
                        <td className='table-author'>{pd.authorName}</td>
                        <td className='table-price'>{pd.Price}</td>
                        <td className='table-btn'> <button onClick={() => deleteProduct('event',pd._id)} >delete</button></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageBookDetails;
