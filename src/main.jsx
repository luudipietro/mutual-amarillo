import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css';



import Layout from './componentes/Layout/Layout.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import NuestraMutual from './Pages/NuestraMutual/NuestraMutual.jsx'
import Contacto from './Pages/Contacto/Contacto.jsx';
import Turismo from './Pages/Turismo/Turismo.jsx';
import Convenio_page from './Pages/Convenio_page/Convenio_page.jsx';


const router = createHashRouter([
  {
  path: '/',
  element: <Layout/>,
  children:[
    {
      path: '/',
      element: <MainPage/>
    },
    {
      path: '/nuestra-mutual',
      element: <NuestraMutual/>
    },
    {
      path: '/contacto',
      element: <Contacto/>
    },
    {
      path: '/turismo',
      element: <Turismo/>
    },
    {
      path: '/beneficios/:idEmpresa',
      element: <Convenio_page/>
    }
  ]
}
]);


createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
);
