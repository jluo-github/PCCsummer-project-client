import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import MainMenu from "./pages/MainMenu";
import Resource from "./pages/Resource";
import Incident from "./pages/Incident";
import SearchResourcesForm from "./pages/SearchResourcesForm";
import SearchResourcesResults from "./pages/SearchResourcesResults";
import ResourceReport from "./pages/ResourceReport";
import MyNavbar from "./components/MyNavbar";

import Footer from "./components/Footer";


import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function App() {
  // const navigate = useNavigate();
  return (
    <HashRouter>
      <MyNavbar />
      <Routes >
        <Route path="/" element={<MainMenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/incident" element={<Incident />} />
        <Route path="/search-resources" element={<SearchResourcesForm />} />
        <Route
          path="/search-resources-results"
          element={<SearchResourcesResults />}
        />
        <Route path="/resource-report" element={<ResourceReport />} />
      </Routes>
     <Footer/>
    </HashRouter>
  );
}

export default App;
