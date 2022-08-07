import { Router } from "@reach/router";
import About from "./pages/About";
import ClockPage from "./pages/ClockPage";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
function App() {
    return (
        <Router>
            <Home path="/" />
            <Help path="help" />
            <About path="about" />
            <ClockPage path="/clock" />
            <Tasks path="/tasks" />
        </Router>
    );
}

export default App;
