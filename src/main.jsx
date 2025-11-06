import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';



import Layout from './componentes/Layout/Layout.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import NuestraMutual from './Pages/NuestraMutual/NuestraMutual.jsx'
import Contacto from './Pages/Contacto/Contacto.jsx';
import Turismo from './Pages/Turismo/Turismo.jsx';


const router = createBrowserRouter([
  {
  path: '/mutual-amarillo',
  element: <Layout/>,
  children:[
    {
      path: '/mutual-amarillo',
      element: <MainPage/>
    },
    {
      path: '/mutual-amarillo/nuestra-mutual',
      element: <NuestraMutual/>
    },
    {
      path: '/mutual-amarillo/contacto',
      element: <Contacto/>
    },
    {
      path: '/mutual-amarillo/turismo',
      element: <Turismo/>
    }
  ]
}
]);


createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
);
