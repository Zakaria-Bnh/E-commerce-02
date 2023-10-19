import { useEffect, useState } from "react";
import { createContext } from "react";

export const Cartcontext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setcart] = useState([]);
  const [purchases, setpurchases] = useState(0);
  const [total, setotal] = useState(0)

  //  add to cart
  const addtocart = (product) => {
    const newitem = cart.find((item) => item.id === product.id);
    if (newitem) {
      setcart(
        cart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setcart([...cart, { ...product, amount: 1 }]);
    }
  };

  //  remove from
  const removefromcart = (product) => {
    setcart(
      cart.filter((item) => {
        return item.id !== product.id;
      })
    );
  };

  //  getting the purchases number
  useEffect( () => (
      setpurchases(
        cart.reduce((acc, curr) => {
            return acc + curr.amount;
        }, 0)
        )
    )
  );

  // adding items 
  const addpurchase = (product) => {
    addtocart(product)
  }

  // decreasing items
  const decreaseamount = (product) => {
    if(product.amount >= 2) {
        setcart(
            cart.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount - 1 } : item
            )
            );
        }
  }

  // total price 
  useEffect(() => {
    setotal(cart.reduce((acc, curr) => {
        return acc + curr.amount * curr.price
  }, 0))
  })



  return (
    <Cartcontext.Provider value={{ addtocart,setcart, removefromcart, addpurchase, decreaseamount, total, purchases, cart }}>
      {children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
