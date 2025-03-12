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
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
