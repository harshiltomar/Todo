import React, { useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import History from "./components/Todo/History/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp/Signup";
import Signin from "./components/SignUp/Signin";
import Todo from "./components/Todo/Todo";
import { authActions } from "./store/index.store";
import { useDispatch } from "react-redux";
import Pricing from "./Pricing/Pricing";
import BizPricing from "./Pricing/BizPricing";
import Profile from "./components/Profile/Profile";
import Payment from "./components/PaymentPage/Payment";
import Congrats from "./components/Congrats/Congrats";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/forteams" element={<BizPricing />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment/:price" element={<Payment />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
