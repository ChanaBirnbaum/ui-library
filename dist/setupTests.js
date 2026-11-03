import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
// Polyfill TextEncoder/TextDecoder for jsdom (required by @mui/x-data-grid)
if (typeof globalThis.TextEncoder === 'undefined') {
    globalThis.TextEncoder = TextEncoder;
    globalThis.TextDecoder = TextDecoder;
}
// Polyfill DataTransfer for jsdom (used in file input tests)
if (typeof globalThis.DataTransfer === 'undefined') {
    class DataTransferMock {
        constructor() {
            this.items = {
                files: [],
                add(f) { this.files.push(f); },
            };
        }
        get files() {
            const list = this.items.files;
            return Object.assign(list, {
                item: (i) => list[i] ?? null,
                length: list.length,
            });
        }
    }
    globalThis.DataTransfer = DataTransferMock;
}
// Suppress known MUI Popper/Popover anchorEl warning in jsdom environment
// jsdom does not support full layout, so MUI anchor validation always warns
const originalError = console.error;
const originalWarn = console.warn;
beforeAll(() => {
    console.error = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('anchorEl'))
            return;
        originalError(...args);
    };
    console.warn = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('anchorEl'))
            return;
        originalWarn(...args);
    };
});
afterAll(() => {
    console.error = originalError;
    console.warn = originalWarn;
});
