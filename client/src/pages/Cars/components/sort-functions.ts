interface ISORT_FUNCTIONSProps {
  [key: string]: (
    a: boolean | string | number,
    b: boolean | string | number
  ) => number;
}

export const SORT_FUNCTIONS: ISORT_FUNCTIONSProps = {
  boolean: (a, b) => (a === b ? 0 : a ? -1 : 1),
  stringAZ: (a, b) => String(a).localeCompare(String(b)),
  stringZA: (a, b) => String(b).localeCompare(String(a)),
  numberAZ: (a, b) => Number(String(a).slice(1)) - Number(String(b).slice(1)),
  numberZA: (a, b) => Number(String(b).slice(1)) - Number(String(a).slice(1)),
};
