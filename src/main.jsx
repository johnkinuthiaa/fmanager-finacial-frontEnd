import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./components/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import LandingPage from "./pages/LandingPage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Header/>
          <App />
      </BrowserRouter>

  </StrictMode>,
)
