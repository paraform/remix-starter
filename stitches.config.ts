import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const media = {
  bp1: "(min-width: 640px)",
  bp2: "(min-width: 768px)",
  bp3: "(min-width: 1024px)",
  bp4: "(min-width: 1280px)",
  bp5: "(min-width: 1536px)",
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: "#0f0f14",
      white: "#FFFFFF",
      // Grey
      grey00: "#f5f5f5",
      grey05: "#F0F0F0",
      grey10: "#DDDCDF",
      grey20: "#B9B8BD",
      grey30: "#95949A",
      grey40: "#6f6e74",
      grey50: "#57565C",
      grey60: "#403F43",
      grey70: "#2E2D31",
      grey80: "#1A1A1A",
      grey90: "#121314",
      // Steel
      steel00: "#EFEFF9",
      steel05: "#F2F2FF",
      steel10: "#D5D3DD",
      steel20: "#B2B1BC",
      steel30: "#92919B",
      steel40: "#6B6A72",
      steel50: "#57565E",
      steel60: "#3E3E42",
      steel70: "#2E2D31",
      steel80: "#1A1A1A",
      steel90: "#121314",
      // Blue
      blue00: "#E9F7FF",
      blue05: "#CCDFFF",
      blue10: "#9ABFFF",
      blue20: "#669AFF",
      blue30: "#3E7CFF",
      blue40: "#004AFE",
      blue50: "#0000FF",
      blue60: "#04009F",
      blue70: "#00006D",
      blue80: "#000044",
      blue90: "#000034",
      // Green
      green00: "#EAFFEE",
      green05: "#D0FDDB",
      green10: "#AFFBC1",
      green20: "#6FF38D",
      green30: "#00C168",
      green40: "#008143",
      green50: "#007637",
      green60: "#00692D",
      green70: "#005B23",
      green80: "#002414",
      green90: "#001A08",
      // Red
      red00: "#F9EEE8",
      red05: "#FFDADA",
      red10: "#ff8383",
      red20: "#FF4545",
      red30: "#F42A2A",
      red40: "#dd0000",
      red50: "#CF0000",
      red60: "#BB0000",
      red70: "#800000",
      red80: "#3F0C0C",
      red90: "#2C0000",
      // Purple
      purple00: "#F4F0FF",
      purple05: "#F6EBFF",
      purple10: "#DCCFFF",
      purple20: "#BE9CFF",
      purple30: "#9266FF",
      purple40: "#6100FF",
      purple50: "#5900E5",
      purple60: "#3D009E",
      purple70: "#2C006B",
      purple80: "#1C0044",
      purple90: "#110030",
      // Semantic Colors
      loContrast: "$white",
      hiContrast: "$black",
      // Focus
      focusRing: "$blue30",
    },
    fonts: {
      base: "'DM Sans', Helvetica, Arial, -apple-system, sans-serif",
      heading: "inherit",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontSizes: {
      "12": "0.75rem",
      "14": "0.875rem",
      "16": "1rem",
      "18": "1.125rem",
      "32": "2rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.1em",
      widest: "0.2em",
    },
    space: {
      "1": "1px",
      "2": "0.125rem",
      "4": "0.25rem",
      "6": "0.375rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "18": "1.125rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "32": "2rem",
      "44": "2.75rem",
      "64": "4rem",
      "80": "5rem",
      "96": "6rem",
      "160": "10rem",
    },
    sizes: {
      "1": "1px",
      "2": "0.125rem",
      "4": "0.25rem",
      "6": "0.375rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "18": "1.125rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "32": "2rem",
      "44": "2.75rem",
      "64": "4rem",
      "80": "5rem",
      "96": "6rem",
      "160": "10rem",
    },
    borderWidths: {
      focusRing: "3px",
    },
    borderStyles: {},
    radii: {
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.75rem",
      full: "9999px",
    },
    shadows: {
      xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      focusRing: "0 0 0 $borderWidths$focusRing $colors$focusRing",
    },
    zIndices: {
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      max: "999",
      auto: "auto",
    },
    transitions: {},
  },
  media,
  utils: {
    // Shorthands
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    // Functions

    colorway: (
      value: "blue" | "green" | "red" | "grey" | "purple" | "steel"
    ) => ({
      $$tintedBackground: `$colors$${value}00`,
      $$subtleUI01: `$colors$${value}05`,
      $$subtleUI02: `$colors$${value}10`,
      $$subtleUI03: `$colors$${value}20`,
      $$subtleUI04: `$colors$${value}30`,
      $$solidUI01: `$colors$${value}40`,
      $$solidUI02: `$colors$${value}50`,
      $$solidUI03: `$colors$${value}60`,
      $$solidUI04: `$colors$${value}70`,
      $$loContrastText: `$colors$${value}80`,
      $$hiContrastText: `$colors$${value}90`,
      [`.dark &`]: {
        $$tintedBackground: `$colors$${value}90`,
        $$subtleUI01: `$colors$${value}80`,
        $$subtleUI02: `$colors$${value}70`,
        $$subtleUI03: `$colors$${value}60`,
        $$subtleUI04: `$colors$${value}50`,
        $$solidUI01: `$colors$${value}20`,
        $$solidUI02: `$colors$${value}10`,
        $$solidUI03: `$colors$${value}05`,
        $$solidUI04: `$colors$${value}00`,
        $$loContrastText: `$colors$${value}05`,
        $$hiContrastText: `$colors$${value}00`,
      },
    }),
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    // Semantic Colors
    loContrast: "$black",
    hiContrast: "$white",
    // Focus
    focusRing: "$blue40",
  },
  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 1)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 1), 0 1px 2px -1px rgb(0 0 0 / 1)",
    md: " 0 4px 6px -1px rgb(0 0 0 / 1), 0 2px 4px -2px rgb(0 0 0 / 1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 1)",
  },
});

export type CSS = Stitches.CSS<typeof config>;
export type { Stitches };

export const primaryColorway = "purple";
export const neutralColorway = "steel";
export const successColorway = "green";
export const dangerColorway = "red";

export const reset = {
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video":
    {
      margin: "0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
    },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section":
    {
      display: "block",
    },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
    // @ts-ignore
    content: "none",
  },
  table: {
    borderSpacing: "0",
  },
};

export const globalStyles = globalCss(reset, {
  body: {
    color: "$hiContrast",
    backgroundColor: "$loContrast",
    fontFamily: "$base",
  },
});
