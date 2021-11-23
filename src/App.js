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
              },
              { 
                  price: 1000,
                  qty: 0,
                  title: "abc2",
              },
              { 
                  price: 1000,
                  qty: 0,
                  title: "ab4c",
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
    
  render() {
      return (
        <div className="App">
          <NavBar productCount = {this.state.productCount} />
          <Cart products = {this.state.products} handleDecQty = {this.handleDelQty} handleIncQty = {this.handleIncQty} handleDecQty = {this.handleDecQty} />
        </div>
      );
  }
  
}

export default App;
