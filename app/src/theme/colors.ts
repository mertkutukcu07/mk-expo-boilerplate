type Theme = {
  commonWhite: string;
  commonBlack: string;
  themeColor: string;
  white: string;
  sky: string;
  gray: string;
};

const commonColor = {
  commonWhite: "#FFFFFF",
  commonBlack: "#000000",
};

const light: Theme = {
  themeColor: "#FFFFFF",
  white: "#000000",
  sky: "#DE5E69",
  gray: "gray",
  ...commonColor,
};

const dark: Theme = {
  themeColor: "#000000",
  white: "#FFFFFF",
  sky: "#831a23",
  gray: "white",
  ...commonColor,
};

export default { light, dark };
