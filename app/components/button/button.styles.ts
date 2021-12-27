import {
  css,
  darkTheme,
  dangerColorway,
  neutralColorway,
  primaryColorway,
  successColorway,
} from "../../../stitches.config";

export const button = css({
  // Reset
  all: "unset",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "inline-flex",
  borderRadius: "$md",
  textAlign: "center",
  transition: "all 0.2s",
  verticalAlign: "middle",
  alignItems: "center",
  justifyContent: "center",

  // states
  "&:hover:enabled": {
    cursor: "pointer",
  },
  "&:focus-visible": {
    boxShadow: "$focusRing",
    transition: "box-shadow 0.2s ease-in",
  },
  "&:disabled": {
    cursor: "not-allowed",
    color: "$$subtleUI03",
  },

  //Varaints
  variants: {
    size: {
      sm: {
        fontSize: "$14",
        lineHeight: "$14",
        height: "$24", // 24px
        px: "$8",
        "& svg": {
          size: "$12",
        },
        "& > *": {
          ml: "$4",
          "&:first-child": {
            ml: 0,
          },
        },
      },
      md: {
        fontSize: "$16",
        lineHeight: "16px",
        height: "$32", // 32px
        px: "$12",
        "& svg": {
          size: "$16",
        },
        "& > *": {
          ml: "$6",
          "&:first-child": {
            ml: 0,
          },
        },
      },
      lg: {
        fontSize: "$18",
        lineHeight: "18px",
        height: "$44", // 44px
        px: "$16",
        "& svg": {
          size: "$16",
        },
        "& > *": {
          ml: "$8",
          "&:first-child": {
            ml: 0,
          },
        },
      },
    },
    colorway: {
      primary: { colorway: primaryColorway },
      neutral: { colorway: neutralColorway },
      success: { colorway: successColorway },
      danger: { colorway: dangerColorway },
    },
    kind: {
      solid: {
        color: "$loContrast",
        background: "$$solidUI01",
        border: "1px solid $$solidUI01",
        "&:hover:enabled": {
          background: "$$solidUI03",
          border: "1px solid $$solidUI03",
        },
        "&:active:enabled": {
          background: "$$solidUI04",
          border: "1px solid $$solidUI04",
        },
        "&:disabled": {
          background: "$$subtleUI04",
          border: "1px solid $$subtleUI04",
        },
        "&[data-state=on]": {
          backgroundColor: "$hiContrast",
          color: "$loContrast",
          "&:hover": {
            color: "$loContrast",
            backgroundColor: "$$solidUI03",
          },
        },
      },
      outlined: {
        color: "$$solidUI01",
        background: "transparent",
        border: "1px solid $$subtleUI04",
        "&:hover:enabled": {
          color: "$$solidUI02",
          background: "$$subtleUI01",
          border: "1px solid $$solidUI01",
        },
        "&:active:enabled": {
          color: "$$solidUI03",
          background: "$$subtleUI02",
          border: "1px solid $$solidUI02",
        },
        "&[data-state=on]": {
          backgroundColor: "$hiContrast",
          color: "$loContrast",
          "&:hover": {
            color: "$loContrast",
            backgroundColor: "$$solidUI02",
          },
        },
      },
      subtle: {
        color: "$$solidUI03",
        background: "$$subtleUI01",
        border: "1px solid $$subtleUI01",
        "&:hover:enabled": {
          color: "$$solidUI04",
          background: "$$subtleUI03",
          border: "1px solid $$subtleUI03",
        },
        "&:active:enabled": {
          color: "$$solidUI04",
          background: "$$subtleUI04",
          border: "1px solid $$subtleUI04",
        },
        [`.${darkTheme} &`]: {
          color: "$$solidUI01",
        },
        "&:disabled": {
          color: "$$subtleUI03",
        },
        "&[data-state=on]": {
          backgroundColor: "$hiContrast",
          color: "$loContrast",
          "&:hover": {
            color: "$loContrast",
            backgroundColor: "$$solidUI03",
          },
        },
      },
      ghost: {
        color: "$$solidUI01",
        background: "transparent",
        border: "1px solid transparent",
        "&:hover:enabled": {
          background: "$$subtleUI01",
          color: "$$solidUI02",
        },
        "&:active:enabled": {
          background: "$$subtleUI02",
          color: "$$solidUI03",
        },
        "&[data-state=on]": {
          backgroundColor: "$hiContrast",
          color: "$loContrast",
          "&:hover": {
            color: "$loContrast",
            backgroundColor: "$$solidUI02",
          },
        },
      },
      link: {
        fontWeight: "$bold",
        color: "$$solidUI01",
        background: "transparent",
        borderRadius: "$sm",
        "&:hover:enabled": {
          color: "$$solidUI02",
          textDecoration: "underline",
        },
        "&:active:enabled": {
          color: "$$solidUI03",
          textDecoration: "underline",
        },
        "&[data-state=on]": {
          color: "$hiContrast",
          "&:hover": {
            color: "$$solidUI04",
          },
        },
      },
    },
    unconstrained: {
      false: { width: "fit-content" },
      true: { width: "100%" },
    },
    icon: {
      true: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
  compoundVariants: [
    {
      icon: true,
      size: "sm",
      css: {
        size: "$24",
        padding: 0,
      },
    },
    {
      icon: true,
      size: "md",
      css: {
        size: "$32",
        padding: 0,
      },
    },
    {
      icon: true,
      size: "lg",
      css: {
        size: "$44",
        padding: 0,
      },
    },
    {
      kind: "link",
      css: {
        size: "auto",
        px: 0,
      },
    },
    {
      icon: true,
      kind: "link",
      css: {
        size: "auto",
        px: 0,
      },
    },
  ],
  defaultVariants: {
    kind: "solid",
    size: "md",
    unconstrained: false,
    icon: false,
  },
});

export const iconButton = css(button, {});
