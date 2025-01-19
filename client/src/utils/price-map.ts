export const toChangePriceFormat = (p: string) => {
  switch (p.length) {
    case 6:
      return `${p.slice(0, 3)} ${p.slice(3)}`;
    case 7:
      return `${p.slice(0, 4)} ${p.slice(4)}`;
    default:
      return p;
  }
};
