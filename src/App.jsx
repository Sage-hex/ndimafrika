// import {RouterProvider } from 'react-router-dom'
// import router from './Router/Router';
// import CustomScrollbar from './utils/CustomScrollbar';
// const App = () => {

//   return <RouterProvider router={router}/>;
// }

// export default App


import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import CustomScrollbar from './utils/CustomScrollbar';

const App = () => {
  return (
    <CustomScrollbar>
      <RouterProvider router={router} />
    </CustomScrollbar>
  );
}

export default App;
