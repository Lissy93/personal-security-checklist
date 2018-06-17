
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


const webpack = require('webpack');

module.exports = {
    
  mode: 'production',

    entry: {
      'voronoi-app': './src/main.js',
      analytics: './src/scripts/google-analytics.js',
  },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: "/dist/",
      filename: '[name].js'
    },

    resolve: {
      extensions: ['.ts', '.js' ]
    },

    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-es2016']
            }
          }
        },

        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'src/tsconfig.json' 
          }
        },

        {
          test: /\.scss$/,
          use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }

      ]
    },
    devServer: { /* todo */},

    externals: {
      d3: 'd3'
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    
  plugins: [ 

      new FaviconsWebpackPlugin({
        logo: './src/assets/icon.png',
        prefix: 'icons/',
        inject: false,
        persistentCache: false,
        icons: {
            android: true,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            windows: false,
            yandex: false
        }
      }),
      
      new HandlebarsPlugin({
          entry: 'src/index.hbs',
          output: 'index.html',
          data: 'src/locals.json'
      }),
      
      new MiniCssExtractPlugin({
        filename: 'voronoi-styles.css',
      }),
      
      // new HtmlWebpackPlugin({
      //   template: 'src/main.js',
      //   title: 'HTML Webpack Plugin',
      // }),
      
      new webpack.ProvidePlugin({
        _: "underscore"
      }),

      new CopyWebpackPlugin([
        // Static Assets
        { from: 'src/manifest.json', to: '' },
        { from: 'src/assets', to: 'assets' },

        // Offline fallback for CDN libraries - JS
        { from: 'node_modules/d3/dist/d3.min.js', to: 'lib/js' },
        { from: 'node_modules/docsify/lib/docsify.min.js', to: 'lib/js' },
        { from: 'node_modules/docsify/lib/plugins/emoji.min.js', to: 'lib/js' },
        { from: 'node_modules/docsify/lib/plugins/external-script.min.js', to: 'lib/js' },
        { from: 'node_modules/docsify/lib/plugins/ga.min.js', to: 'lib/js' },
        { from: 'node_modules/docsify/lib/plugins/gitalk.min.js', to: 'lib/js' },
        { from: 'node_modules/docsify/lib/plugins/search.min.js', to: 'lib/js' },
        { from: 'node_modules/docsify/lib/plugins/zoom-image.min.js', to: 'lib/js' },

        // Offline fallback for CDN libraries - CSS
        { from: 'node_modules/raleway-webfont/raleway.min.css', to: 'lib/font' },
        { from: 'node_modules/bulma/css/bulma.min.css', to: 'lib/css' },
        { from: 'node_modules/docsify/lib/themes/vue.css', to: 'lib/css' },
        { from: 'node_modules/font-awesome/css/font-awesome.min.css', to: 'lib/css' }
      ])
    ]
  };