import { LiteralUnion, AnyCase } from '@brixtol/tsutils';

export interface IContinentNames {
  EU: 'Europe';
  AS: 'Asia';
  NA: 'North America';
  SA: 'South America';
  OC: 'Oceania';
  AF: 'Africa';
}

export interface IContinents {
  /** Andorra */
  AD: 'EU';
  /** United Arab Emirates */
  AE: 'AS';
  /** Afghanistan */
  AF: 'AS';
  /** Antigua and Barbuda */
  AG: 'NA';
  /** Anguilla */
  AI: 'NA';
  /** Albania */
  AL: 'EU';
  /** Armenia */
  AM: 'AS';
  /** Angola */
  AO: 'AF';
  /** Antarctica */
  AQ: 'AN';
  /** Argentina */
  AR: 'SA';
  /** American Samoa */
  AS: 'OC';
  /** Austria */
  AT: 'EU';
  /** Australia */
  AU: 'OC';
  /** Aruba */
  AW: 'NA';
  /** Åland Islands */
  AX: 'EU';
  /** Azerbaijan */
  AZ: 'AS';
  /** Bosnia and Herzegovina */
  BA: 'EU';
  /** Barbados */
  BB: 'NA';
  /** Bangladesh */
  BD: 'AS';
  /** Belgium */
  BE: 'EU';
  /** Burkina Faso */
  BF: 'AF';
  /** Bulgaria */
  BG: 'EU';
  /** Bahrain */
  BH: 'AS';
  /** Burundi */
  BI: 'AF';
  /** Benin */
  BJ: 'AF';
  /** Saint Barthélemy */
  BL: 'NA';
  /** Bermuda */
  BM: 'NA';
  /** Brunei Darussalam */
  BN: 'AS';
  /** Bolivia (Plurinational State of) */
  BO: 'SA';
  /** Bonaire, Sint Eustatius and Saba */
  BQ: 'NA';
  /** Brazil */
  BR: 'SA';
  /** Bahamas */
  BS: 'NA';
  /** Bhutan */
  BT: 'AS';
  /** Bouvet Island */
  BV: 'AN';
  /** Botswana */
  BW: 'AF';
  /** Belarus */
  BY: 'EU';
  /** Belize */
  BZ: 'NA';
  /** Canada */
  CA: 'NA';
  /** Cocos (Keeling) Islands */
  CC: 'AS';
  /** Congo, Democratic Republic of the */
  CD: 'AF';
  /** Central African Republic */
  CF: 'AF';
  /** Congo, Republic of the */
  CG: 'AF';
  /** Switzerland */
  CH: 'EU';
  /** Côte d'Ivoire */
  CI: 'AF';
  /** Cook Islands */
  CK: 'OC';
  /** Chile */
  CL: 'SA';
  /** Cameroon */
  CM: 'AF';
  /** China */
  CN: 'AS';
  /** Colombia */
  CO: 'SA';
  /** Costa Rica */
  CR: 'NA';
  /** Cuba */
  CU: 'NA';
  /** Cabo Verde */
  CV: 'AF';
  /** Curaçao */
  CW: 'NA';
  /** Christmas Island */
  CX: 'AS';
  /** Cyprus */
  CY: 'EU';
  /** Czech Republic */
  CZ: 'EU';
  /** Germany */
  DE: 'EU';
  /** Djibouti */
  DJ: 'AF';
  /** Denmark */
  DK: 'EU';
  /** Dominica */
  DM: 'NA';
  /** Dominican Republic */
  DO: 'NA';
  /** Algeria */
  DZ: 'AF';
  /** Ecuador */
  EC: 'SA';
  /** Estonia */
  EE: 'EU';
  /** Egypt */
  EG: 'AF';
  /** Western Sahara */
  EH: 'AF';
  /** Eritrea */
  ER: 'AF';
  /** Spain */
  ES: 'EU';
  /** Ethiopia */
  ET: 'AF';
  /** Finland */
  FI: 'EU';
  /** Fiji */
  FJ: 'OC';
  /** Falkland Islands (Malvinas) */
  FK: 'SA';
  /** Micronesia (Federated States of) */
  FM: 'OC';
  /** Faroe Islands */
  FO: 'EU';
  /** France */
  FR: 'EU';
  /** Gabon */
  GA: 'AF';
  /** United Kingdom of Great Britain and Northern Ireland */
  GB: 'EU';
  /** Grenada */
  GD: 'NA';
  /** Georgia */
  GE: 'AS';
  /** French Guiana */
  GF: 'SA';
  /** Guernsey */
  GG: 'EU';
  /** Ghana */
  GH: 'AF';
  /** Gibraltar */
  GI: 'EU';
  /** Greenland */
  GL: 'NA';
  /** Gambia */
  GM: 'AF';
  /** Guinea */
  GN: 'AF';
  /** Guadeloupe */
  GP: 'NA';
  /** Equatorial Guinea */
  GQ: 'AF';
  /** Greece */
  GR: 'EU';
  /** South Georgia and the South Sandwich Islands */
  GS: 'AN';
  /** Guatemala */
  GT: 'NA';
  /** Guam */
  GU: 'OC';
  /** Guinea-Bissau */
  GW: 'AF';
  /** Guyana */
  GY: 'SA';
  /** Hong Kong */
  HK: 'AS';
  /** Heard Island and McDonald Islands */
  HM: 'AN';
  /** Honduras */
  HN: 'NA';
  /** Croatia */
  HR: 'EU';
  /** Haiti */
  HT: 'NA';
  /** Hungary */
  HU: 'EU';
  /** Indonesia */
  ID: 'AS';
  /** Ireland */
  IE: 'EU';
  /** Israel */
  IL: 'AS';
   /** Isle Of Man  */
  IM: 'EU';
  /** India (Indian Rupee) */
  IN: 'AS';
  /** British Indian Ocean Territory */
  IO: 'AS';
  /** Iraq */
  IQ: 'AS';
  /** Iran Islamic Republic  */
  IR: 'AS';
  /** Iceland */
  IS: 'EU';
  /** Italy */
  IT: 'EU';
  /** Jersey */
  JE: 'EU';
  /** Jamaica */
  JM: 'NA';
  /** Jordan */
  JO: 'AS';
  /** Japan */
  JP: 'AS';
  /** Kenya */
  KE: 'AF';
  /** Kyrgyzstan */
  KG: 'AS';
  /** Cambodia */
  KH: 'AS';
  /** Kiribati */
  KI: 'OC';
  /** Comoros */
  KM: 'AF';
  /** Saint Kitts and Nevis */
  KN: 'NA';
  /** North Korea */
  KP: 'AS';
  /** South Korea */
  KR: 'AS';
  /** Kuwait */
  KW: 'AS';
  /** Cayman Islands */
  KY: 'NA';
  /** Kazakhstan */
  KZ: 'AS';
  /** Laos */
  LA: 'AS';
  /** Lebanon */
  LB: 'AS';
  /** Saint Lucia */
  LC: 'NA';
  /** Liechtenstein */
  LI: 'EU';
  /** Sri Lanka */
  LK: 'AS';
  /** Liberia */
  LR: 'AF';
  /** Lesotho */
  LS: 'AF';
  /** Lithuania */
  LT: 'EU';
  /** Luxembourg */
  LU: 'EU';
  /** Latvia */
  LV: 'EU';
  /** Libya */
  LY: 'AF';
  /** Morocco */
  MA: 'AF';
  /** Monaco */
  MC: 'EU';
  /** Moldova, Republic of */
  MD: 'EU';
  /** Montenegro */
  ME: 'EU';
  /** Saint Martin (French part) */
  MF: 'NA';
  /** Madagascar */
  MG: 'AF';
  /** Marshall Islands */
  MH: 'OC';
  /** Macedonia */
  MK: 'EU';
  /** Mali */
  ML: 'AF';
  /** Myanmar */
  MM: 'AS';
  /** Mongolia */
  MN: 'AS';
  /** Macao */
  MO: 'AS';
  /** Northern Mariana Islands */
  MP: 'OC';
  /** Martinique */
  MQ: 'NA';
  /** Mauritania */
  MR: 'AF';
  /** Montserrat */
  MS: 'NA';
  /** Malta */
  MT: 'EU';
  /** Mauritius */
  MU: 'AF';
  /** Maldives */
  MV: 'AS';
  /** Malawi */
  MW: 'AF';
  /** Mexico */
  MX: 'NA';
  /** Malaysia */
  MY: 'AS';
  /** Mozambique */
  MZ: 'AF';
  /** Namibia */
  NA: 'AF';
  /** New Caledonia */
  NC: 'OC';
  /** Niger */
  NE: 'AF';
  /** Norfolk Island */
  NF: 'OC';
  /** Nigeria */
  NG: 'AF';
  /** Nicaragua */
  NI: 'NA';
  /** Netherlands */
  NL: 'EU';
  /** Norway */
  NO: 'EU';
  /** Nepal */
  NP: 'AS';
  /** Nauru */
  NR: 'OC';
  /** Niue */
  NU: 'OC';
  /** New Zealand */
  NZ: 'OC';
  /** Oman */
  OM: 'AS';
  /** Panama */
  PA: 'NA';
  /** Peru */
  PE: 'SA';
  /** French Polynesia */
  PF: 'OC';
  /** Papua New Guinea */
  PG: 'OC';
  /** Philippines */
  PH: 'AS';
  /** Pakistan */
  PK: 'AS';
  /** Poland */
  PL: 'EU';
  /** Saint Pierre and Miquelon */
  PM: 'NA';
  /** Pitcairn */
  PN: 'OC';
  /** Puerto Rico */
  PR: 'NA';
  /** Palestine */
  PS: 'AS';
  /** Portugal  */
  PT: 'EU';
  /** Palau */
  PW: 'OC';
  /** Paraguay  */
  PY: 'SA';
  /** Qatar */
  QA: 'AS';
  /** Reunion */
  RE: 'AF';
  /** Romania  */
  RO: 'EU';
  /** Serbia  */
  RS: 'EU';
  /** Russian Federation */
  RU: 'EU';
  /** Rwanda */
  RW: 'AF';
  /** Saudi Arabia */
  SA: 'AS';
  /** Solomon Islands */
  SB: 'OC';
  /** Seychelles */
  SC: 'AF';
  /** Sudan */
  SD: 'AF';
  /** Sweden */
  SE: 'EU';
  /** Singapore */
  SG: 'AS';
  /** Saint Helena Ascension And Tristan Da Cunha */
  SH: 'AF';
  /** Slovenia */
  SI: 'EU';
  /** Svalbard and Jan Mayen  */
  SJ: 'EU';
  /** Slovakia  */
  SK: 'EU';
  /** Sierra Leone  */
  SL: 'AF';
  /** San Marino */
  SM: 'EU';
  /** Senegal */
  SN: 'AF';
  /** Somalia */
  SO: 'AF';
  /** Suriname */
  SR: 'SA';
  /** South Sudan */
  SS: 'AF';
  /** Sao Tome And Principe */
  ST: 'AF';
  /** El Salvador */
  SV: 'NA';
  /** Sint Maarten */
  SX: 'NA';
  /** Syrian Arab Republic  */
  SY: 'AS';
  /** Swaziland */
  SZ: 'AF';
  /** Turks and Caicos Islands */
  TC: 'NA';
  /** Chad */
  TD: 'AF';
  /** French Southern Territories */
  TF: 'AN';
  /** Togo */
  TG: 'AF';
  /** Thailand */
  TH: 'AS';
  /** Tajikistan */
  TJ: 'AS';
  /** Tokelau */
  TK: 'OC';
  /** Timor Leste */
  TL: 'OC';
  /** Turkmenistan */
  TM: 'AS';
  /** Tunisia */
  TN: 'AF';
  /** Tonga */
  TO: 'OC';
  /** Turkey */
  TR: 'AS';
  /** Trinidad and Tobago */
  TT: 'NA';
  /** Tuvalu */
  TV: 'OC';
  /** Taiwan */
  TW: 'AS';
  /** Tanzania United Republic */
  TZ: 'AF';
  /** Ukraine */
  UA: 'EU';
  /** Uganda */
  UG: 'AF';
  /** United States Minor Outlying Islands */
  UM: 'OC';
  /** United States Of America */
  US: 'NA';
  /** Uruguay */
  UY: 'SA';
  /** Uzbekistan */
  UZ: 'AS';
  /** Holy See */
  VA: 'EU';
  /** Saint Vincent And The Grenadines */
  VC: 'NA';
  /** Venezuela */
  VE: 'SA';
  /** Virgin Islands (British) */
  VG: 'NA';
  /** Virgin Islands (U.S.) */
  VI: 'NA';
  /** Vietnam */
  VN: 'AS';
  /** Vanuatu */
  VU: 'OC';
  /** Wallis and Futuna */
  WF: 'OC';
  /** Samoa */
  WS: 'OC';
  /** Republic of Kosovo */
  XK: 'EU';
  /** Yemen */
  YE: 'AS';
  /** Mayotte */
  YT: 'AF';
  /** South Africa */
  ZA: 'AF';
  /** Zambia */
  ZM: 'AF';
  /** Zimbabwe */
  ZW: 'AF';
}

