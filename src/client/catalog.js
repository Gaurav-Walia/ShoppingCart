import React from 'react';
import ReactDOM from 'react-dom';
import client from '../server/pg';

class Catalog extends React.Component {
    constructor(props) {
        super();
        var products_list = [];
        let text = "SELECT * from products order_by price";
        client.query(text, values, (err, res) => {
            if(err) {
                console.log(err.msg);
            } else {
                products_list = res.rows;
            }
        });
        this.state = {
            products: products_list
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let text = "INSERT into user_products(user_id, products_id) VALUES(this.props.user, $2 RETURNING *";
        client.query(text, values, (err, res) => {
            if(err) {
                console.log(err.msg);
            } else {
                alert("Products details saved!!");
            }
        });
        event.preventDefault();
    }

    handleCheckout(event) {
        console.log("User checked out successfully");
        ReactDOM.render(<Checkout user={this.props.user}/>, document.getElementById('root'));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button onClick={ this.handleCheckout }>Checkout</button>
                { this.state.products.map(product => (
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
            </div>
            
        );
    }
}

export default Catalog;