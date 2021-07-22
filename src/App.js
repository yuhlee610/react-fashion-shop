import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import Layout from './hoc/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import Men from './pages/Men';
import Women from './pages/Women';
import { connect } from 'react-redux'
import * as actions from './store/index'
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import ContentSearch from './components/ContentSearch/ContentSearch';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Checkout from './components/Checkout/Checkout';

function App({ onFetchProducts, onFetchCart, onCheckLogin }) {

  useEffect(() => {
    onFetchCart();
    onFetchProducts();
    onCheckLogin();
  }, [onFetchProducts, onFetchCart, onCheckLogin])

  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/men' component={Men} />
            <Route path='/women' component={Women} />
            <Route path='/search/:name' component={ContentSearch}/>
            <Route path='/sign-up' component={Signup} />
            <Route path='/sign-in' component={Signin}/>
            <Route path='/checkout' component={Checkout}/>
          </Switch>
        </Layout>
      </ScrollToTop>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onFetchCart: () => dispatch(actions.fetchCart()),
    onCheckLogin: () => dispatch(actions.checkLoginState())
  }
}

export default connect(null, mapDispatchToProps)(App);
