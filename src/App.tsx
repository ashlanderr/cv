import { BrowserRouter, Route, Routes } from "react-router";
import { GymTracker, Home, Igron, Nlmk, RedForester } from "./pages";
import { HashScroll } from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <HashScroll />
      <Routes>
        <Route path="/cv" Component={Home} />
        <Route path="/cv/igron" Component={Igron} />
        <Route path="/cv/nlmk" Component={Nlmk} />
        <Route path="/cv/gym-tracker" Component={GymTracker} />
        <Route path="/cv/red-forester" Component={RedForester} />
      </Routes>
    </BrowserRouter>
  );
};
