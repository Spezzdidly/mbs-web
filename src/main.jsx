import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './Pages/App.jsx'
import HowToPlay from './Pages/HowToPlay.jsx'
import NotFound from './Pages/NotFound.jsx'
import Layout from "./Components/Layout.jsx";

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);