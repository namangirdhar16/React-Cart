import React from 'react';
import CartItem from './CartItem';


const Cart = (props) => {
    
    const {products} = props;
    
    console.log(products);
    return (
        <div className = "cart">
            {products.map(({qty, title, img, price, id}, idx) => 
            
                <CartItem key = {idx} idx = {idx} id = {id} qty = {qty} title = {title} img = {img} price = {price} onIncQty = {props.handleIncQty} onDecQty = {props.handleDecQty} onDelQty = {props.handleDelQty}/>)}
        </div>
    )
    
}
export default Cart;