/**
 * Continent Code
 *
 * Extracts the countient code from the IContinents interface
 * which is use as the Return type reference
 */
export type GetContinentCodes<ISO> = (
  ISO extends keyof IContinents ? IContinents[ISO] : never
)

/**
 * Continent Name
 *
 * Extracts the countinent name using the continent code
 */
export type ContinentName<Code> = (
  Code extends keyof IContinentNames ? IContinentNames[Code] : never
)

/**
 * Continent Codes Map
 *
 * Country code (ISO 3166-1 alpha-2) to continent code
 * **Readonly** object.
 */
export const ContinentCodes: Readonly<IContinents> = Object.freeze({
  AD: 'EU',
  AE: 'AS',
  AF: 'AS',
  AG: 'NA',
  AI: 'NA',
  AL: 'EU',
  AM: 'AS',
  AO: 'AF',
  AQ: 'AN',
  AR: 'SA',
  AS: 'OC',
  AT: 'EU',
  AU: 'OC',
  AW: 'NA',
  AX: 'EU',
  AZ: 'AS',
  BA: 'EU',
  BB: 'NA',
  BD: 'AS',
  BE: 'EU',
  BF: 'AF',
  BG: 'EU',
  BH: 'AS',
  BI: 'AF',
  BJ: 'AF',
  BL: 'NA',
  BM: 'NA',
  BN: 'AS',
  BO: 'SA',
  BQ: 'NA',
  BR: 'SA',
  BS: 'NA',
  BT: 'AS',
  BV: 'AN',
  BW: 'AF',
  BY: 'EU',
  BZ: 'NA',
  CA: 'NA',
  CC: 'AS',
  CD: 'AF',
  CF: 'AF',
  CG: 'AF',
  CH: 'EU',
  CI: 'AF',
  CK: 'OC',
  CL: 'SA',
  CM: 'AF',
  CN: 'AS',
  CO: 'SA',
  CR: 'NA',
  CU: 'NA',
  CV: 'AF',
  CW: 'NA',
  CX: 'AS',
  CY: 'EU',
  CZ: 'EU',
  DE: 'EU',
  DJ: 'AF',
  DK: 'EU',
  DM: 'NA',
  DO: 'NA',
  DZ: 'AF',
  EC: 'SA',
  EE: 'EU',
  EG: 'AF',
  EH: 'AF',
  ER: 'AF',
  ES: 'EU',
  ET: 'AF',
  FI: 'EU',
  FJ: 'OC',
  FK: 'SA',
  FM: 'OC',
  FO: 'EU',
  FR: 'EU',
  GA: 'AF',
  GB: 'EU',
  GD: 'NA',
  GE: 'AS',
  GF: 'SA',
  GG: 'EU',
  GH: 'AF',
  GI: 'EU',
  GL: 'NA',
  GM: 'AF',
  GN: 'AF',
  GP: 'NA',
  GQ: 'AF',
  GR: 'EU',
  GS: 'AN',
  GT: 'NA',
  GU: 'OC',
  GW: 'AF',
  GY: 'SA',
  HK: 'AS',
  HM: 'AN',
  HN: 'NA',
  HR: 'EU',
  HT: 'NA',
  HU: 'EU',
  ID: 'AS',
  IE: 'EU',
  IL: 'AS',
  IM: 'EU',
  IN: 'AS',
  IO: 'AS',
  IQ: 'AS',
  IR: 'AS',
  IS: 'EU',
  IT: 'EU',
  JE: 'EU',
  JM: 'NA',
  JO: 'AS',
  JP: 'AS',
  KE: 'AF',
  KG: 'AS',
  KH: 'AS',
  KI: 'OC',
  KM: 'AF',
  KN: 'NA',
  KP: 'AS',
  KR: 'AS',
  KW: 'AS',
  KY: 'NA',
  KZ: 'AS',
  LA: 'AS',
  LB: 'AS',
  LC: 'NA',
  LI: 'EU',
  LK: 'AS',
  LR: 'AF',
  LS: 'AF',
  LT: 'EU',
  LU: 'EU',
  LV: 'EU',
  LY: 'AF',
  MA: 'AF',
  MC: 'EU',
  MD: 'EU',
  ME: 'EU',
  MF: 'NA',
  MG: 'AF',
  MH: 'OC',
  MK: 'EU',
  ML: 'AF',
  MM: 'AS',
  MN: 'AS',
  MO: 'AS',
  MP: 'OC',
  MQ: 'NA',
  MR: 'AF',
  MS: 'NA',
  MT: 'EU',
  MU: 'AF',
  MV: 'AS',
  MW: 'AF',
  MX: 'NA',
  MY: 'AS',
  MZ: 'AF',
  NA: 'AF',
  NC: 'OC',
  NE: 'AF',
  NF: 'OC',
  NG: 'AF',
  NI: 'NA',
  NL: 'EU',
  NO: 'EU',
  NP: 'AS',
  NR: 'OC',
  NU: 'OC',
  NZ: 'OC',
  OM: 'AS',
  PA: 'NA',
  PE: 'SA',
  PF: 'OC',
  PG: 'OC',
  PH: 'AS',
  PK: 'AS',
  PL: 'EU',
  PM: 'NA',
  PN: 'OC',
  PR: 'NA',
  PS: 'AS',
  PT: 'EU',
  PW: 'OC',
  PY: 'SA',
  QA: 'AS',
  RE: 'AF',
  RO: 'EU',
  RS: 'EU',
  RU: 'EU',
  RW: 'AF',
  SA: 'AS',
  SB: 'OC',
  SC: 'AF',
  SD: 'AF',
  SE: 'EU',
  SG: 'AS',
  SH: 'AF',
  SI: 'EU',
  SJ: 'EU',
  SK: 'EU',
  SL: 'AF',
  SM: 'EU',
  SN: 'AF',
  SO: 'AF',
  SR: 'SA',
  SS: 'AF',
  ST: 'AF',
  SV: 'NA',
  SX: 'NA',
  SY: 'AS',
  SZ: 'AF',
  TC: 'NA',
  TD: 'AF',
  TF: 'AN',
  TG: 'AF',
  TH: 'AS',
  TJ: 'AS',
  TK: 'OC',
  TL: 'OC',
  TM: 'AS',
  TN: 'AF',
  TO: 'OC',
  TR: 'AS',
  TT: 'NA',
  TV: 'OC',
  TW: 'AS',
  TZ: 'AF',
  UA: 'EU',
  UG: 'AF',
  UM: 'OC',
  US: 'NA',
  UY: 'SA',
  UZ: 'AS',
  VA: 'EU',
  VC: 'NA',
  VE: 'SA',
  VG: 'NA',
  VI: 'NA',
  VN: 'AS',
  VU: 'OC',
  WF: 'OC',
  WS: 'OC',
  XK: 'EU',
  YE: 'AS',
  YT: 'AF',
  ZA: 'AF',
  ZM: 'AF',
  ZW: 'AF'
});

