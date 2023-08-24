import './App.css';
import Navbar from './components/common/Navbar';
import { Home } from './components/common/Home';
import { Footer } from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/utils/PrivateRoute';
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Profile } from './components/Profile';
import { Account } from './components/Account';
import { Dashboard } from './components/Dashboard';
import { Products } from './components/Products';
import { Pricing } from './components/Pricing';
import { Blog } from './components/Blog';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter basename="/">
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route
              path="/Profile"
              element={<PrivateRoute authenticated={true} component={Profile} />}
            />
            <Route
              path="/Account"
              element={<PrivateRoute authenticated={true} component={Account} />}
            />
            <Route
              path="/Dashboard"
              element={<PrivateRoute authenticated={true} component={Dashboard} />}
            />
            <Route path={"/Login"} element={<Login />} />
            <Route path={"/Register"} element={<Register />} />
            <Route path={"/Products"} element={<Products />} />
            <Route path={"/Pricing"} element={<Pricing />} />
            <Route path={"/Blog"} element={<Blog />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
