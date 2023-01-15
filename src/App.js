import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";

function App() {
  // affichage(render)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
