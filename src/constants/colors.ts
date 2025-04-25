const primaryColor = "#3F51B5";
const tintColorDark = "#fff";

export const colors = {
  light: {
    colorScheme: "light",
    primaryColor,
    text: "#11181C",
    background: "#fff",
    tint: primaryColor,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: primaryColor,
    border: "#cbcdd1",
    white: "#fff",
    link: "#0a7ea4",
    grayBG: "#f7f7f7",
  },
  dark: {
    colorScheme: "dark",
    primaryColor,
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    border: "#2B2F31",
    white: "#fff",
    link: "#0a7ea4",
    grayBG: "#2B2F31",
  },
};
