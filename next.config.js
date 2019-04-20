module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.extensions.push(".purs");

    config.module.rules.push({
      test: /\.purs$/,
      loader: "purs-loader",
      exclude: /node_modules/,
      query: {
        psc: "psa",
        src: ["bower_components/purescript-*/src/**/*.purs", "src/**/*.purs"],
        warnings: false,
      },
    });

    return config;
  },
};
