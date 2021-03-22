import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CounterProvider from "./components/provider/providerCounter";
import ReactNotification from 'react-notifications-component';

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SamsungProducts from './components/ProductComponents/SamsungProducts/SamsungProducts';
import HuaweiProducts from './components/ProductComponents/HuaweiProducts/HuaweiProducts';
import IphoneProducts from './components/ProductComponents/IphoneProducts/IphoneProducts';
import XiaomiProducts from './components/ProductComponents/XiaomiProducts/XiaomiProducts';
import AddCartProduct from "./components/addCartProduct/AddCartProduct"
import { OrderForm } from './components/OrderForm/OrderForm';
import { SingleArticle } from "./components/Content_component/SingleArticle";
import ScrollTop from "./ScrollTop"



function App() {
  return (
    <BrowserRouter basename="/">
      <CounterProvider>
        <ReactNotification />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Header />
            <Content />
          </Route>
          <Route path="/articles" component={SingleArticle} />
          <Route path="/samsung" component={SamsungProducts} />
          <Route path="/iphone" component={IphoneProducts} />
          <Route path="/xiaomi" component={XiaomiProducts} />
          <Route path="/huawei" component={HuaweiProducts} />
          <Route path="/cart" component={AddCartProduct} />
          <Route path="/form" component={OrderForm} />
        </Switch>
        <Footer />
        <ScrollTop />
      </CounterProvider>
    </BrowserRouter>
  );
}

export default App;
