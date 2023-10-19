import { useContext } from "react";
import { Product, Hero } from "../components/index.js";
// products array
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products, 'form home js')
  return (
    <main>
      <Hero />

      <section id="Products-Sections" className=" container py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {products.map(item => (
              <Product key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
