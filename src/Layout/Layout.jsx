
import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  const location = useLocation();

  // Define special routes in a Set (O(1) lookup for exact matches)
  const specialRoutes = useMemo(() => new Set(['/userdashboard', '/admin', '/userLogin', '/userSignup']), []);

  // Check if the current path starts with any of the special routes
  const isSpecialRoute = useMemo(() => {
    return [...specialRoutes].some(route => location.pathname.startsWith(route));
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {!isSpecialRoute && <Navbar />}
      <main className="flex-grow mt[-10vh]">
        <Outlet />
      </main>
      {!isSpecialRoute && <Footer />}
    </div>
  );
}

export default Layout;


// import React, { useMemo } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import HamburgerMenu from "../pages/Admin/HamburgerMenu"; // Import the HamburgerMenu

// function Layout() {
//   const location = useLocation();

//   // Define special routes in a Set (O(1) lookup for exact matches)
//   const specialRoutes = useMemo(() => new Set(['/userdashboard', '/admin', '/userLogin', '/userSignup']), []);

//   // Check if the current path starts with any of the special routes
//   const isSpecialRoute = useMemo(() => {
//     return [...specialRoutes].some(route => location.pathname.startsWith(route));
//   }, [location.pathname]);

//   // Check if the current route is an admin route
//   const isAdminRoute = useMemo(() => {
//     return location.pathname.startsWith('/admin');
//   }, [location.pathname]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Render Navbar only for non-special routes */}
//       {!isSpecialRoute && <Navbar />}

//       {/* Render HamburgerMenu only for admin routes */}
//       {isAdminRoute && <HamburgerMenu />}

//       {/* Main Content */}
//       <main className="flex-grow mt[-10vh]">
//         <Outlet />
//       </main>

//       {/* Render Footer only for non-special routes */}
//       {!isSpecialRoute && <Footer />}
//     </div>
//   );
// }

// export default Layout;