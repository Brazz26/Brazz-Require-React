import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Navbar from './components/Navigation';
import 'semantic-ui-css/semantic.min.css'; // Added Semantic UI CSS

function App() {
  return (
    <ApolloProvider>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;