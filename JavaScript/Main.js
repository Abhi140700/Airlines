const app = document.querySelector('#App');

import { header } from "./navigation.js";
app.append(header);

import { main } from "./herounit.js";
app.append(main);

import { section2 } from "./services.js";
main.append(section2);

import { section3 } from "./offers.js";
main.append(section3);

import { section4 } from "./destination.js";
main.append(section4);

import { section5 } from "./package.js";
main.append(section5);

import { section6 } from "./partners.js";
main.append(section6);

import { section7 } from "./flightOption.js";
main.append(section7);

import { section8 } from "./news.js";
main.append(section8);

import { footer } from "./footer.js";
app.append(footer);