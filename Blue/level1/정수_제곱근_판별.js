function solution(n) {
  const square = Math.sqrt(n);

  return parseInt(square) === square ? (square + 1) ** 2 : -1;
}
