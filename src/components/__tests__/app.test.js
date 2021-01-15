import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from "../../test-utils";
import App from "../App";

it("Renders the connected app with initialState", () => {
  render(<App />, { initialState: { songs: "Dummy song" } });

  //   expect(screen.getByText(/redux user/i)).toBeInTheDocument();
});
