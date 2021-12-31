const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/static/js/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};