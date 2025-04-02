/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*": {
    boxSizing: "border-box",
  } as const,
  "html, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
  },
  body: {
    margin: "17px 40px",
    paddingBottom: '150px',
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
  },
  "p, h2, h3": {
    margin: 0,
    padding: 0,
  },
};
