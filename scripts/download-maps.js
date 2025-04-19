import { WBK, simplifySparqlResults } from "wikibase-sdk";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const wbk = WBK({
    instance: "https://www.wikidata.org",
    sparqlEndpoint: "https://query.wikidata.org/sparql",
});
const outputDir = resolve(import.meta.dirname, "..", "src/assets/maps");
const queryScript = await readFile(
    resolve(import.meta.dirname, "map-query.sparql"),
    {
        encoding: "utf-8",
    }
);
// https://github.com/maxlath/wikibase-sdk/blob/HEAD/docs/sparql_query.md
const queryURL = wbk.sparqlQuery(queryScript);
// https://foundation.wikimedia.org/wiki/Policy:Wikimedia_Foundation_User-Agent_Policy
const headers = {
    "User-Agent": "NameIndianStateStartupBot/0.0 (https//nameindianstate.pages.dev)",
};
const mapData = simplifySparqlResults(
    await fetch(queryURL, { headers }).then((response) => response.json())
);
// create outputDir if it doesn't exist
await mkdir(outputDir, { recursive: true });

// make requests in parallel
await Promise.allSettled(
    mapData.map(async ({ itemLabel: itemLabelRaw, mapURL }) => {
        // handle National Capital Territory of Delhi https://www.wikidata.org/wiki/Q9357528
        const itemLabel = itemLabelRaw.replace(
            /National Capital Territory of /,
            ""
        );
        const filePath = resolve(outputDir, `${itemLabel}.svg`);
        const result = await fetch(mapURL, { headers })
            .then((response) => response.arrayBuffer())
            .then((response) => new Uint8Array(response));
        console.log(`Downloading ${mapURL} to ${filePath}`);
        await writeFile(filePath, result);
        console.log(`Finished downloading map for ${itemLabel}`)
    })
);

console.log("Finished downloading all maps");
