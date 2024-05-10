import React from "react";
import "./styels/App.css";
import StarRating from "./component/StarRating";
import Dialog from "./component/Dialog";
function App() {
  return (
    <div className="App">
      <StarRating />
      <Dialog />
    </div>
  );
}

export default App;
