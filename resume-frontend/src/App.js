import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
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
const PersonalDetail = lazy(() => {
  return Promise.all([
    import("./components/resume_form/PersonalDetail"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const EducationDetail = lazy(() => {
  return Promise.all([
    import("./components/resume_form/EducationDetail"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Experience = lazy(() => {
  return Promise.all([
    import("./components/resume_form/Experience"),
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
            <Route path="/personal-detail" element={<PersonalDetail />} />
            <Route path="/education-detail" element={<EducationDetail />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
