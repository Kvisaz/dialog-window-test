const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    ],
    plugins: [new HtmlWebpackPlugin()]
};
