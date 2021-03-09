module.exports = function reverse (n) {
  return typeof n === "number" ? parseInt(("" + n).split("").reverse().join("")) : 0;
}
