const { getDefaultConfig } = require("expo/metro-config");
const { withMonicon } = require("@monicon/metro");

const config = getDefaultConfig(__dirname);

const configWithMonicon = withMonicon(config, {
  icons: [
    "solar:home-angle-2-linear",
    "solar:home-angle-2-bold",
    "solar:user-rounded-outline",
    "solar:user-rounded-bold",
  ],
});

module.exports = configWithMonicon;
