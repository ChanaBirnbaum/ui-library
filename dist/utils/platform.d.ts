/**
 * True on a real iPhone / iPad browser. Every iOS browser is WebKit, so its vendor is Apple.
 * Desktop devtools device emulation changes only the user agent and keeps the desktop vendor,
 * so it returns false there — on purpose, since desktop browsers render native controls differently.
 */
export declare function isIosWebKit(): boolean;
