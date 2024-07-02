const Module = (() => {
  const PI = 3.14

  const length = (radius: number) => 2 * PI * radius;
  const square = (radius: number) => PI * (radius ** 2);

  return {
    length: (radius: number) => length(radius),
    square: (radius: number) => square(radius),
  };
})();

export default Module;
