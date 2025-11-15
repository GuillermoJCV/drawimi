import { PropertySymbol } from "happy-dom";
//import ResizeObserver from "resize-observer-polyfill";
import "vitest-axe/extend-expect";
//import { vi } from "vitest";

type Window = typeof global.window;
const window = global.document[PropertySymbol.window] as Window;
global.window = window;

//This has been rewritted from using happy-dom instead of jsdom

// vi.stubGlobal("ResizeObserver", ResizeObserver);
// //window["ResizeObserver"] = ResizeObserver;
// global.ResizeObserver = ResizeObserver;

// //matchMedia mock
// Object.defineProperty(global, "matchMedia", {
//   writable: true,
//   value: vi.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: vi.fn(), // deprecated
//     removeListener: vi.fn(), // deprecated
//     addEventListener: vi.fn(),
//     removeEventListener: vi.fn(),
//     dispatchEvent: vi.fn(),
//   })),
// });

// // IntersectionObserver mock
// const IntersectionObserverMock = vi.fn(() => ({
//   disconnect: vi.fn(),
//   observe: vi.fn(),
//   takeRecords: vi.fn(),
//   unobserve: vi.fn(),
// }));
// vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
// //window["IntersectionObserver"] = IntersectionObserverMock;
// global.window.IntersectionObserver = window.IntersectionObserver;

// // Scroll Methods mock
// //window.Element.prototype.scrollTo = () => {};
// //window.Element.prototype.scrollIntoView = () => {};
// global.window.Element.prototype.scrollTo = vi.fn();
// global.window.Element.prototype.scrollIntoView = vi.fn();

// // requestAnimationFrame mock
// //window.requestAnimationFrame = (cb) => setTimeout(cb, 1000 / 60);
// global.window.requestAnimationFrame = (cb) => setTimeout(cb, 1000 / 60);

// // URL object mock
// // window.URL.createObjectURL = () => "https://i.pravatar.cc/300";
// // window.URL.revokeObjectURL = () => {};

// global.window.URL.createObjectURL = () => "https://i.pravatar.cc/300";
// global.window.URL.revokeObjectURL = () => {};

// // navigator mock
// Object.defineProperty(global.window, "navigator", {
//   value: {
//     clipboard: {
//       writeText: vi.fn(),
//     },
//   },
// });

// // localStorage mock
// Object.defineProperty(global.window, "localStorage", {
//   value: vi.fn().mockImplementation(() => ({
//     storage: {},
//     setItem: vi.fn(),
//     getItem: vi.fn(),
//     removeItem: vi.fn(),
//     get: vi.fn(),
//     key: vi.fn((i) => {}),
//     clear: vi.fn(),
//   })),
// });

// // sessionStorage mock
// Object.defineProperty(global.window, "sessionStorage", {
//   value: vi.fn().mockImplementation(() => ({
//     store: {},
//     setItem: vi.fn(),
//     getItem: vi.fn(),
//     removeItem: vi.fn(),
//     get: vi.fn(),
//     key: vi.fn((i) => {}),
//     clear: vi.fn(),
//   })),
// });

// Override globalThis
//Object.assign(global, { window, document: window.document });
