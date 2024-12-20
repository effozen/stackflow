import { style } from "@vanilla-extract/css";

import { f } from "../styles";

export const wrapper = style([f.posAbsFull, f.flexColumn, f.rootLineHeight]);

export const appBarLeft = style([
  f.flex,
  {
    fontSize: "1.125rem",
    fontWeight: 700,
    marginLeft: ".5rem",
  },
]);

export const appBarLeftIcon = style([
  f.flexAlignCenter,
  {
    marginLeft: ".5rem",
  },
]);

export const appBarRight = style([
  {
    display: "grid",
    gridTemplateColumns: "1.5rem 1.5rem",
    gap: "1rem",
    marginRight: ".5rem",
  },
]);

export const scrollable = style([f.flex1, f.overflowScroll]);

export const bottom = style({});
