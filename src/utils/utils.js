export const shortDescription = text => {
  if (text.length > 25) {
    return `${text.slice(0, 25)}...`;
  }
  return text;
};

export const waneFilter = (a, b) => {
  return Number(b.price) - Number(a.price);
};

export const raiceFilter = (a, b) => {
  return Number(a.price) - Number(b.price);
};
