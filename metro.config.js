const { getDefaultConfig } = require("expo/metro-config");
const { withMonicon } = require("@monicon/metro");
// const {
//   wrapWithReanimatedMetroConfig,
// } = require("react-native-reanimated/metro-config");

const config = getDefaultConfig(__dirname);

const configWithMonicon = withMonicon(config, {
  icons: [
    "solar:home-angle-2-linear",
    "solar:home-angle-2-bold",
    "solar:user-rounded-outline",
    "solar:user-rounded-bold",
    "solar:chat-line-linear",
    "solar:chat-line-bold",
    "hugeicons:arrow-right-double",
  ],
});

module.exports = configWithMonicon;
// module.exports = wrapWithReanimatedMetroConfig(config);
