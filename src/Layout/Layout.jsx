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


import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


function Layout() {


  const location = useLocation();

  // const specialRoutes = ['/userdashboard','/admin','userLogin','/userSignup'];

  const specialRoutes = useMemo(() => new Set(['/userdashboard','/admin','userLogin','/userSignup']),[]);
  const isSpecialRoutes = specialRoutes.has(location.pathname);
  // const isDashboard = location.pathname.inludes

  // const isDashboard = location.pathname.startsWith('/userdashboard') || location.pathname.startsWith('/admin') ||  location.pathname.startsWith('/userLogin');

  return (
    <div className="flex flex-col  min-h-screen">
    {/* {!isDashboard && <Navbar />} */}
    {!specialRoutes && <Navbar/>}
      <main className="flex-grow ">
        <Outlet />
      </main>
      {/* {!isDashboard && <Footer/>} */}
      {!specialRoutes && <Footer/>}
    </div>
  );
}

export default Layout;
