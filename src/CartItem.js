import React from 'react';

class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            price: 1000,
            title: "Phone",
            qty: 1,
            img: "",
        }
    }
    increaseQty = () => {
        const {qty} = this.state;
        this.setState({
            ...this.state, qty: qty + 1
        })
    }
    decreaseQty = () => {
        let {qty} = this.state;
        qty = (qty) > 0 ? qty - 1 : 0;
        this.setState({
            ...this.state, qty: qty
        })
    }
    deleteItem = () => {
        const {qty} = this.state;
        this.setState({
            ...this.state, qty: 0
        })
    }
    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                <img style = {styles.image} />
                </div>
                <div className="right-block">
                    <div style = {{fontSize: 25}}>{price}</div>
                    <div style = {{color: "#777"}}>{title}</div>
                    <div style = {{color: "#777"}}>{qty}</div>
                    <div className="cart-item-actions">
                        <img src = "https://cdn-icons-png.flaticon.com/512/54/54373.png" className = "action-icons" onClick = {this.decreaseQty}/>
                        <img src = "https://cdn-icons.flaticon.com/png/128/3161/premium/3161837.png?token=exp=1637562318~hmac=e6727c7b1b6fac04d4b3e315224d7384" className = "action-icons" onClick = {this.increaseQty}/>
                        <img src = "https://cdn-icons.flaticon.com/png/128/2581/premium/2581572.png?token=exp=1637562359~hmac=070c20ae03b7268bc0771e4116bff845" className = "action-icons" onClick = {this.deleteItem}/>
                    </div> 
                </div>
                
            </div>
        )
        
    }
}

const styles = {
    image: {
        height: 110, 
        width: 110,
        borderRadius: 4, 
        backgroundColor: "#ccc",
    }
}
export default CartItem;