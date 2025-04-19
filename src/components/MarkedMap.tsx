import { mapData } from "../helpers/map-data";
import styles from "../css/components/MarkedMap.module.css";

function MarkedMap({ value }: { value: keyof typeof mapData }) {
    const MapComponent = mapData[value];
    return <MapComponent className={styles.svg} />;
}

export default MarkedMap;
