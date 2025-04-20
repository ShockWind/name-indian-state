import { useAtomValue } from "jotai";
import AllCategories from "./components/AllCategories.tsx";
import AnswersPanel from "./components/AnswersPanel.tsx";
import DialoguePanel from "./components/DialoguePanel.tsx";
import MarkedMap from "./components/MarkedMap.tsx";
import NavBar from "./components/NavBar.tsx";
import PWABadge from "./components/PWABadge.tsx";
import "./css/App.css";
import {
    UNSELECTED,
    currentAnswerAtom,
    expectedAnswerAtom,
} from "./helpers/atoms.ts";

function App() {
    const currentAnswer = useAtomValue(currentAnswerAtom);
    const expectedAnswer = useAtomValue(expectedAnswerAtom);
    return (
        <>
            <NavBar />
            <MarkedMap value={expectedAnswer} />
            {currentAnswer === UNSELECTED ? (
                <>
                    <AllCategories />
                    <AnswersPanel />
                </>
            ) : (
                <DialoguePanel
                    expectedAnswer={expectedAnswer}
                    givenAnswer={currentAnswer}
                />
            )}
            <PWABadge />
        </>
    );
}

export default App;
