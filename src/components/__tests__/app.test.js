import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  // LOOK INSIDE THE DIV
  // and checks to see if the comment box actually exists
  expect(div.innerHTML).toContain("Comment Box");

  ReactDOM.unmountComponentAtNode(div);
});
