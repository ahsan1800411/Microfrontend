const HTMLWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8006,
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        barchart: 'barchart@http://localhost:8005/remoteEntry.js',
        linearchart: 'linearchart@http://localhost:8007/remoteEntry.js',
      },
    }),
  ],
};
