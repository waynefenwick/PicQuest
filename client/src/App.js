import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav'; // Import the Navbar component
import Home from './components/Home/Home'; // Import the Home component
import Tabs from './components/Tabs/Tabs'; // Import the Tabs component
import Footer from './components/Footer/Footer'; // Import the Footer component
import Popup from './components/Popup/Popup'; // Import the Popup component
import Auth from './utils/auth'; // Import your Auth utility

// Set up Apollo Client's HTTP link and authentication headers
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken(); // Replace with your token retrieval logic
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tabs" element={<Tabs />} />
            {/* Add more routes for other components */}
          </Routes>
          <Popup /> {/* Render the Popup component */}
          <Footer /> {/* Render the Footer component */}
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
