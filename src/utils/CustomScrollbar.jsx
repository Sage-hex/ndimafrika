// import { Scrollbar } from 'react-scrollbars-custom';

// const CustomScrollbar = ({ children }) => {
//   return (
//     <Scrollbar
//       style={{ width: "100%", height: "100vh" }}
//       thumbYProps={{ style: { background: "linear-gradient(180deg, red, orange, yellow, green, blue, indigo, violet)" } }}
//       trackYProps={{ style: { background: "linear-gradient(180deg, violet, indigo, blue, green, yellow, orange, red)" } }}
//     >
//       {children}
//     </Scrollbar>
//   );
// };

// export default CustomScrollbar;


// import { Scrollbar } from "react-scrollbars-custom";
// import { useEffect, useState } from "react";

// const CustomScrollbar = ({ children }) => {
//   const [thumbSize, setThumbSize] = useState("10px"); // Default size for larger screens

//   useEffect(() => {
//     const handleResize = () => {
//       setThumbSize(window.innerWidth < 768 ? "5px" : "10px" ); // Smaller scrollbar on mobile
//     };

//     handleResize(); // Set on initial load
//     window.addEventListener("resize", handleResize); // Update on resize

//     return () => window.removeEventListener("resize", handleResize); // Cleanup
//   }, []);

//   return (
//     <Scrollbar
//       style={{ width: "100%", height: "100vh" }}
//       thumbYProps={{
//         style: {
//           background: "linear-gradient(180deg, red, orange, yellow, green, blue, indigo, violet)",
//           borderRadius: "10px",
//           width: thumbSize, // Dynamically adjusted width
//         },
//       }}
//       trackYProps={{
//         style: {
//           background: "rgba(0, 0, 0, 0.5)", // Slightly transparent track
//           borderRadius: "10px",
//           width: thumbSize, // Match thumb width for consistency
//         },
//       }}
//     >
//       {children}
//     </Scrollbar>
//   );
// };

// export default CustomScrollbar;




// import { Scrollbar } from "react-scrollbars-custom";
// import { useEffect, useState } from "react";

// const CustomScrollbar = ({ children }) => {
//   const [thumbSize, setThumbSize] = useState("10px"); // Default width

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setThumbSize(window.innerWidth < 768 ? "5px" : "10px"); // Smaller on mobile
// //     };

// //     handleResize(); // Set on mount
// //     window.addEventListener("resize", handleResize);

// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

//   return (
//     <Scrollbar
//       style={{ width: "100%", height: "100vh" }}
//       thumbYProps={{
//         style: {
//           background: "linear-gradient(180deg, red, orange, yellow, green, blue, indigo, violet)", 
//           width: thumbSize, 
//           borderRadius: "0px", // No rounded edges
//         },
//       }}
//       trackYProps={{
//         style: {
//           background: "rgba(0, 0, 0, 0.5)", 
//           width: thumbSize, 
//           borderRadius: "0px", // Square shape
//         },
//       }}
//     >
//       {children}
//     </Scrollbar>
//   );
// };

// export default CustomScrollbar;



import { Scrollbar } from "react-scrollbars-custom";
import { useEffect, useState } from "react";

const CustomScrollbar = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <>{children}</>;

  return (
    <Scrollbar
      style={{ width: "100%", height: "100vh" }}
      thumbYProps={{
        style: {
          background: "linear-gradient(180deg, red, orange, yellow, green, blue, indigo, violet)", 
          width: "10px",
          borderRadius: "0px",
        },
      }}
      trackYProps={{
        style: {
          background: "rgba(0, 0, 0, 0.5)",
          width: "10px",
          borderRadius: "0px",
        },
      }}
    >
      {children}
    </Scrollbar>
  );
};

export default CustomScrollbar;
