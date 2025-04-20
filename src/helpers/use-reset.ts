import { useSetAtom } from "jotai";
import random from "random";
import {
    UNSELECTED,
    currentAnswerAtom,
    expectedAnswerAtom,
    letterAtom,
} from "./atoms";
import { mapKeys } from "./map-data";

export default function useReset() {
    const setNextQuestion = useSetAtom(expectedAnswerAtom);
    const setCurrentAnswer = useSetAtom(currentAnswerAtom);
    const setSelectedLetter = useSetAtom(letterAtom);
    return () => {
        // biome-ignore lint/style/noNonNullAssertion: We know the array is non-empty
        setNextQuestion(random.choice(mapKeys)!);
        setCurrentAnswer(UNSELECTED);
        setSelectedLetter(UNSELECTED);
    };
}
