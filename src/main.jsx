import ReactDOM from 'react-dom/client';
import './index.css';
import Results from './components/Results/Results';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Question from './components/Question/Question';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Question />
  },
  {
    path: '/result',
    element: <Results />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
)
