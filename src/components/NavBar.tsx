import styles from "../css/components/NavBar.module.css";

function NavBar() {
    return (
        <div className={styles.navbar}>
            <p className={styles.title}>Name Indian State</p>
            <button type="button" className={styles.restartButton}>
                Restart
            </button>
        </div>
    );
}

export default NavBar;
