import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SamsungProducts from './components/ProductComponents/SamsungProducts';
import HuaweiProducts from './components/ProductComponents/HuaweiProducts';
import IphoneProducts from './components/ProductComponents/IphoneProducts';
import XiaomiProducts from './components/ProductComponents/XiaomiProducts';

function App() {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Header />
          <Content />
        </Route>
        <Route path="/samsung" component={SamsungProducts} />
        <Route path="/iphone" component={IphoneProducts} />
        <Route path="/xiaomi" component={XiaomiProducts} />
        <Route path="/huawei" component={HuaweiProducts} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
