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
  path: '/',
  element: <Layout/>,
  children:[
    {
      path: '/',
      element: <MainPage/>
    },
    {
      path: 'nuestra-mutual',
      element: <NuestraMutual/>
    },
    {
      path: 'contacto',
      element: <Contacto/>
    },
    {
      path: 'turismo',
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
