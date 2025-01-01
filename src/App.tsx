import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import RouterManager from "./routes/RouterManager";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Box>
      <Router>
        <RouterManager />
      </Router>
    </Box>
  );
}

export default App;
