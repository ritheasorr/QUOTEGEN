import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';

import Favorite from './pages/Favorite';
import store from './redux/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <div className='text-center text-4xl' >Not Found</div>,
    },
    {
        path: '/favorite',
        element: <Favorite />,
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    
    
)
