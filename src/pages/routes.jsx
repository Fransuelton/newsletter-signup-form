import { SuccessCard } from "./SuccessCard";
import { SignupCard } from "../components/SingupCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignupCard />} />
        <Route exact path="/success" element={<SuccessCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
