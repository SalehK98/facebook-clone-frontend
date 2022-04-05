import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import PrimarySearchAppBar from "./components/NavBar";
import React from "react";
import { useStateValue } from "./StateProvider";
// import {Context} from

function App() {
  const [navStatus, setNavStatus] = React.useState(false);
  // const [{ user }, dispatch] = useStateValue();
  // console.log(user);
  // const [user, setUser] = React.useState();

  return (
    <BrowserRouter>
      {navStatus ? null : <PrimarySearchAppBar />}
      <Routes>
        {/* {!user ? ( */}
        <Route path="/login" element={<Login setNavStatus={setNavStatus} />} />
        {/* ) : ( */}
        <Route path="/" element={<Home />} />
        {/* )} */}

        {/* <Route component={withNavBar} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
