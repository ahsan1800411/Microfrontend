const HTMLWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8005,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'barchart',
      filename: 'remoteEntry.js',
      exposes: {
        './BarchartIndex': './src/index',
      },
    }),

    new HTMLWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};
