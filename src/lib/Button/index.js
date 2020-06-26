function Button(p5, text, x, y, className, callback = () => {}) {
  const button = p5.createButton(text);

  button.addClass(className);

  const render = () => {
    button.position(x, y);
    button.mousePressed(() => callback(button));
  };
  return { render };
}
