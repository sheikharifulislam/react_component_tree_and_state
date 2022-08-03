import { Router } from "@reach/router";
import About from "./pages/About";
import Help from "./pages/Help";
import Home from "./pages/Home";
function App() {
    return (
        <Router>
            <Home path="/" />
            <Help path="help" />
            <About path="about" />
        </Router>
    );
}

export default App;
