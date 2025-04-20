import Logo from "../assets/logo.svg?react";
import styles from "../css/components/NavBar.module.css";
import useReset from "../helpers/use-reset";

function NavBar() {
    const reset = useReset();
    return (
        <div className={styles.navbar}>
            <div className={styles.titleContainer}>
                <Logo className={styles.logo} />
                <p className={styles.title}>Name Indian State</p>
            </div>
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
