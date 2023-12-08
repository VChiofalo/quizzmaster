import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
// import AboutPage from './components/AboutPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/question/:id', // Utiliser un paramètre de route pour l'ID de la question
    element: <QuizPage />
  },
  {
    path: '/result',
    element: <ResultPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)