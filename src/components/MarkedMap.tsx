import { mapData } from "../helpers/map-data";
import styles from "../css/components/MarkedMap.module.css";
import clsx from "clsx";

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
