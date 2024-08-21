const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // TODO: Add and configure workbox plugins for a service worker and manifest file.
    plugins: [
      // Webpack plugin that generates our HTML file and injects our bundles.
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE',
      }),

      // Plugin to inject the custom service worker script for offline capabilities and caching
      new InjectManifest({
        swSrc: './src-sw.js', // Source of the service worker file
        swDest: 'src-sw.js', // Destination of the service worker in the output directory
      }),

      // Plugin to generate manifest.json for PWA
      new WebpackPwaManifest({
        fingerprints: false, // Disables fingerprinting for the manifest file
        inject: true, // Injects the manifest into the HTML
        name: 'Just Another Text Editor', // Full name of the PWA
        short_name: 'J.A.T.E', // Short name of the PWA, when space is limited
        description: 'A PWA text editor', // Description of the PWA
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'), // Source of the icon
            sizes: [96, 128, 192, 256, 384, 512], // Sizes of the icon
            destination: path.join('assets', 'icons'), // Destination directory for the icons
          },
        ],
      }),
    ],

    // TODO: Add CSS loaders and babel to webpack.
    module: {
      rules: [
        // CSS loaders
        {
          test: /\.css$/i, // Target all .css files
          use: ['style-loader', 'css-loader'], // Use style-loader and css-loader to process CSS files
        },

        {
          test: /\.m?js$/, // Target all .js and .mjs files
          exclude: /node_modules/, // Exclude node_modules directory
          // We use babel-loader in order to use ES6.
          use: {
            loader: 'babel-loader', // Use babel-loader to transpile JavaScript files
            options: {
              presets: ['@babel/preset-env'], // Use preset-env for transpiling
              plugins: [
                // Use plugins for additional features
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/transform-runtime',
              ],
            },
          },
        },
      ],
    },
  };
};
