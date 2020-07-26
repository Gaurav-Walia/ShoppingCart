import React from 'react';
import ReactDOM from 'react-dom';
import client from "../server/pg";
import Catalog from './Catalog';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "Enter your name...",
            email: "Enter your email address...",
            age: "Enter your age...",
            gender: "Enter your gender...",
            delivery_address: "Enter delivery address...",
            billing_address: "Enter billing address...",
            user: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const text = "INSERT into users(name, email, age, gender, delivery_address, billing_address) VALUES($1, $2, @3, $4, #5, $6 RETURNING *"
        client.query(text, values, (err, res) => {
            if(err) {
                console.log(err.msg);
            } else {
                this.setState({ user: res.rows[0]});
            }
        });

        ReactDOM.render(<Catalog user={this.state.user} />, document.getElementById('root'));
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.title}></input>
    
                <label>Email</label>
                <input type="text" name="email" value={this.state.email}></input>
    
                <label>Age</label>
                <input type="text" name="age" value={this.state.age}></input>
    
                <label>Gender</label>
                <select name="gender" value={this.state.gender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
    
                <label>Delivery Address</label>
                <input type="textarea" name="delivery_address" value={this.state.delivery_address}></input>
    
                <label>Billing Address</label>
                <input type="textarea" name="billing_address" value={this.state.billing_address}></input>
    
                <input type="submit" value="Register"></input>
            </form> 
        )
    }
}

export default Register;
