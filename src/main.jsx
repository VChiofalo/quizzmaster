import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './components/HomePage'
// import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
// import ResultPage from './components/ResultPage';
// import AboutPage from './components/AboutPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/question/:id', // Utiliser un paramètre de route pour l'ID de la question
    element: <QuizPage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)