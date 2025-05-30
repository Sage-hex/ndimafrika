

// import { useState } from "react";

// // Sample Story Data
// const stories = [
//   {
//     id: 1,
//     title: "Kanem Borno Empire",
//     description: "A historical African empire that thrived for centuries.",
//     era: "Ancient",
//     culture: "Hausa",
//     region: "West Africa",
//     type: "Historical",
//     vr: true,
//     image: "https://via.placeholder.com/300", // Replace with actual images
//   },
//   {
//     id: 2,
//     title: "The Nigerian Civil War",
//     description: "A war that reshaped Nigeria’s history.",
//     era: "Modern",
//     culture: "Igbo",
//     region: "West Africa",
//     type: "Historical",
//     vr: false,
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 3,
//     title: "Aare Ona Kakanfo Afonja",
//     description: "The story of a fearless Yoruba warlord.",
//     era: "Pre-Colonial",
//     culture: "Yoruba",
//     region: "West Africa",
//     type: "Folklore",
//     vr: true,
//     image: "https://via.placeholder.com/300",
//   },
// ];

// const StoryLibrary = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
//   const [filters, setFilters] = useState({
//     era: "",
//     culture: "",
//     region: "",
//     type: "",
//   });

//   // Handle Search
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Handle Filter Change
//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   // Filtered Stories
//   const filteredStories = stories.filter((story) => {
//     return (
//       story.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (filters.era ? story.era === filters.era : true) &&
//       (filters.culture ? story.culture === filters.culture : true) &&
//       (filters.region ? story.region === filters.region : true) &&
//       (filters.type ? story.type === filters.type : true)
//     );
//   });

//   return (
//     <div className="p-6 max-w-6xl mx-auto w-full min-h-screen ">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Story Library</h1>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search stories..."
//           className="mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <select name="era" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Eras</option>
//           <option value="Ancient">Ancient</option>
//           <option value="Pre-Colonial">Pre-Colonial</option>
//           <option value="Modern">Modern</option>
//         </select>

//         <select name="culture" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Cultures</option>
//           <option value="Hausa">Hausa</option>
//           <option value="Igbo">Igbo</option>
//           <option value="Yoruba">Yoruba</option>
//         </select>

//         <select name="region" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Regions</option>
//           <option value="West Africa">West Africa</option>
//         </select>

//         <select name="type" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Types</option>
//           <option value="Historical">Historical</option>
//           <option value="Folklore">Folklore</option>
//         </select>

//         {/* View Mode Toggle */}
//         <button
//           className="ml-auto px-4 py-2 text-sm font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
//           onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
//         >
//           {viewMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
//         </button>
//       </div>

//       {/* Story List/Grid */}
//       <div className={viewMode === "grid" ? "grid md:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
//         {filteredStories.length > 0 ? (
//           filteredStories.map((story) => (
//             <div
//               key={story.id}
//               className="relative bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300"
//             >
//               {/* Story Thumbnail */}
//               <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />

//               {/* Story Content */}
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-gray-900">{story.title}</h2>
//                 <p className="text-gray-600">{story.description}</p>
//                 <div className="mt-2 flex items-center gap-2 text-sm">
//                   <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">{story.era}</span>
//                   <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">{story.culture}</span>
//                 </div>

//                 {/* VR Badge */}
//                 {story.vr && (
//                   <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                     VR Available
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full text-center">No stories found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StoryLibrary;


// import { useState } from "react";

// // Sample Story Data
// const stories = [
//   {
//     id: 1,
//     title: "Kanem Borno Empire",
//     description: "A historical African empire that thrived for centuries.",
//     era: "Ancient",
//     culture: "Hausa",
//     region: "West Africa",
//     type: "Historical",
//     vr: true,
//     image: "https://via.placeholder.com/300", // Replace with actual images
//   },
//   {
//     id: 2,
//     title: "The Nigerian Civil War",
//     description: "A war that reshaped Nigeria’s history.",
//     era: "Modern",
//     culture: "Igbo",
//     region: "West Africa",
//     type: "Historical",
//     vr: false,
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 3,
//     title: "Aare Ona Kakanfo Afonja",
//     description: "The story of a fearless Yoruba warlord.",
//     era: "Pre-Colonial",
//     culture: "Yoruba",
//     region: "West Africa",
//     type: "Folklore",
//     vr: true,
//     image: "https://via.placeholder.com/300",
//   },
// ];

