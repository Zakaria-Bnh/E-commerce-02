// hooks
import { useContext } from "react";
// routing
import { Link } from "react-router-dom";
// components
import {PrimaryButton} from "./index";
// contexts
import { Cartcontext } from "../contexts/CartContext";
// react icons
import { BsEye } from "react-icons/bs"




const Product = ({ product }) => {

  const {addtocart} = useContext(Cartcontext)

  return (
    <div className="flex-column items-center mx-auto group transition-all">
      <div className="max-w-xs">
        <div className="relative h-[250px] overflow-hidden pt-8  border border-gray-200 shadow-lg group-hover:shadow-primary flex-column items-center mb-4">
          <img
            className="group-hover:scale-110 px-12 duration-300 max-h-[180px] lg:max-h-[200px]"
            src={product.image}
            alt={product.category} />
            <div className="flex gap-x-1 w-full absolute -bottom-full group-hover:bottom-0 transition-all duration-300">
              <PrimaryButton onClick={() => addtocart(product)} buttontext="ADD TO CART" additionalStyles="flex-1 bg-gray-800 text-white hover:opacity-100" />
              <Link to={`/product`} className="bg-gray-800 py-2 px-4 rounded cursor-pointer">
                  <BsEye className="text-white" />
              </Link>
            </div>
        </div>

          <div className="shadow-md  flex-column py-4 px-2">
            <div className="h-[120%] ">
              <h3 className=" text-gray-600">{product.category}</h3>
              <h2 className="flex-1 text-xl mb-4">{product.title}</h2>
              <p className="justify-self-end font-bold text-xl ml-auto w-fit">${product.price}</p>
            </div>
          </div>


      </div>
    </div>
  );
};

export default Product;
