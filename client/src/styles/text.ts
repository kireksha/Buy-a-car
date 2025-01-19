interface ITEXT {
  [key: string]: {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
    color?: string;
  };
}

export const TEXT: ITEXT = {
  H1: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "58px",
  },
  H2: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "42px",
  },
  H3: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "28px",
  },
  H4: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "18px",
  },
  P1: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
  },
};
