const fse = require('fs-extra');
const withCSS = require('@zeit/next-css');
const { join } = require('path');
const { promisify } = require('util');
const withSass = require('@zeit/next-sass');

const copyFile = promisify(fse.copyFile);

module.exports = withSass(withCSS({
  webpack: (config) => {

    // Required: fs-extra is not compatible with nextJS. This is added to Webpack so it works.
    config.node = {
      'fs': 'empty',
    };

    // Required: Allows for us to import css files
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })

    return config;
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir }) {

    // This will copy robots.txt from your project root into the out directory
    // !dev: We don't need to copy file during dev mode.
    // More info: https://nextjs.org/docs#copying-custom-files
    if (!dev) {
      await copyFile(join(dir, './static/_global/robots.txt'), join(outDir, 'robots.txt'));
      await copyFile(join(dir, './static/_global/favicon.ico'), join(outDir, 'favicon.ico'));
    }

    // Define hard-coded page routes here
    // AKA what's in your pages folder
    return {
      '/': { page: '/' },
    }
  }
}))
