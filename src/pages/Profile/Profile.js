import "./Profile.css";
import Container from "react-bootstrap/Container";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const Profile = () => {
  return (<Container>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          
        </Paper>
      </Container>
      
    </ThemeProvider>
  </Container>);
};

