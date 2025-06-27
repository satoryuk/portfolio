import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
