const HTMLWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8007,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'linearchart',
      filename: 'remoteEntry.js',
      exposes: {
        './LinechartIndex': './src/index',
      },
    }),

    new HTMLWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};
