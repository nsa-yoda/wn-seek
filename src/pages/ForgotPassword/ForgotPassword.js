import "./ForgotPassword.css";
import Container from "react-bootstrap/Container";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = ({ history }) => {
  const navigate = useNavigate();
  const theme = createTheme();
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const [formData, setFormData] = useState({ email: "", password: "" });

  if (isAuthenticated()) {
    // Redirect to Dashboard
  }

  // MUI FOrm
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signIn({
      token: "this is a token",
      expiresIn: 300000000,
      tokenType: "Bearer",
      authState: { x: 1 },
    });
    // _.post("/api/login", formData).then((res) => {
    //   if (res.status === 200) {
    //     if (
    //       signIn({
    //         token: res.data.token,
    //         expiresIn: res.data.expiresIn,
    //         tokenType: "Bearer",
    //         authState: res.data.authUserState,
    //         refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
    //         refreshTokenExpireIn: res.data.refreshTokenExpireIn, // Only if you are using refreshToken feature
    //       })
    //     ) {
    //       // Only if you are using refreshToken feature
    //       // Redirect or do-something
    //     } else {
    //       //Throw error
    //     }
    //   }
    // });
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/dashboard", { replace: true });
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  );
};
