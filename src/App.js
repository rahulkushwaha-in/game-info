import React from "react";
import Home from "./pages/home";
import GlobalStyle from "./components/GlobalStyle";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Route path={["/", "/game/:id"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
