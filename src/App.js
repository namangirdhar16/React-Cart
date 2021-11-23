import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component{

  constructor() {
      super();
      this.state = {
          products: [
              { 
                  price: 1000,
                  qty: 0,
                  title: "abc",
                  img: "https://images.unsplash.com/photo-1608322368442-2db3b4090724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80"
              },
              { 
                  price: 1000,
                  qty: 0,
                  title: "abc2",
                  img: "https://images.unsplash.com/photo-1616448199842-83fabbc09798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVoaWNsZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
              },
              { 
                  price: 1000,
                  qty: 0,
                  title: "ab4c",
                  img: "https://media.istockphoto.com/photos/aluminum-ball-in-midair-picture-id1142178898?b=1&k=20&m=1142178898&s=170667a&w=0&h=IAo4LFGXpA-ECNtEmQdQMMSz6TEo6lTz6CJvaklsEXs="
              },
              
          ],
          productCount: 0
      }
  }
    handleIncQty = (product) => {
      console.log("handle inc qty called!", product.title);
      let {products, productCount} = this.state;
      //const idx = products.findIndex((prod) => (prod.title === product.title && prod.price == prod.price));
      productCount++;
      //console.log(idx);
      products[product.idx].qty += 1;
      this.setState({...products, productCount});

  } 
    handleDecQty = (product) => {
        let {products, productCount} = this.state;
        productCount = productCount > 0 ? productCount - 1 : 0;
        products[product.idx].qty = products[product.idx].qty > 0 ? products[product.idx].qty - 1 : 0;
        this.setState({...products, productCount});
    }
    handleDelQty = (product) => {
        const {products, productCount} = this.state;
      
        delete products[product.idx];
        this.setState({
          ...products});
    }
    getTotalVal = () => {
      let total = 0;
      this.state.products.forEach((product) => {
        total += product.qty * product.price;
      })
      return total;
    }
    
  render() {
      return (
        <div className="App">
          <NavBar productCount = {this.state.productCount} />
          <Cart products = {this.state.products} handleDelQty = {this.handleDelQty} handleIncQty = {this.handleIncQty} handleDecQty = {this.handleDecQty} />
          <div style = {styles.totalVal}>Total: {this.getTotalVal()}</div>
        </div>
      );
  }
  
}

const styles = {
  totalVal: {
     padding: 10, 
     fontSize: 20
  }
}
export default App;
