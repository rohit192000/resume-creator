import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/Auth";
import Template from "./components/resume_templates/Template";
const Register = lazy(() => {
  return Promise.all([
    import("./components/authentication/Register"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Login = lazy(() => {
  return Promise.all([
    import("./components/authentication/Login"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Stepper = lazy(() => {
  return Promise.all([
    import("./components/resume_form/Stepper"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const DetailTable = lazy(() => {
  return Promise.all([
    import("./components/resume_templates/DetailsTable"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/*Register anb logn Routes */}
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/*Resume details routes */}
            <Route
              path="/add-detail"
              element={
                <PrivateRoute>
                  <Stepper />
                </PrivateRoute>
              }
            />
            <Route
              path="/all-details"
              element={
                <PrivateRoute>
                  <DetailTable />
                </PrivateRoute>
              }
            />
            <Route
              path="/template"
              element={
                <PrivateRoute>
                  <Template />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
