import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Error } from "./pages/Error/Error";

const App = (props) => {
  console.log(window.innerHeight);
  return (
    <div className="App">
      <Header></Header>
      <div
        style={{
          minHeight:
            (window.innerHeight < 800 ? window.innerHeight : 800) + "px",
        }}
      >
        {(props.error && <Error />) || <Outlet />}
      </div>
      <Footer className="position-absolute bottom-0"></Footer>
    </div>
  );
};

export default App;
