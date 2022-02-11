import { Home, About } from "../pages";
import { Routes, Route } from "react-router-dom";
import { routes } from "./navRoutes";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path={routes.home.path} element={<Home />}/>
      <Route path={routes.about.path} element={ <About />}/ >
    </Routes>
  );
};

export default ReactRouter;
