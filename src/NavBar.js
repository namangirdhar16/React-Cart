import React from 'react';

const NavBar = (props) => {
    return (
       <div style = {styles.navbar}>
           <div style = {styles.cartIconContainer}>
               <img style = {styles.cartIcon} src = "https://cdn-icons.flaticon.com/png/128/2543/premium/2543206.png?token=exp=1637650776~hmac=536437ab10a2b59329cf98ca209df5a6" alt = "cart-icon" />
               <span style = {styles.cartCount}>{props.productCount}</span>
           </div>
       </div>
    )
}


const styles = {
    cartIcon: {
       height: 32,
       marginRight: 20,
    },
    navbar: {
      height: 70,
      background: "pink",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    cartCount: {
        padding: "4px 8px",
        background: "red",
        position: "absolute",
        borderRadius: "50%",
        right: 0,
        top: 0,
    }
}
export default NavBar;