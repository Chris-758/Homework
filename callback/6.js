function repeat(n, f) {
  for (var i = 1; i < n; i++) {
    f(i);
  }
}

var logMultipleOf3 = function (i) {
  if (i % 3 === 0) {
    console.log(i);
  }
};

repeat(10, logMultipleOf3);
