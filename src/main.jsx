import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app.jsx';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import ContactInfo from './pages/ContactInfo'; 


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
        
            {
                path: '/Resume',
                element: <Resume />
            },

            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/ContactInfo',
                element: <ContactInfo />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
