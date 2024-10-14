import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react";

// import Login from "./Components/Login/Login.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import Blog from "./Components/Blog/Blog.jsx"
// import Landing from "./Components/Landing/Landing.jsx";
import MyProvider from "./hooks/context-hook.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <>
  <StrictMode>
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/register' element={<Registration />} />
          <Route element={<ProtectedRoute />}>
            {/* <Route path='/landing' element={<Landing />} /> */}
            <Route element={<Layout />}>
              <Route path='/blog' element={<Blog />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  </StrictMode>
  </>
);
