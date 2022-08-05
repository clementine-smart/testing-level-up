function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
}

module.exports = {
  sumArray,
}
