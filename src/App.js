import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Ramaining";
import Spent from "./components/Spent";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">MyBudget</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
          <Remaining />
          <Spent />
        </div>
      </div>
    </div>
  );
};

export default App;
