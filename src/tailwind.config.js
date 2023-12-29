module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
