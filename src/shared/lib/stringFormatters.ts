export const formatHyphenated = (str: string): string => {
  return str.split('-').join(' ');
};

export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

