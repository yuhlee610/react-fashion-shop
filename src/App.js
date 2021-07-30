import './App.css';
import React, { useEffect, Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import * as actions from './store/index'
import { Spin } from 'antd'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Navbar/Sidebar/Sidebar';
import MyCarousel from './components/Carousel/MyCarousel';
import Footer from './components/ContentHome/Footer/Footer';

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Collection = lazy(() => import('./pages/Collection/Collection'))
const ContentSearch = lazy(() => import('./components/ContentSearch/ContentSearch'))
const Signup = lazy(() => import('./pages/SignUp/SignUp'))
const Signin = lazy(() => import('./pages/SignIn/SignIn'))
const Checkout = lazy(() => import('./components/Checkout/Checkout'))

function App({ onFetchProducts, onFetchCart, onCheckLogin }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    onFetchCart();
    onFetchProducts();
    onCheckLogin();
  }, [onFetchProducts, onFetchCart, onCheckLogin])


  return (
    <Router>
      <ErrorBoundary>
        
        <Navbar showHandler={setShowMobileMenu} />
        <Sidebar show={showMobileMenu} showHandler={setShowMobileMenu} />
        <MyCarousel />

        <Suspense fallback={<Spin size='large' />}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/men' component={Collection} />
            <Route path='/women' component={Collection} />
            <Route path='/search/:name' component={ContentSearch} />
            <Route path='/sign-up' component={Signup} />
            <Route path='/sign-in' component={Signin} />
            <Route path='/checkout' component={Checkout} />
          </Switch>
        </Suspense>
        <Footer />
      </ErrorBoundary>
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
