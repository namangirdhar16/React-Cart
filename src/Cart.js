import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
            products: [
                { 
                    price: 1000,
                    qty: 2,
                    title: "abc",
                },
                { 
                    price: 1000,
                    qty: 23,
                    title: "abc2",
                },
                { 
                    price: 1000,
                    qty: 2,
                    title: "ab4c",
                },
                
            ]
        }
    }
    render() {
        const {products} = this.state;
        
        console.log(products);
        return (
            <div className = "cart">
                {products.map(({qty, title, price}, idx) => <CartItem key = {idx} qty = {qty} title = {title} price = {price} />)}
            </div>
        )
    }
}
export default Cart;