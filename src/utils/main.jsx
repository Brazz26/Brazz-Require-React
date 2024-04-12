import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '/App.jsx';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe.jsx';
import ContactInfo from './pages/Contact.jsx'; // Imported new Trivia page


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/Resume',
        element: <Resume />
      },
      {
        path: '/AboutMe',
        element: <AboutMe />
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>
      },
      {
        path: '/contact',
        element: <ContactInfo /> // Added new high scores page
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
