



// import { TiArrowDownThick } from "react-icons/ti";
// import { FaStarAndCrescent } from "react-icons/fa6";
// import { FcIdea } from "react-icons/fc";
// import { PiStarOfDavidDuotone } from "react-icons/pi";
// import { FaArrowRight } from "react-icons/fa";
// import feature01 from "../../assets/igbolanding.jpg";

// import feature02 from "../../assets/igbolanding-02.webp"; // Replace with correct images
// import feature03 from "../../assets/Igbo-landing.webp";

// const FeaturedBook = () => {
//   return (
//     <section className="bg-gray-100 py-16 flex flex-col items-center w-full border-2 border-Terracotta-Red">
//       {/* Header */}
//       <div className="text-center text-gray-500 text-4xl font-semibold flex flex-col items-center gap-2">
//         <h1>Join our growing network</h1>
//         <TiArrowDownThick size={30} />
//       </div>

//       {/* Cards Container */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-6 w-[90%] max-w-[1200px]">
        
//         {/* Card 1 */}
//         <div className="w-[100%] md:w-[95%] lg:w-[30%] bg-white rounded-lg shadow-md border p-5 flex flex-col justify-between hover:shadow-lg transition">
//           <div className="flex flex-col gap-4">
//             <FaStarAndCrescent size={24} className="text-orange-500" />
//             <h2 className="text-xl font-semibold">Start Selling</h2>
//             <p className="text-gray-600 text-sm">
//               Are you a restaurant owner looking to grow your business? Reach
//               new customers when you join our network.
//             </p>
//           </div>
//           <button className="flex items-center gap-2 text-blue-500 font-medium">
//             See more <FaArrowRight />
//           </button>
//           <img src={feature01} alt="Start Selling" className="w-full h-[30%] object-cover rounded-md" />
//         </div>

//         {/* Card 2 */}
//         <div className="w-[100%] md:w-[95%] lg:w-[30%] bg-white rounded-lg shadow-md border p-5 flex flex-col justify-between hover:shadow-lg transition">
//           <div className="flex flex-col gap-4">
//             <FcIdea size={24} />
//             <h2 className="text-xl font-semibold">Deliver Happiness</h2>
//             <p className="text-gray-600 text-sm">
//               Join our elite league of delivery riders delivering happiness to customers.
//             </p>
//           </div>
//           <button className="flex items-center gap-2 text-blue-500 font-medium">
//             See more <FaArrowRight />
//           </button>
          
//           <img src={feature02} alt="Deliver Happiness" className="w-full h-[40%] object-cover rounded-md" />
//         </div>

//         {/* Card 3 */}
//         <div className="w-[100%] md:w-[95%] lg:w-[30%] bg-white rounded-lg shadow-md border p-5 flex flex-col justify-between hover:shadow-lg transition">
//           <div className="flex flex-col gap-4">
//             <PiStarOfDavidDuotone size={24} className="text-blue-500" />
//             <h2 className="text-xl font-semibold">Behind the Scenes</h2>
//             <p className="text-gray-600 text-sm">
//               If you are passionate about helping us achieve our goal, come join the team.
//             </p>
//           </div>
//           <button className="flex items-center gap-2 text-blue-500 font-medium">
//             See more <FaArrowRight />
//           </button>
//           <img src={feature03} alt="Behind the Scenes" className="w-full h-[30%] object-cover rounded-md" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedBook;



import { TiArrowDownThick } from "react-icons/ti";
import { FaStarAndCrescent } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { PiStarOfDavidDuotone } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import feature01 from "../../assets/igbolanding.jpg";
import feature02 from "../../assets/igbolanding-02.webp"; 
import feature03 from "../../assets/igbolanding.webp";

const FeaturedBook = ({title,text,images}) => {
  return (
    <section className=" bg-Earthy-Brown py-16 flex flex-col items-center w-full border-2 border-Terracotta-Red">
      {/* Header */}
      <div className="text-center text-gray-500 text-4xl font-semibold flex flex-col items-center gap-2">
        <h1>Join our growing network</h1>
        <TiArrowDownThick size={30} />
      </div>

      {/* Cards Container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-6 w-[90%] max-w-[1200px]">
        
        {/* Card 1 */}
        <div className="w-full md:w-[95%] lg:w-[35%] bg-white rounded-lg shadow-md border-5 hover:shadow-lg transition flex flex-col justify-between">
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
        <div className="w-full md:w-[95%] lg:w-[35%] bg-white rounded-lg shadow-md border-5 hover:shadow-lg transition flex flex-col justify-between">
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
        <div className="w-full md:w-[95%] lg:w-[35%] bg-white rounded-lg shadow-md border-5 hover:shadow-lg transition flex flex-col justify-between">
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
