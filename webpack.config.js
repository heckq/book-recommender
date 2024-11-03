const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (environment, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
            clean: true,
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'), // Serve files from 'dist' directory
            port: 3000,
            open: true,
            historyApiFallback: false, // Enable this to handle non-existent routes
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: '[name]__[local]___[hash:base64:5]',
                                    namedExport: false,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        optimization: {
            minimize: isProduction,
            minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@app': path.resolve(__dirname, './src/'),
                '@components': path.resolve(__dirname, './src/components'),
                '@api': path.resolve(__dirname, './src/api'),
                '@assets': path.resolve(__dirname, './src/assets'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html'),
                minify: isProduction && {
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
            isProduction &&
                new MiniCssExtractPlugin({
                    filename: '[name].[contenthash].css',
                }),
        ].filter(Boolean),
    };
};
