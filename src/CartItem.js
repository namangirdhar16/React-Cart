import React from 'react';

//class CartItem extends React.Component{
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 1000,
    //         title: "Phone",
    //         qty: 1,
    //         img: "",
    //     }
    // }
    // increaseQty = () => {
    //     const {qty} = this.state;
    //     this.setState({
    //         ...this.state, qty: qty + 1
    //     })
    //     // set state used in conventional way result in batching the calls and shallow merging
    //     // set state is asynchronous when it comes to use it in event handler function, in case of ajax requests or promises, it acts 
    //     // syncronously
    //     // in case of set state using prev state the prev state is updated after every call and the last call is shallow merged if there is 
    //     // chaining of multiple set state calls

    //     // this.setState((prevState) => {
    //     //     return {
    //     //         qty: prevState.qty + 1,
    //     //     }
    //     // })
    //     // this.setState((prevState) => {
    //     //     return {
    //     //         qty: prevState.qty + 1,
    //     //     }
    //     // })
    //     // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1,
        //     }
        // })
        // this.setState({
        //     qty: qty + 1
        // })
        // this.setState({
        //     qty: qty + 2
        // })
   // }
    // decreaseQty = () => {
    //     let {qty} = this.state;
    //     qty = (qty) > 0 ? qty - 1 : 0;
    //     this.setState({
    //         ...this.state, qty: qty
    //     })
    // }
    // deleteItem = () => {
    //     const {qty} = this.state;
    //     this.setState({
    //         ...this.state, qty: 0
    //     })
    // }
    // render() {
    //     const {price, title, qty} = this.props;
    //     console.log(this.props);
    //     console.log("render");
    //     return (
    //         <div className="cart-item">
    //             <div className="left-block">
    //             <img style = {styles.image} />
    //             </div>
    //             <div className="right-block">
    //                 <div style = {{fontSize: 25}}>{price}</div>
    //                 <div style = {{color: "#777"}}>{title}</div>
    //                 <div style = {{color: "#777"}}>{qty}</div>
    //                 <div className="cart-item-actions">
    //                     <img src = "https://cdn-icons-png.flaticon.com/512/54/54373.png" className = "action-icons" onClick = {() => this.props.onDecQty(this.props)}/>
    //                     <img src = "https://cdn-icons-png.flaticon.com/512/983/983901.png" className = "action-icons" onClick = {() => this.props.onIncQty(this.props)}/>
    //                     <img src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png" className = "action-icons" onClick = {this.deleteItem}/>
    //                 </div> 
    //             </div>
                
    //         </div>
    //     )
        
    // }
// }
const CartItem = (props) => {
  
        const {price, title, qty} = props;
        console.log(props);
        console.log("render");
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
                        <img src = "https://cdn-icons-png.flaticon.com/512/54/54373.png" className = "action-icons" onClick = {() => props.onDecQty(props)}/>
                        <img src = "https://cdn-icons-png.flaticon.com/512/983/983901.png" className = "action-icons" onClick = {() => props.onIncQty(props)}/>
                        <img src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png" className = "action-icons" onClick = {() => props.onDelQty(props)}/>
                    </div> 
                </div>
                
            </div>
        )
        
    
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