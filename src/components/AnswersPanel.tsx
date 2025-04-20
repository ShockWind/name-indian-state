import { useAtomValue, useSetAtom } from "jotai";
import { useMemo } from "react";
import styles from "../css/components/AnswersPanel.module.css";
import { UNSELECTED, currentAnswerAtom, letterAtom } from "../helpers/atoms";
import { mapKeys } from "../helpers/map-data";

function AnswersPanel() {
    const selectedLetter = useAtomValue(letterAtom);
    const setAnswer = useSetAtom(currentAnswerAtom);
    const optionList = useMemo(
        () => mapKeys.filter((item) => item.startsWith(selectedLetter)),
        [selectedLetter],
    );
    return (
        <div className={styles.panel}>
            {selectedLetter === UNSELECTED ? (
                <p className={styles.hintText}>
                    Select the first letter of your answer.
                </p>
            ) : (
                optionList.map((item) => (
                    <button
                        key={item}
                        type="button"
                        className={styles.answerButton}
                        onClick={() => setAnswer(item)}
                    >
                        {item}
                    </button>
                ))
            )}
        </div>
    );
}

export default AnswersPanel;
