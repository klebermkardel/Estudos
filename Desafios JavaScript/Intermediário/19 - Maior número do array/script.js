function maiorDoArray(arr) {
  return arr.reduce((max, n) => n > max ? n : max, arr[0]);
}

const arr = [5, 7, 3, 8, 3, 1, 6]
console.log(maiorDoArray(arr))