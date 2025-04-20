import clsx from "clsx";
import styles from "../css/components/MarkedMap.module.css";
import { mapData } from "../helpers/map-data";

function MarkedMap({ value }: { value: string }) {
    const MapComponent = mapData[value];
    return (
        <MapComponent
            className={clsx(
                styles.svg,
                value === "Andhra Pradesh" && styles.svgAltColor,
            )}
        />
    );
}

export default MarkedMap;
