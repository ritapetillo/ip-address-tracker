module.exports = {
  important: true,
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      margin: {
        96: "24rem",
        128: "32rem",
      },
      maxWidth: {
        "1000px": "1000px",
      },
      borderRight: {
        "border-r-1": "1px",
      },
    },
  },
};
