const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withFonts, withImages]);
module.exports = {
  images: {
    domains: [
      "images.pexels.com",
      "www.themealdb.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
    ],
  },
};
