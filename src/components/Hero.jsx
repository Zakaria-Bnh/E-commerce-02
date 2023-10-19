import { Link as ScrollLink } from "react-scroll"
import { woman_hero } from "../assets/index";

const Hero = () => {
// scrolling settings
  const scrollOptions = {
    to: 'Products-Sections',
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
  };

  return (
    <section className="bg-hero bg-cover h-screen bg-center bg-no-repeat"> 
        <div className="container h-screen flex-c-c">
          <div className="flex-column md:flex-c-around gap-12">
            {/* text */}
            <div className=" lg:flex-[.8] flex-column items-center lg:items-start text-start">

                <h3 className="font-semibold text-lg flex-c gap-2"><span className="h-[2px] w-12 bg-red-500 inline-block"></span> NEW TREND</h3>
                <h1 className="text-center lg:text-start text-[3.5rem] md:text-[4.5rem] leading-[1.2] mb-4">AUTUMN SALE <br /> STYLISH <span className="font-bold">WOMENS</span></h1>
                <ScrollLink {...scrollOptions}
                 className="border-b-2 text-lg font-semibold w-fit  border-black cursor-pointer">DISCOVER MORE</ScrollLink>

            </div>
            {/* img */}
            <div className="hidden lg:block max-w-[220px]">

              <img src={woman_hero} alt="" />

            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero