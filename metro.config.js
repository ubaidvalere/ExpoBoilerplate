const { getDefaultConfig } = require("expo/metro-config");
const { withMonicon } = require("@monicon/metro");
 
const config = getDefaultConfig(__dirname);
 
const configWithMonicon = withMonicon(config, {
  icons: [
    "hugeicons:home-11",
    "hugeicons:user-03",
    "hugeicons:profile"
  ],
});
 
module.exports = configWithMonicon;