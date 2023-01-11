const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    externals: [nodeExternals()],
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        fallback: {
          crypto: require.resolve("crypto-browserify"),
          buffer: require.resolve("buffer/"),
        },
        modules: [path.resolve(__dirname, 'node_modules')]
      },
};