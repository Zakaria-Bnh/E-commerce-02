import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importing components
import { Header, Footer } from "./components/index";
// importing pages
import { Home, ProductDetails } from "./pages/index";
// contexts
import {
  SidebarProvider,
  ProductProvider,
  CartProvider,
} from "./contexts/index";

const App = () => (
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);

export default App;
