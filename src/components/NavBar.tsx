import styles from "../css/components/NavBar.module.css";
import useReset from "../helpers/use-reset";

function NavBar() {
    const reset = useReset();
    return (
        <div className={styles.navbar}>
            <p className={styles.title}>Name Indian State</p>
            <button
                type="button"
                className={styles.restartButton}
                onClick={() => {
                    reset();
                }}
            >
                Restart
            </button>
        </div>
    );
}

export default NavBar;
