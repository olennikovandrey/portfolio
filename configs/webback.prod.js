const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve (__dirname, "../src/index.js"),
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    chunkFilename: "[id].js",
  },

  resolve: {
    extensions: ["*", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(js)$/i,
        use: ["babel-loader"],
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-transform-runtime"]
        },
      },
      {
        test: /\.(s(a|c)ss)$/i,
        exclude: /node_modules/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      },
      {
        test: /\.(pdf|png|jpg|gif|ico|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
      inject: "body"
    }),
  ],
};
