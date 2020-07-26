import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super();
        var products_list = [];
        let text = "SELECT * from products, user_products where user_products.user_id = this.props.user";
        client.query(text, values, (err, res) => {
            if(err) {
                console.log(err.msg);
            } else {
                products_list = res.rows;
            }
        });
        this.state = {
            products: products_list,
            cart: []
        };
    }

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>-----------------------</p>
                <p>ORDER</p>
                { this.state.products.map(product => (
                    <div>
                        <h1>Name</h1>
                        <p>{product.name}</p>

                        <h2>Category</h2>
                        <p>{product.category}</p>
                        
                        <h2>Price</h2>
                        <p>{product.price}</p>
                    </div> 
                ))}
            </div>
        )
    }
}

export default Checkout;