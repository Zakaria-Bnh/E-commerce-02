// hooks 
import { useContext } from "react";
// icons
import { IoMdClose } from "react-icons/io";
// constexts
import { Cartcontext } from "../contexts/CartContext";



const Cartitem = ({ product }) => {

  const {removefromcart, addpurchase, decreaseamount} = useContext(Cartcontext)


    const {image, title, price, amount} = product
  return (
    <div className="flex justify-between gap-8 border-b pb-4 mb-8">
      {/* IMAGE */}
      <div className="">
        <img className="max-w-[80px]" src={image} alt="" />
      </div>
      {/* text */}
      <div className="flex-1 flex-column justify-around px-3">
        {/* first row */}
        <div className="flex justify-between gap-4">
          <h2 className="text-lg">{title}</h2>
          <div onClick={() => removefromcart(product)} className=" cursor-pointer group">
            <IoMdClose className="text-2xl group-hover:text-red-500 " />
          </div>
            
        </div>
        {/* second row */}
        <div className="flex-c-between">
          {/* amount && orginal price */}
          <div className="flex-c gap-4">
            <div className="flex-c-c px-2 py-1 gap-4 border border-gray-400">
              <button onClick={() => decreaseamount(product)}>-</button>
              <p className="text-lg">{amount}</p>
              <button onClick={() => addpurchase(product)}>+</button>
            </div>
            <p className="text-lg text-gray-600">${parseFloat(price).toFixed(2)}</p>
          </div>
          {/* final price */}
          <p className="text-lg">${parseFloat(price * amount).toFixed(2) }</p>
        </div>
      </div>
    </div>
  );
};
export default Cartitem;
