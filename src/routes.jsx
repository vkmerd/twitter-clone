import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Home from './pages/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/home',
        element:<Home />,
      }
    ],
  }
]);