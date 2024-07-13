import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/loginpage/LoginPage.jsx";
import UserPage from "./components/userpage/UserPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
