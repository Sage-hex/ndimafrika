import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import router from "./Router/Router";
import CustomScrollbar from "./utils/CustomScrollbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Preloader from "./utils/Preloader";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Simulate loading (replace with actual logic if needed)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <CustomScrollbar>
          <RouterProvider router={router} />
        </CustomScrollbar>
      )}
    </>
  );
};

export default App;



// import { RouterProvider } from 'react-router-dom';
// import router from './Router/Router';
// import CustomScrollbar from './utils/CustomScrollbar';
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import { useEffect } from 'react';

// const App = () => {

//   useEffect(()=>{
//     Aos.init({duration:2000})
//   },[])
//   return (
//     <CustomScrollbar>
//       <RouterProvider router={router} />
//     </CustomScrollbar>
//   );
// }

// export default App;
