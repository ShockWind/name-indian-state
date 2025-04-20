# Name Indian State

This is a quiz webapp about naming India's states & union territories from shown map.

<https://name-indian-state.pages.dev/>

![alt text](.github/assets/screenshot-1.png)

## Tech Stack

- React
- Typescript
- Vite (& vite-plugin-pwa, vite-plugin-svgr, lightningcss, workbox)
- Wikidata (& SPARQL, wikibase-sdk)
- BiomeJS
- GitHub (& GitHub Actions)
- Cloudflare Pages

## Setup instructions

- Install [PNPM](https://pnpm.io/), [Node.js](https://nodejs.org/), and [Git](https://git-scm.com/).
- Clone the repository using `gh repo clone ShockWind/name-indian-state`.
- Enter its directory using `cd name-indian-state`.
- Run `pnpm install` to set up dependencies.
- Run `pnpm run download-maps` to download the latest maps.
- Run `pnpm run dev` to launch a development preview.
- Open the dev server link in your browser

## Licenses

All the map images are sources from Wikimedia Foundation through this [Wikidata query](https://w.wiki/DrRc) and Licensed under [Creative Commons Attribution-Share Alike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/deed.en) and [Creative Commons Attribution-Share Alike 3.0 Germany](https://en.wikipedia.org/wiki/en:Creative_Commons) licenses. See [scripts/map-query.sparql](scripts/map-query.sparql).

This project itself is licensed under [MIT](LICENSE).

Dependencies have their own licenses, see `pnpm licenses ls` to get a list of dependency licenses.
