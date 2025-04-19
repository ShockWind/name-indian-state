import MarkedMap from './components/MarkedMap.tsx';
import PWABadge from "./components/PWABadge.tsx";
import "./css/App.css";


function App() {
    return (
        <>
            <MarkedMap value='West Bengal' />
            <PWABadge />
        </>
    );
}

export default App;
