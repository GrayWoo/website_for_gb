const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./dist/public",
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:5555",
        origin: true,
        secure: false,
      },
    },
  },
});