/**
 * Continent Names Map
 *
 * Continent codes to continent name (in English)
 * **Readonly** object.
 */
export const ContinentNames: Readonly<IContinentNames> = Object.freeze({
  EU: 'Europe',
  AS: 'Asia',
  NA: 'North America',
  SA: 'South America',
  OC: 'Oceania',
  AF: 'Africa'
});

/**
 * Get Continent Code
 *
 * Requires a 2 Letter (ISO 3166-1 alpha-2) country
 * code to be passed and returns a 2 letter continent code.
 *
 * > _Accepts either uppercase, lowercase or
 * or a combination of either_
 */
export function getContinentCode <ISO extends AnyCase<keyof IContinents>> (
  code: LiteralUnion<ISO>
): GetContinentCodes<Uppercase<ISO>> {

  const continentCode = ContinentCodes[code.toUpperCase()];

  if (!continentCode) throw new Error(`"${code}" is an invalid ISO country code`);

  return continentCode;

}

/**
 * Get Continent Name
 *
 * Requires a 2 Letter (ISO 3166-1 alpha-2) country
 * code to be passed and returns a 2 letter continent code.
 *
 * > _Accepts either uppercase, lowercase or
 * or a combination of either_
 */
export function getContinentName <ISO extends AnyCase<keyof IContinents>> (
  code: LiteralUnion<ISO>
): ContinentName<GetContinentCodes<Uppercase<ISO>>> {

  const continentCode = ContinentCodes[code.toUpperCase()];

  if (!continentCode) throw new Error(`"${code}" is an invalid ISO country code`);

  return ContinentNames[continentCode];

}
