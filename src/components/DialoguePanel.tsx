import clsx from "clsx";
import styles from "../css/components/DialoguePanel.module.css";
import useReset from "../helpers/use-reset";

function DialoguePanel({
    givenAnswer,
    expectedAnswer,
}: { givenAnswer: string; expectedAnswer: string }) {
    const isCorrect = givenAnswer === expectedAnswer;
    const reset = useReset();
    return (
        <div
            className={clsx(
                styles.panel,
                isCorrect ? styles.correct : styles.incorrect,
            )}
        >
            <p className={styles.heading}>
                {isCorrect ? (
                    `Correct Answer: ${givenAnswer}`
                ) : (
                    <>
                        {`Incorrect Answer: ${givenAnswer}`}
                        <br />
                        {`Expected Answer: ${expectedAnswer}`}{" "}
                    </>
                )}
            </p>
            <button
                type="button"
                className={styles.button}
                onClick={() => {
                    reset();
                }}
            >
                Next
            </button>
        </div>
    );
}

export default DialoguePanel;
