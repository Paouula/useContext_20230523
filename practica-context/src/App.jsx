import "./App.css";
import { AuthProvider } from "./pages/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Information from "./pages/Information/Information";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} /> 
        </Route>
        <Route path="/information" element={<Information />} /> 
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
