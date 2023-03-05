import "./Login.css";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";

export const Login = () => {
  const signIn = useSignIn();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    signIn({
      token: "this is a token",
      expiresIn: 300000000,
      tokenType: "Bearer",
      authState: {x: 1},
    })
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
  };

  return (
    <Container>
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={onSubmit}>
          <label>
            <p>Email</p>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Container>
  );
};
