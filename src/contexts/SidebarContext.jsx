import { Children, createContext, useContext, useState } from "react";



export const  SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // states
  const [showSidebar, setshowSidebar] = useState(false);


  // handling sidebar open && close
  const handleSidebar = () => {
    setshowSidebar(!showSidebar)
  }

  // handling the trash can
  const handletrashcan = (setcart) => {
    setcart([])
  }



  return <SidebarContext.Provider value={{showSidebar, handleSidebar, handletrashcan}}>{children}</SidebarContext.Provider>;
};



export default SidebarProvider;
