module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./app", // ✅ for @/components etc.
            "@assets": "./assets", // ✅ for @assets/styles
            "@constants": "./constants",
          },
        },
      ],
    ],
  };
};
