import type { ContentCardProps } from "@/shared/types";

export interface TransformToCardConfig<TItem> {
  getId: (item: TItem) => string | number | null;
  getTitle: (item: TItem) => string;
  getImage: (item: TItem) => string;
  getSubtitle?: (item: TItem) => string | undefined;
  getMetadata?: (item: TItem) => string | undefined;
  getAriaLabel?: (item: TItem) => string;
  onClick: (item: TItem, id: string | number) => void;
  placeholderImage?: string;
}

export const transformToCards = <TItem>(
  items: TItem[],
  config: TransformToCardConfig<TItem>,
): ContentCardProps[] => {
  return items
    .map((item) => {
      const id = config.getId(item);

      if (id === null || id === undefined) {
        return null;
      }

      return {
        id,
        title: config.getTitle(item),
        image: config.getImage(item),
        subtitle: config.getSubtitle?.(item),
        metadata: config.getMetadata?.(item),
        onClick: () => config.onClick(item, id),
        ariaLabel: config.getAriaLabel?.(item),
      };
    })
    .filter((card): card is ContentCardProps => card !== null);
};

export const createIdMetadataFormatter = (
  prefix: string = 'ID: ',
  padLength: number = 3,
) => {
  return (id: number | string): string => {
    return `${prefix}${String(id).padStart(padLength, '0')}`;
  };
};

