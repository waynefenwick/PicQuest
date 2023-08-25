import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav/NavLink';
import Home from './components/Home/Home';
import Login from './components/Buttons/LoginButton';
import Signup from './components/Buttons/SignupButton';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';
import Animals from './components/Tabs/Animals';
import Cities from './components/Tabs/Cities';
import Nature from './components/Tabs/Nature';
import Oceans from './components/Tabs/Oceans';
import People from './components/Tabs/People';
import Relaxing from './components/Tabs/Relaxing';
import Unusual from './components/Tabs/Unusual';
import Auth from './utils/auth';

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
            <Route path="/tab1" element={<People />} />
            <Route path="/tab2" element={<Animals />} />
            <Route path="/tab3" element={<Nature />} />
            <Route path="/tab4" element={<Oceans />} />
            <Route path="/tab5" element={<Cities />} />
            <Route path="/tab6" element={<Unusual />} />
            <Route path="/tab7" element={<Relaxing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Popup />
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
