import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";

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
