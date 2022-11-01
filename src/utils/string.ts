export const firstLetterToUpperCase = (stg: string) => stg.charAt(0).toUpperCase() + stg.slice(1);

export const transformToResponsiveProp = (breakpoint: string, beforeProp = '') =>
  `${beforeProp}${firstLetterToUpperCase(breakpoint)}`;

export const stringToCamelCase = (str: string) => {
  return str.replace(/^([A-Z])|\s(\w)/g, function (p1: string, p2: string) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

export const stringToKebabCase = (str: string) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x: string) => x.toLowerCase())
    .join('-');
};

export const stringToPascalCase = (str: string) => {
  return (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
};
