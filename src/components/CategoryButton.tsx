import { useAtom } from "jotai";
import styles from "../css/components/CategoryButton.module.css";
import { letterAtom } from "../helpers/atoms";
import clsx from "clsx";

function CategoryButton({ letter }: { letter: string }) {
    const [selection, setSelection] = useAtom(letterAtom);
    return (
        <button
            type="button"
            className={clsx(
                styles.button,
                selection === letter && styles.selected,
            )}
            onClick={() => setSelection(letter)}
        >
            {letter}
        </button>
    );
}

export default CategoryButton;
