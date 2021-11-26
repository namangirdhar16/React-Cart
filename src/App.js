import React from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, onSnapshot, query, deleteDoc} from "firebase/firestore";

class App extends React.Component{

  constructor() {
      super();
      this.state = {
          products: [],
          productCount: 0,
          loading: true,
      }
  }
  componentDidMount() {
           const productsRef = collection(db, "Products")
           const products = query(productsRef);
           onSnapshot(products, (snapshot) => {
             this.setState({ products: snapshot.docs.map((doc) => ({
               ...doc.data(), id: doc.id
             })), loading: false})
           })
          //  console.log(products);
          //  console.log("hello");
           
          //  const getProducts = async () => {
          //    const data = await getDocs(productsRef);
          //    const updatedProducts = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
          //    console.log(updatedProducts); 
          //    this.setState({ products: updatedProducts, loading: false}, () => {
          //      console.log("done");
               
          //    });
          //  }
          //  getProducts();
  }
    handleIncQty = async (product) => {
      // console.log("handle inc qty called!", product.title);
      // let {products, productCount} = this.state;
      // //const idx = products.findIndex((prod) => (prod.title === product.title && prod.price == prod.price));
      // productCount++;
      // //console.log(idx);
      // products[product.idx].qty += 1;
      // this.setState({...products, productCount});
      const newProduct = doc(db, "Products", product.id);
      const newFields = { qty : product.qty + 1};
      await updateDoc(newProduct, newFields);
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
    addProduct = async () => {
      console.log("hello");
      const productsRef = collection(db, "Products")
        await addDoc(productsRef, { title: "glass", qty: 1, price: 10000});
    }
    updateProduct = async() => {
       
    }
  render() {
      return (
        <div className="App">
          <NavBar productCount = {this.state.productCount} />
          <button onClick = {this.addProduct}>Add a product</button>
          {this.state.loading && <h1> loading...</h1>}
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
