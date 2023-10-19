// hooks and ..
import { useEffect, useState, useContext } from "react";
//contexts
import {SidebarContext} from '../contexts/SidebarContext'
import { Cartcontext } from "../contexts/CartContext";
// link and routing
import { Link } from "react-router-dom";
  // icons from react
import { BiShoppingBag } from "react-icons/bi";
//  logo from local files
import {logo} from '../assets/index'
// components 
import Sidebar from "./Sidebar";





const Header = () => {
    const {purchases} = useContext(Cartcontext)
    //states defining
    const [headerscroll, setheaderscroll] = useState(false)

    useEffect ( () => {

        const handleshadow = () => (
            window.scrollY > 60 ? setheaderscroll(true) : setheaderscroll(false)
        )
        window.addEventListener('scroll', handleshadow)
        return () => {
            window.removeEventListener('scroll', handleshadow)
        }
    }, [])

    // context data
    const {showSidebar, handleSidebar} = useContext(SidebarContext)
    



  return (
    <header className={`fixed z-20 w-full  py-4 ${headerscroll ? 'bg-gray-100 shadow-lg' : ''}`}>
      <div className=" container flex item-center justify-between">
        <div className="max-w-[35px]">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div onClick={() => handleSidebar()} className="relative cursor-pointer">
          <BiShoppingBag className="text-3xl" />
          <div className="absolute text-sm -bottom-1 -right-1 bg-green-500 rounded-full  w-5 h-5 flex-c-c font-secondary leading-3 text-white">{purchases}</div>
        </div>
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
