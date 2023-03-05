import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Error } from "./pages/Error/Error";
import { Login } from "./pages/Login/Login";

const App = (props) => {
  return (
    <div className="App">
      <Header></Header>
      <div
        style={{
          minHeight: window.innerHeight - window.innerHeight * 0.25 + "px",
        }}
      >
        {(props.error && <Error />) || <Outlet />}
      </div>
      <Footer className="position-absolute bottom-0"></Footer>
    </div>
  );
};

export default App;