// const StoryLibrary = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
//   const [filters, setFilters] = useState({
//     era: "",
//     culture: "",
//     region: "",
//     type: "",
//   });
//   const [hoveredStory, setHoveredStory] = useState(null);

//   // Handle Search
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Handle Filter Change
//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   // Filtered Stories
//   const filteredStories = stories.filter((story) => {
//     return (
//       story.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (filters.era ? story.era === filters.era : true) &&
//       (filters.culture ? story.culture === filters.culture : true) &&
//       (filters.region ? story.region === filters.region : true) &&
//       (filters.type ? story.type === filters.type : true)
//     );
//   });

//   return (
//     <div className="p-6 max-w-6xl mx-auto mt-[20vh] relative">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Story Library</h1>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search stories..."
//           className="mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <select name="era" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Eras</option>
//           <option value="Ancient">Ancient</option>
//           <option value="Pre-Colonial">Pre-Colonial</option>
//           <option value="Modern">Modern</option>
//         </select>

//         <select name="culture" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Cultures</option>
//           <option value="Hausa">Hausa</option>
//           <option value="Igbo">Igbo</option>
//           <option value="Yoruba">Yoruba</option>
//         </select>

//         <select name="region" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Regions</option>
//           <option value="West Africa">West Africa</option>
//         </select>

//         <select name="type" className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
//           <option value="">All Types</option>
//           <option value="Historical">Historical</option>
//           <option value="Folklore">Folklore</option>
//         </select>

//         {/* View Mode Toggle */}
//         <button
//           className="ml-auto px-4 py-2 text-sm font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
//           onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
//         >
//           {viewMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
//         </button>
//       </div>

//       {/* Story List/Grid */}
//       <div className={viewMode === "grid" ? "grid md:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
//         {filteredStories.length > 0 ? (
//           filteredStories.map((story) => (
//             <div
//               key={story.id}
//               className="relative bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300"
//               onMouseEnter={() => setHoveredStory(story.id)}
//               onMouseLeave={() => setHoveredStory(null)}
//             >
//               {/* Story Thumbnail */}
//               <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />

//               {/* Story Content */}
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-gray-900">{story.title}</h2>
//                 <div className="mt-2 flex items-center gap-2 text-sm">
//                   <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">{story.era}</span>
//                   <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">{story.culture}</span>
//                 </div>

//                 {/* VR Badge */}
//                 {story.vr && (
//                   <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                     VR Available
//                   </span>
//                 )}
//               </div>

//               {/* Story Preview Pop-up */}
//               {hoveredStory === story.id && (
//                 <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white p-4 flex items-center justify-center text-center transition-opacity duration-300 z-50">
//                   <p>{story.description}</p>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full text-center">No stories found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StoryLibrary;


// import { useState } from "react";
// import LibraryHero from "../../components/Hero/LibraryHero";

// // Sample Story Data
// const stories = [
//   {
//     id: 1,
//     title: "Kanem Borno Empire",
//     description: "A historical African empire that thrived for centuries.",
//     era: "Ancient",
//     culture: "Hausa",
//     region: "West Africa",
//     type: "Historical",
//     vr: true,
//     image: "/images/african-mythology.jpg", // Replace with actual images
//   },
//   {
//     id: 2,
//     title: "The Nigerian Civil War",
//     description: "A war that reshaped Nigeria’s history.",
//     era: "Modern",
//     culture: "Igbo",
//     region: "West Africa",
//     type: "Historical",
//     vr: false,
//     image: "/images/afro_okechukwu-ofili.jpg",
//   },
//   {
//     id: 3,
//     title: "Aare Ona Kakanfo Afonja",
//     description: "The story of a fearless Yoruba warlord.",
//     era: "Pre-Colonial",
//     culture: "Yoruba",
//     region: "West Africa",
//     type: "Folklore",
//     vr: true,
//     image: "/images/americanah.jpeg",
//   },
//   {
//     id: 1,
//     title: "Kanem Borno Empire",
//     description: "A historical African empire that thrived for centuries.",
//     era: "Ancient",
//     culture: "Hausa",
//     region: "West Africa",
//     type: "Historical",
//     vr: true,
//     image: "/images/african-mythology.jpg", // Replace with actual images
//   },
//   {
//     id: 2,
//     title: "The Nigerian Civil War",
//     description: "A war that reshaped Nigeria’s history.",
//     era: "Modern",
//     culture: "Igbo",
//     region: "West Africa",
//     type: "Historical",
//     vr: false,
//     image: "/images/afro_okechukwu-ofili.jpg",
//   },
//   {
//     id: 3,
//     title: "Aare Ona Kakanfo Afonja",
//     description: "The story of a fearless Yoruba warlord.",
//     era: "Pre-Colonial",
//     culture: "Yoruba",
//     region: "West Africa",
//     type: "Folklore",
//     vr: true,
//     image: "/images/americanah.jpeg",
//   },

 
// ];

