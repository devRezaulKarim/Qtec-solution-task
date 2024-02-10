import Home from "./Pages/Home";
import { GlobalProvider } from "./States/GlobalStates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <GlobalProvider>
        <Home />
      </GlobalProvider>
      <ToastContainer />
    </div>
  );
}
