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
    handleIncQty = (product) => {
        console.log("handle inc qty called!", product.title);
        const {products} = this.state;
        //const idx = products.findIndex((prod) => (prod.title === product.title && prod.price == prod.price));

        //console.log(idx);
        products[product.idx].qty += 1;
        this.setState(products);

    } 
    handleDecQty = (product) => {
        const {products} = this.state;
        products[product.idx].qty = products[product.idx].qty > 0 ? products[product.idx].qty - 1 : 0;
        this.setState(products);
    }
    render() {
        const {products} = this.state;
        
        console.log(products);
        return (
            <div className = "cart">
                {products.map(({qty, title, price}, idx) => 
                
                   <CartItem key = {idx} idx = {idx} qty = {qty} title = {title} price = {price} onIncQty = {this.handleIncQty} onDecQty = {this.handleDecQty} />)}
            </div>
        )
    }
}
export default Cart;