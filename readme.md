## @brixtol/country-continent

Country code ([3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)) to Continent code/name mappings used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with Localization and i18n operations.

> Mappings returned in the English Language.

Minified: 2.39 KB <br>
Gzipped: 897 B

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add @brixtol/country-continent
```

[npm](https://www.npmjs.com/)

```cli
npm install @brixtol/country-continent
```

[Yarn](https://yarnpkg.com/)

```cli
yarn add @brixtol/country-continent
```

### Usage

You can pass in a 2 letter country code that is lowercase, uppercase or a mixture of both.

```javascript
import { getContinentCode, getContinentName } from '@brixtol/country-continent';

const sweden = getContinentName('SE'); // Europe
const russia = getContinentName('ru'); // Asia
const usa = getContinentName('uS'); // North America
const australia = getContinentCode('AU'); // OC
```

###### EXTRAS

The module also exposes the raw mappings and interface on the export. The mappings object is provided **read only** using [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). In addition to the raw mappings a ISO code union export is also exposed.

<!--prettier-ignore-->
```ts
import { IContinents, ContinentCodes, ContinentNames } from '@brixtol/country-continent';

// Mapping Object

ContinentCodes.SE; // EU
ContinentNames.SE; // Europe
ContinentCodes.NL; // EU
ContinentNames.NL; // Europe
ContinentCodes.RU; // AS
ContinentNames.RU; // Asia

// Interface

IContinents.SE; // EU
IContinents.NL; // EU
IContinents.RU; // AS
```

> The interface is identical to the mapping

### Related

Static GeoIP utility

- [@brixtol/i18n](https://github.com/brixtol/i18n)

Country code to currency code mappings:

- [@brixtol/currency-codes](https://github.com/brixtol/currency-codes)

Currency code to currency symbol mappings:

- [@brixtol/currency-symbols](https://github.com/brixtol/currency-symbols)

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
