import { themes, type PrismTheme } from "prism-react-renderer";

const baseTheme = themes.dracula;

export default {
  ...baseTheme,
  styles: [...baseTheme.styles],
  plain: {
    ...baseTheme.plain,
    backgroundColor: "#2C2E30",
  },
} satisfies PrismTheme;