// const StoryLibrary = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
//   const [filters, setFilters] = useState({
//     era: "",
//     culture: "",
//     region: "",
//     type: "",
//   });
//   const [hoveredStory, setHoveredStory] = useState(null);

//   // Handle Search
//   const handleSearch = (e) => setSearchTerm(e.target.value);

//   // Handle Filter Change
//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   // Filtered Stories
//   const filteredStories = stories.filter((story) => {
//     return (
//       story.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (filters.era ? story.era === filters.era : true) &&
//       (filters.culture ? story.culture === filters.culture : true) &&
//       (filters.region ? story.region === filters.region : true) &&
//       (filters.type ? story.type === filters.type : true)
//     );
//   });

//   return (
//     <>

//     <LibraryHero/>

//     <div className="w-full ">
//     <div className="p-6 max-w-6xl mx-auto pt-[3rem] relative">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Story Library</h1>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search stories..."
//           className="mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>


//     {/* Filters - Side by Side on Mobile */}
// {/* Filters - Responsive */}
// <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:gap-4 mb-6">
//   <select 
//     name="era" 
//     className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
//     onChange={handleFilterChange}
//   >
//     <option value="">All Eras</option>
//     <option value="Ancient">Ancient</option>
//     <option value="Pre-Colonial">Pre-Colonial</option>
//     <option value="Modern">Modern</option>
//   </select>

//   <select 
//     name="culture" 
//     className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
//     onChange={handleFilterChange}
//   >
//     <option value="">All Cultures</option>
//     <option value="Hausa">Hausa</option>
//     <option value="Igbo">Igbo</option>
//     <option value="Yoruba">Yoruba</option>
//   </select>

//   <select 
//     name="region" 
//     className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
//     onChange={handleFilterChange}
//   >
//     <option value="">All Regions</option>
//     <option value="West Africa">West Africa</option>
//   </select>

//   <select 
//     name="type" 
//     className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
//     onChange={handleFilterChange}
//   >
//     <option value="">All Types</option>
//     <option value="Historical">Historical</option>
//     <option value="Folklore">Folklore</option>
//   </select>

//   {/* View Mode Toggle */}
//   <button 
//     className="hidden md:block w-full md:w-auto px-4 py-2 text-[11px] lg:text-sm font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
//     onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
//   >
//     {viewMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
//   </button>
// </div>



//       {/* Story List/Grid */}
//       <div className={viewMode === "grid" ? "grid md:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
//         {filteredStories.length > 0 ? (
//           filteredStories.map((story) => (
//             <div
//               key={story.id}
//               className="relative bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300"
//               onMouseEnter={() => setHoveredStory(story.id)}
//               onMouseLeave={() => setHoveredStory(null)}
//             >
//               {/* Story Thumbnail */}
//               <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />

//               {/* Story Content */}
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-gray-900">{story.title}</h2>
//                 <div className="mt-2 flex items-center gap-2 text-sm">
//                   <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">{story.era}</span>
//                   <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">{story.culture}</span>
//                 </div>

//                 {/* VR Badge */}
//                 {story.vr && (
//                   <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                     VR Available
//                   </span>
//                 )}
//               </div>

//               {/* Story Preview Pop-up */}
//               {hoveredStory === story.id && (
//                 <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white p-4 flex items-center justify-center text-center transition-opacity duration-300 z-50">
//                   <p>{story.description}</p>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full text-center">No stories found.</p>
//         )}
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default StoryLibrary;




