function repeat(operation, num) {
  if (num > 0){
    operation()
    repeat(operation,num-1)
  }
  else {
    return
  }
}

// Do not remove the line below
module.exports = repeat
