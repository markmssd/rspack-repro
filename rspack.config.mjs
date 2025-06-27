import path from "path";
import { fileURLToPath } from "url";
import rspack from "@rspack/core";
import htmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  plugins: [
    // this works, unescapedTitle will remain unescaped
    new htmlWebpackPlugin({
      favicon: 'favicon.ico',
      filename: 'html.index.ejs',
      template: 'src/index.ejs',
      templateParameters: {
        escapedTitle: '<%- escapedTitle %>',
        unescapedTitle: '<%= unescapedTitle %>',
      },
      inject: 'body',
    }),
    // this doesn't works, unescapedTitle will be escaped
    new rspack.HtmlRspackPlugin({
      favicon: 'favicon.ico',
      filename: 'rspack.index.ejs',
      template: 'src/index.ejs',
      templateParameters: {
        escapedTitle: '<%- escapedTitle %>',
        unescapedTitle: '<%= unescapedTitle %>',
      },
      inject: 'body',
    }),
  ],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
  },
  experiments: {
    css: true,
  },
};

export default config;
