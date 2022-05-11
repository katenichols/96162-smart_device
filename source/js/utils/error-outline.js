export const outlineIfNotError = (input) => {
  input.style.outline = 'none';
  input.style.outlineOffset = '0';
};

export const outlineIfError = (input) => {
  input.style.outline = '3px solid red';
  input.style.outlineOffset = '-2px';
};
