import type { FC, ComponentProps } from "react";

// https://github.com/pd4d10/vite-plugin-svgr/blob/cef5adead59da0abfc0b81edf4b2022b193e4607/client.d.ts
type SVGComponent = FC<
    ComponentProps<"svg"> & {
        title?: string;
        titleId?: string;
        desc?: string;
        descId?: string;
    }
>;

const mapDataRaw = import.meta.glob<SVGComponent>("../assets/maps/*.svg", {
    query: "?react",
    import: "default",
    eager: true,
});
export const mapData = Object.fromEntries(
    Object.entries(mapDataRaw).map(([key, value]) => [
        key.replace(/.+\/(.+?).svg/g, "$1"),
        value,
    ]),
);
console.log(mapData);
export const mapKeys = Object.keys(mapData).sort();
