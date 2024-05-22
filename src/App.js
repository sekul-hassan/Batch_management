import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/CSS/Custom.css';
import '../src/Assets/CSS/Global.css';
import {Fragment} from "react";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import MemberPage from "./Pages/MemberPage";

function App() {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="members" element={<MemberPage/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
