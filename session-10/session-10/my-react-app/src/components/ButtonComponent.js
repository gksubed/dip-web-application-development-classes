import React from "react";

function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <button onClick={handleClick} style={{ marginTop: "10px" }}>
      Click me
    </button>
  );
}
export default Button;
