import React from 'react';
import ReactDom, { Component } from 'react-dom';
import client from '../server/pg';

class Catalog extends Component {
    constructor() {
        super();
        var products_list;
        let text = "SELECT * from products order_by price";
        client.query(text, values, (err, res) => {
            if(err) {
                console.log(err.msg);
            } else {
                products_list = res.rows[0];
            }
        });
        this.state = {
            products: products_list,
            cart: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        client.query(text, values, (err, res) => {
            if(err) {
                console.log(err.msg);
            } else {
                console.log(res.rows[0]);
            }
        });
    }

    handleCheckout(event) {
        this.setState({ cart: event.target.value });

        event.preventDefault();
    }
    
    render() {
        return (
            { productsData.map(product => (
                <div>
                    <h1>Name</h1>
                    <p>{product.name}</p>

                    <h2>Category</h2>
                    <p>{product.category}</p>
                    
                    <h2>Price</h2>
                    <p>{product.price}</p>

                    <button id={product.key} onClick={ this.handleClick }>Add to Cart</button>
                </div> 
            ))}
        );
    }
}

export default Catalog;