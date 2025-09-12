import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import Models from './pages/Models';
import About from './pages/About';
import Contact from './pages/Contact';
import ModelDetail from './pages/ModelDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'models', element: <Models /> },
      { path: 'models/:id', element: <ModelDetail /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