import { useState } from "react";
import LibraryHero from "../../components/Hero/LibraryHero";

// Sample Story Data
const stories = [
  {
    id: 1,
    title: "Kanem Borno Empire",
    description: "A historical African empire that thrived for centuries.",
    era: "Ancient",
    culture: "Hausa",
    region: "West Africa",
    type: "Historical",
    vr: true,
    image: "/images/african-mythology.jpg",
  },
  {
    id: 2,
    title: "The Nigerian Civil War",
    description: "A war that reshaped Nigeria’s history.",
    era: "Modern",
    culture: "Igbo",
    region: "West Africa",
    type: "Historical",
    vr: false,
    image: "/images/afro_okechukwu-ofili.jpg",
  },
  {
    id: 3,
    title: "Aare Ona Kakanfo Afonja",
    description: "The story of a fearless Yoruba warlord.",
    era: "Pre-Colonial",
    culture: "Yoruba",
    region: "West Africa",
    type: "Folklore",
    vr: true,
    image: "/images/americanah.jpeg",
  },
];

const StoryLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    era: "",
    culture: "",
    region: "",
    type: "",
  });
  const [hoveredStory, setHoveredStory] = useState(null);

  // Handle Search
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // Handle Filter Change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered Stories
  const filteredStories = stories.filter((story) => {
    return (
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.era ? story.era === filters.era : true) &&
      (filters.culture ? story.culture === filters.culture : true) &&
      (filters.region ? story.region === filters.region : true) &&
      (filters.type ? story.type === filters.type : true)
    );
  });

  return (
    <>
      <LibraryHero />
      <div className="w-full bg-[#2E1A09] text-white min-h-screen">
        <div className="p-6 max-w-6xl mx-auto pt-[3rem]">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#E76F51]">Story Library</h1>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search stories..."
              className="mt-2 md:mt-0 px-4 py-2 border border-gray-500 bg-[#3A2005] text-white rounded-md focus:ring-2 focus:ring-[#F4A261]"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:gap-4 mb-6">
            {["era", "culture", "region", "type"].map((filter) => (
              <select
                key={filter}
                name={filter}
                className="w-full md:w-auto px-4 py-2 border border-gray-500 bg-[#3A2005] text-white rounded-md focus:ring-2 focus:ring-[#F4A261]"
                onChange={handleFilterChange}
              >
                <option value="">All {filter.charAt(0).toUpperCase() + filter.slice(1)}s</option>
                {filter === "era" && ["Ancient", "Pre-Colonial", "Modern"].map((option) => <option key={option} value={option}>{option}</option>)}
                {filter === "culture" && ["Hausa", "Igbo", "Yoruba"].map((option) => <option key={option} value={option}>{option}</option>)}
                {filter === "region" && ["West Africa"].map((option) => <option key={option} value={option}>{option}</option>)}
                {filter === "type" && ["Historical", "Folklore"].map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            ))}

            {/* View Mode Toggle */}
            <button
              className="hidden md:block w-full md:w-auto px-4 py-2 text-sm font-semibold bg-[#F4A261] text-black rounded-md hover:bg-[#E76F51]"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            >
              {viewMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
            </button>
          </div>

          {/* Story List/Grid */}
          <div className={viewMode === "grid" ? "grid md:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="relative bg-[#3A2005] text-white shadow-md rounded-lg overflow-hidden border border-gray-600 hover:shadow-lg transition duration-300"
                  onMouseEnter={() => setHoveredStory(story.id)}
                  onMouseLeave={() => setHoveredStory(null)}
                >
                  {/* Story Thumbnail */}
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />

                  {/* Story Content */}
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-[#F4A261]">{story.title}</h2>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <span className="bg-[#E76F51] text-black px-2 py-1 rounded-md">{story.era}</span>
                      <span className="bg-[#F4A261] text-black px-2 py-1 rounded-md">{story.culture}</span>
                    </div>

                    {/* VR Badge */}
                    {story.vr && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        VR Available
                      </span>
                    )}
                  </div>

                  {/* Story Preview Pop-up */}
                  {hoveredStory === story.id && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white p-4 flex items-center justify-center text-center transition-opacity duration-300 z-50">
                      <p>{story.description}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-300 col-span-full text-center">No stories found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryLibrary;
