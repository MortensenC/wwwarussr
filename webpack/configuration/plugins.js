import ExtractTextPlugin from "extract-text-webpack-plugin";
import webpack from "webpack";

const isDev = process.env.NODE_ENV !== "production";

export default type => {
  const plugins = [
    new ExtractTextPlugin({
      filename: "../../public/css/style.css"
    })
  ];

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );
  }

  return plugins;
};
