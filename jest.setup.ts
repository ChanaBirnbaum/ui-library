import '@testing-library/jest-dom'

// Polyfill TextEncoder/TextDecoder for @mui/x-data-grid (needed in jsdom environment)
import { TextEncoder, TextDecoder } from 'util'
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as typeof global.TextEncoder
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder
}

// global mocks or test helpers can be placed here
