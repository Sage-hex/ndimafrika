import { TiArrowDownThick } from "react-icons/ti";
import { FaStarAndCrescent } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { PiStarOfDavidDuotone } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import feature01 from "../../assets/igbolanding.jpg";
import feature02 from "../../assets/igbolanding-02.webp"; 
import feature03 from "../../assets/igbolanding.webp";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const FeaturedBook = ({title,text,images}) => {

  useEffect(() => {
    AOS.init({
      duration: 800, // You can also pass specific settings here
    });
  }, []);
  return (
    <section className=" bg-Cream-Beige py-16 flex flex-col items-center w-full mb-[3rem]" data-aos="fade-up"
    data-aos-delay="200">
      {/* Header */}
      <div className="sm:text-left text-gray-500 text-4xl font-semibold flex items-center gap-2">
        <h1 className="text-Earthy-Brown text-3xl px-4 md:text-5xl  lg:text-7xl">Books from the Library</h1>
        <TiArrowDownThick size={50} className="" />
      </div>

      {/* Cards Container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-6 w-[90%] max-w-[1200px]">
        
        {/* Card 1 */}
        <div className="w-full md:w-[95%] lg:w-[35%]  bg-white rounded-lg shadow-md border-5 border-Earthy-Brown flex flex-col justify-between hover:shadow-lg transition transform hover:scale-105">
          <div className="p-5 flex flex-col gap-4 flex-grow">
            <FaStarAndCrescent size={24} className="text-orange-500" />
            <h2 className="text-xl font-semibold">Start Selling</h2>
            <p className="text-gray-600 text-sm">
              Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.
            </p>
            <button className="flex items-center gap-2 text-blue-500 font-medium">
              See more <FaArrowRight />
            </button>
          </div>
          <img src={feature01} alt="Start Selling" className="w-full h-[45%] object-cover rounded-b-md" />
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[95%] lg:w-[35%] bg-white rounded-lg shadow-md border-5 border-Earthy-Brown hover:shadow-lg transition flex flex-col justify-between">
          <div className="p-5 flex flex-col gap-4 flex-grow">
            <FcIdea size={24} />
            <h2 className="text-xl font-semibold">Deliver Happiness</h2>
            <p className="text-gray-600 text-lg">
              Join our elite league of delivery riders delivering happiness to customers.
            </p>
            <button className="flex items-center gap-2 text-blue-500 font-medium">
              See more <FaArrowRight />
            </button>
          </div>
          <img src={feature02} alt="Deliver Happiness" className="w-full h-[45%]  object-cover rounded-b-md" />
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[95%] lg:w-[35%] bg-white rounded-lg shadow-md border-5 border-Earthy-Brown hover:shadow-lg transition flex flex-col justify-between">
          <div className="p-5 flex flex-col gap-4 flex-grow">
            <PiStarOfDavidDuotone size={24} className="text-blue-500" />
            <h2 className="text-xl font-semibold">Behind the Scenes</h2>
            <p className="text-gray-600 text-sm">
              If you are passionate about helping us achieve our goal, come join the team.
            </p>
            <button className="flex items-center gap-2 text-blue-500 font-medium">
              See more <FaArrowRight />
            </button>
          </div>
          <img src={feature03} alt="Behind the Scenes" className="w-full h-[45%] object-cover rounded-b-md" />
        </div>

        
      </div>
      
    </section>
  );
};

export default FeaturedBook;
