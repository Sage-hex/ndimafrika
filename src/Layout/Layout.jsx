// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar';

// function Layout() {
//   return (
//     <div>
//         <Navbar/>
//       <main>
//         <Outlet /> 
//       </main>

//       <footer>
//         {/* Your footer content */}
//         <p>&copy; 2023 My App</p>
//       </footer>
//     </div>
//   );
// }

// export default Layout;


import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
}

export default Layout;
