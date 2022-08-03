import "./styles.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function App() {
  const now = new Date();
  return (
    <Stack spacking={2} direction="column">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Button>{now.getUTCDay} Click Me!</Button>
      </div>
    </Stack>
  );
}
