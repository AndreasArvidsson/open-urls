const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env, argv) => {

    console.log("----------------------------")
    console.log(" ", argv.mode);
    console.log("----------------------------\n")

    return {
        entry: path.resolve(__dirname, "index.js"),
        output: {
            path: path.resolve(__dirname, "docs"),
            filename: "index.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env", "@babel/preset-react"]
                            }
                        },
                        {
                            loader: "eslint-loader",
                            options: {
                                configFile: path.resolve(__dirname, "eslintrc.js")
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.(eot|woff|woff2|ttf|svg)$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, "index.html")
            }),
            //Extract css styles as external file.
            new MiniCssExtractPlugin({
                filename: "styles.css"
            })
        ]
    };
};
