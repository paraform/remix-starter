import { css } from "../../stitches.config";

export const box = css({
  boxSizing: "border-box",
});

export const center = css(box, {
  width: "100vw",
  height: "100vh",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
