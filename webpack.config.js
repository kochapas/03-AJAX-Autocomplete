const path = require('path');

module.exports = {
  entry: "./lib/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    publicPath: '/dist/'
  },
  devtool: "source-map"
<<<<<<< HEAD
};
=======
};
>>>>>>> 3167d94b7b3fc8b1bd5c32d494e553eae46337d9
