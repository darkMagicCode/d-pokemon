export const PAGE_BACKGROUNDS = {
  DEFAULT: undefined,
  DETAIL: 'hsl(var(--page-pink))',
  PAGINATION: 'hsl(var(--page-blue))',
  INFINITE: 'hsl(var(--page-green))',
} as const;

export const GRADIENTS = {
  PRIMARY: 'from-blue-500 to-cyan-500',
  SECONDARY: 'from-purple-500 to-pink-500',
  SUCCESS: 'from-green-500 to-emerald-500',
  WARNING: 'from-yellow-500 to-orange-500',
  DANGER: 'from-red-500 to-pink-500',
  INFO: 'from-blue-500 to-indigo-500',
  POKEMON_DETAIL: 'from-fuchsia-500 to-pink-500',
} as const;

export const STAT_GRADIENTS = {
  HP: 'from-rose-500 to-rose-600',
  ATTACK: 'from-orange-500 to-amber-600',
  DEFENSE: 'from-yellow-500 to-yellow-600',
  SPECIAL_ATTACK: 'from-violet-500 to-fuchsia-600',
  SPECIAL_DEFENSE: 'from-emerald-500 to-teal-600',
  SPEED: 'from-sky-500 to-blue-600',
  DEFAULT: 'from-slate-400 to-slate-500',
} as const;

export const STAT_GRADIENT_MAP: Record<string, string> = {
  'hp': STAT_GRADIENTS.HP,
  'attack': STAT_GRADIENTS.ATTACK,
  'defense': STAT_GRADIENTS.DEFENSE,
  'special-attack': STAT_GRADIENTS.SPECIAL_ATTACK,
  'special-defense': STAT_GRADIENTS.SPECIAL_DEFENSE,
  'speed': STAT_GRADIENTS.SPEED,
};

export const getStatGradient = (
  statName: string,
  fallback: string = STAT_GRADIENTS.DEFAULT,
): string => {
  return STAT_GRADIENT_MAP[statName.toLowerCase()] || fallback;
};

