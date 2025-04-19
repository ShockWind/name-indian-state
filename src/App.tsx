import AllCategories from "./components/AllCategories.tsx";
import AnswersPanel from "./components/AnswersPanel.tsx";
import MarkedMap from "./components/MarkedMap.tsx";
import NavBar from "./components/NavBar.tsx";
import PWABadge from "./components/PWABadge.tsx";
import "./css/App.css";

function App() {
    return (
        <>
            <NavBar />
            <MarkedMap value="West Bengal" />
            <AllCategories />
            <AnswersPanel />
            <PWABadge />
        </>
    );
}

export default App;
