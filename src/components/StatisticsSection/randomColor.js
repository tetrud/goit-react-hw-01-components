function randomColor() {
  const color = () => Math.floor(Math.random() * 256);
  return `rgb(${color()}, ${color()}, ${color()})`;
}

export default randomColor;
