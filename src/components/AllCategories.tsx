import styles from "../css/components/AllCategories.module.css";
import { mapKeys } from "../helpers/map-data";
import CategoryButton from "./CategoryButton";

const letters = [...new Set(mapKeys.map((name) => name[0]))];

function AllCategories() {
    return (
        <div className={styles.categoriesContainer}>
            {letters.map((letter) => (
                <CategoryButton key={letter} letter={letter} />
            ))}
        </div>
    );
}

export default AllCategories;
