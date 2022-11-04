import { RFValue } from "react-native-responsive-fontsize";

export default {
  COLORS: {
    black: "#000000",
    white: "#FFFFFF",
    gold: "#ffD700",

    green_500: "#00B37E",
    green_700: "#00875F",

    red: "#F75A68",
    red_dark: "#AA2834",

    gray_100: "#E1E1E6",
    gray_200: "#C4C4CC",
    gray_300: "#7C7C8A",
    gray_400: "#323238",
    gray_500: "#29292E",
    gray_600: "#202024",
    gray_700: "#121214",
  },

  FONT_FAMILY: {
    regular: "Roboto_400Regular",
    medium: "Roboto_500Medium",
    bold: "Roboto_700Bold",
  },

  FONT_SIZE: {
    SM: `${RFValue(14)}px`,
    MD: `${RFValue(16)}px`,
    LG: `${RFValue(18)}px`,
    XL: `${RFValue(24)}px`,
  },
};
