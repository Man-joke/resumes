import { BrowserRouter} from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import { ConfigProvider } from "antd";


function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={{ cssVar: false, hashed: false }}>
        <Main />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
