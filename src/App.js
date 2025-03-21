import { BrowserRouter} from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";
import Main from "./pages/Main";
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
