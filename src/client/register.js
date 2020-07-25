import React from 'react';


class Register extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>Name</label>
                <input type="text"></input>
    
                <label>Email</label>
                <input type="text"></input>
    
                <label>Age</label>
                <input type="text"></input>
    
                <label>Gender</label>
                <input type="dropdown"></input>
    
                <label>Delivery Address</label>
                <input type="textarea"></input>
    
                <label>Billing Address</label>
                <input type="textarea"></input>
    
                <input type="submit" value="Register"></input>
            </form> 
        )
    }
}
