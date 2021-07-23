import './App.css';
import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import Layout from './hoc/Layout/Layout';
import { connect } from 'react-redux'
import * as actions from './store/index'
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import { Spin } from 'antd'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Men = lazy(() => import('./pages/Men'))
const Women = lazy(() => import('./pages/Women'))
const ContentSearch = lazy(() => import('./components/ContentSearch/ContentSearch'))
const Signup = lazy(() => import('./pages/Signup'))
const Signin = lazy(() => import('./pages/Signin'))
const Checkout = lazy(() => import('./components/Checkout/Checkout'))

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
          <Suspense fallback={<Spin size='large'/>}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/men' component={Men} />
              <Route path='/women' component={Women} />
              <Route path='/search/:name' component={ContentSearch} />
              <Route path='/sign-up' component={Signup} />
              <Route path='/sign-in' component={Signin} />
              <Route path='/checkout' component={Checkout} />
            </Switch>
          </Suspense>
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
