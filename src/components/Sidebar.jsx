import { useContext } from "react";

// component
import { PrimaryButton } from "./index";
// react icons
import { BiArrowFromLeft, BiSolidTrash } from "react-icons/bi";
//contexts
import { SidebarContext } from "../contexts/SidebarContext";
import { Cartcontext } from "../contexts/CartContext";
import Cartitem from "./Cartitem";

const Sidebar = () => {
  const { showSidebar, handleSidebar, handletrashcan } = useContext(SidebarContext);
  const { cart, purchases, total, setcart } = useContext(Cartcontext);

  return (
    <section
      className={` bg-gray-100 ${
        showSidebar ? "right-0" : "-right-[100%]"
      } fixed top-0 w-full sm:w-[60%] lg:max-w-[450px] h-screen transition-all duration-300 shadow-2xl`}
    >
      {/* the wholde column */}
      <div className="px-4 flex-column gap-4 h-full">
        {/* the title of the sidebar */}
        <div className="flex-c-between py-6 border-b border-gray-300">
          <h3 className="font-medium">SHOPPING BAG ({purchases}) </h3>
          <BiArrowFromLeft
            onClick={() => handleSidebar()}
            className="text-3xl cursor-pointer"
          />
        </div>

        {/* the products */}
        <div className="flex-1 max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {cart.map((product) => (
            <Cartitem product={product} />
          ))}
        </div>

          {/* ths is the checkout and the card payment */}
          <div className="justify-self-end">
              <div className="flex-c-between py-2 border-t border-gray-300">
                <h2 className="font-bold text-lg">TOTAL: ${parseFloat(total).toFixed(2)}</h2>
                <BiSolidTrash onClick={() => handletrashcan(setcart)} className="text-3xl bg-gray-50 text-red-500 rounded-md cursor-pointer" />
              </div>
                {/* the buttons */}
              <div className="flex-column gap-4 mb-4">
                <PrimaryButton
                  buttontext="VIEW CART"
                  additionalStyles="border-2 group-hover:border-gray-400 group-hover:shadow-md"
                />
                <PrimaryButton
                  buttontext="CHECKOUT"
                  additionalStyles="bg-gray-800 text-white hover:opacity-100"
                />
              </div>

          </div>
          {/* total and delete */}
      </div>
    </section>
  );
};

export default Sidebar;
