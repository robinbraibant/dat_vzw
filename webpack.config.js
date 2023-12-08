const path = require('path');

/// Plugins
const glob = require("glob");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const PATHS = {
    public: path.join(__dirname, 'public'),
    modules: path.join(__dirname, 'modules'),
    tailoff: path.join(__dirname, 'tailoff', '/js'),
    icons: path.join(__dirname, 'tailoff', '/icons'),
    css: path.join(__dirname, 'tailoff', '/css'),
    ejs: path.join(__dirname, 'modules/alpinedigital/src', '/ejs'),
    templates: path.join(__dirname, 'templates'),
    // uncomment for multisite (see MULTISITE.MD)
    // templatesAgriconGroup: path.join(__dirname, 'templates/_agricon-group'),
};

module.exports = {
    mode: 'development',
    devtool: 'source-map', // creates a separate file (main.css.map), 
    // when using 'inline-source-map' the code will be appended to the main css.
    entry: {
        main: path.resolve(__dirname, './frontend/scripts/main.ts'),
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './public'),
        filename: 'js/[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /[\\\/]scss[\\\/].*\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './frontend/assets'),
                    to: path.resolve(__dirname, './public/assets')
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: `${PATHS.templates}/_snippets/_head/_head-assets.twig`,
            template: `${PATHS.ejs}/head.ejs`,
            inject: false,
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'js/**/*',
                'css/**/*',
            ],
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'https://blue-zoo.local.alpinedigital.be',
            files: ["**/*.css", "**/*.js", "**/*.twig"],
        })
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`./**/*.twig`, { nodir: true }),
        // }),
        // TODO: purge on production, dotenv-webpack package already installed
        // new Dotenv(), ...(!isDevelopment || env.purge ? [] : []), ...(isDevelopment ? [] : [])
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },
};