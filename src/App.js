import AppRouter from "./pages/";
import {
  BrowserRouter,
} from "react-router-dom";
import * as React from "react";

// react function component
function App() {

  return (
    <>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </>
  );
}

export default App;