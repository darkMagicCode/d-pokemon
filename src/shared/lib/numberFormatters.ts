const convertUnit = (
  value: number,
  factor: number,
  precision: number = 1,
): string => {
  return (value / factor).toFixed(precision);
};

export const UnitConversions = {
  decimetersToMeters: (decimeters: number, precision: number = 1): string => {
    return convertUnit(decimeters, 10, precision);
  },

  hectogramsToKilograms: (hectograms: number, precision: number = 1): string => {
    return convertUnit(hectograms, 10, precision);
  },
} as const;

