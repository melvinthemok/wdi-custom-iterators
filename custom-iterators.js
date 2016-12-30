var numArr = [1, 2, 3, 4, 5]

var print = function (element, index, array) {
  if (element % 2 === 1 && index % 2 === 0) {
    console.log(element)
  }
}

var _forEach = function (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

// _forEach(numArr, print)

var odd = function (element, index, array) {
  if (element % 2 === 1 && index % 2 === 0) {
    return element
  }
}

var _map = function (arr, callback) {
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) !== undefined) {
      newArray.push(callback(arr[i], i, arr))
    }
  }
  return newArray
}

// console.log(_map(numArr, odd))

var add = function (a, b) {
  return a + b
}

var _reduce = function (arr, callback, sum) {
  if (arguments.length === 2) {
    var sum = 0
  }
  for (var i = 0; i < arr.length; i++) {
    sum = callback(arr[i], sum)
  }
  return sum
}

// console.log(_reduce(numArr, add, 0))
// console.log(_reduce(numArr, add))

var _filter = function (arr, callback) {
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) !== undefined) {
      newArray.push(callback(arr[i], i, arr))
    }
  }
  return newArray
}

// console.log(_filter(numArr, odd))

var _every = function (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === undefined || false || null || NaN) {
      return false
    }
  }
  return true
}

// console.log(_every(numArr, odd))
