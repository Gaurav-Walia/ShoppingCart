import React from 'react';
import ReactDom, { Component } from 'react-dom';
import products from 'products.json';

class catalog extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    handleCheckout() {

    }
    
    render() {
        <button onCLick={this.handleCheckout}>Checkout</button>
        products.map(product => {
            return (
                <div>
                    <h1>Name</h1>
                    <p>product.name</p>
    
                    <h2>Category</h2>
                    <p>product.category</p>
    
                    <h2>Price</h2>
                    <p>product.price</p>

                    <button id={product.key} onClick={ this.handleClick }>Add to Cart</button>
                </div>
            )
        })
    }
}