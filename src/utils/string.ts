export const firstLetterToUpperCase = (stg: string) => stg?.charAt(0).toUpperCase() + stg?.slice(1);

export const transformToResponsiveProp = (breakpoint: string, beforeProp = '') =>
  `${beforeProp}${firstLetterToUpperCase(breakpoint)}`;

export const stringToCamelCase = (str: string) => {
  return str?.replace(/^([A-Z])|\s(\w)/g, function (p1: string, p2: string) {
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

export const slugfy = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a')
    .replace(/[èÈéÉêÊëË]+/g, 'e')
    .replace(/[ìÌíÍîÎïÏ]+/g, 'i')
    .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o')
    .replace(/[ùÙúÚûÛüÜ]+/g, 'u')
    .replace(/[ýÝÿŸ]+/g, 'y')
    .replace(/[ñÑ]+/g, 'n')
    .replace(/[çÇ]+/g, 'c')
    .replace(/[ß]+/g, 'ss')
    .replace(/[Ææ]+/g, 'ae')
    .replace(/[Øøœ]+/g, 'oe')
    .replace(/\s+/g, '')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const isAValidWord = (str: string) => {
  if (!!!str) return false;

  if (str?.split(' ').length > 2 || str?.length < 1) {
    return false;
  }

  if (!str.split(' ') && str.split(' ').length > 2 && str.split(' ').length === 0) {
    return false;
  }

  if (
    str.match(
      `-+$|^-+|[0-9]|[àÀáÁâÂãäÄÅåª]+|[èÈéÉêÊëË]+|[ìÌíÍîÎïÏ]+|[òÒóÓôÔõÕöÖº]+|[ùÙúÚûÛüÜ]+|[ýÝÿŸ]+|[ñÑ]+|[çÇ]+|[ß]+|[Ææ]+|[Øøœ]+|[%]+|'+`
    )
  ) {
    return false;
  }

  return true;
};
