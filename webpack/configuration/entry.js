const isDev = process.env.NODE_ENV !== "production";

export default type => {
  if (type === "server") {
    return "./serverRender.js";
  }

  const entry = {
    main: []
  };

  if (isDev) {
    entry.main.push("webpack-hot-middleware/client", "react-hot-loader/patch");
  }

  entry.main.push("./client.js");

  return entry;
};
