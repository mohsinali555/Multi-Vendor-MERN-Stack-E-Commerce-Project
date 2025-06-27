import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage, HomePage } from "./Routes.js";
import "./App.css";
import { ToastContainer, Bounce } from "react-toastify";
import { useEffect } from "react";
import Store from "./redux/store.js";
import { loadUser } from "./redux/actions/user";

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </BrowserRouter>
  );
};

export default App;
