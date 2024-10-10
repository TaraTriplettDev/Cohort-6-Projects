import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react";

import Login from "./Components/Login/Login.jsx";
// import Layout from "./Components/Layout/Layout.jsx";
import Registration from "./Components/Registration/Registration.jsx";
// import Blog from "./Components/Blog/Blog.jsx"
import Landing from "./Components/Landing/Landing.jsx";
import { MyProvider } from "./hooks/ContextHook.jsx";
import ProtectedRoute from "./Components/Protected Route/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <BrowserRouter>
        <Routes>
          {/* <App /> */}

          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          {/* <App /> */}

          <Route element={<ProtectedRoute />}>
            <Route path="/landing" element={<Landing />} />
          </Route>
          {/* <Route path="/layout" element={<Layout />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </BrowserRouter>
    </MyProvider>
    <App />
  </React.StrictMode>
);
