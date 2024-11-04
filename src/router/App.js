import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
