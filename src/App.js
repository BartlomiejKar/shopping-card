import React from 'react';

// import {} from "react-router-dom"

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
