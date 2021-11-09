global.fetch = require("jest-fetch-mock");
fetch.mockResponse(JSON.stringify({}));

import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;
