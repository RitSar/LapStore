import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Carousel from './Carousel';


//class App extends Component ?
function App() {
  return (
    <div className="flex-wrapper">
      <div className="content">
        <React.Fragment>
          <Navbar />
          <Carousel />
          <Switch>
            <Route path="/LapStore/" component={ProductList}></Route>
            <Route path="/LapStore/cart" component={Cart}></Route>
            <Route path="/LapStore/details" component={Details}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal />
        </React.Fragment>
      </div>

      <Footer />
    </div>

  );
}

export default App;
