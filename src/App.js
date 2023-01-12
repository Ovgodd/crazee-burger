import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/login/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/login/OrderPage";

function App() {
  // affichage(render)
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* The next line is very important for the Navigate component to work */}
      <Route path="/orderpage" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>;
  return <LoginPage />;
}

export default App;
