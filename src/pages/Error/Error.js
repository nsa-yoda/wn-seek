import "./Error.css";

import { useRouteError, Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Container from "react-bootstrap/Container";

export const Error = () => {
  const error = useRouteError();

  return (
    <Container>
      <Grid
        id="error-page"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Grid container spacing={2} style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <Typography variant="h1" style={{ color: "white" }}>
              {error.status}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <h2>An unexpected error has occurred.</h2>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </Grid>
          <Grid item xs={12}>
            <Link className={"linkHome"} to="/">
              Go Back
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
