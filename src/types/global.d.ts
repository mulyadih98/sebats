/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/global.d.ts
export {};

declare global {
  interface Window {
    api: {
      getProducts: () => Promise<any[]>;
      searchProducts: (args) => Promise<any[]>;
      // tambahkan method lain sesuai yang di-expose
    };
  }
}
