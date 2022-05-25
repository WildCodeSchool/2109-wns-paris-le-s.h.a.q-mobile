module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./components",
            "@screens": "./screens",
            "@assets": "./assets",
            "@navigation": "./navigation",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
