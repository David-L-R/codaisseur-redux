import { Home, About, Balance } from "../pages";

export const routes = {
  home: {
    path: "/",
    name: "Home",
    getPage: function () {
      return <Home />;
    },
  },
  about: {
    path: "/about",
    name: "About",
    getPage: function () {
      return <About />;
    },
  },
  balance: {
    path: "/balance",
    name: "My balance",
    getPage: function () {
      return <Balance />;
    },
  },
};
