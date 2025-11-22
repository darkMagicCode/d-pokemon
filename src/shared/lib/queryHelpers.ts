export const createQueryKeyFactory = <TParams = unknown>(resource: string) => {
  return {
    all: () => [resource] as const,

    list: (params?: TParams) => 
      params ? [resource, 'list', params] as const : [resource, 'list'] as const,

    detail: (id: string | number) => [resource, 'detail', id] as const,

    infinite: (params?: TParams) => 
      params ? [resource, 'infinite', params] as const : [resource, 'infinite'] as const,

    search: (query: string, params?: TParams) => 
      params ? [resource, 'search', query, params] as const : [resource, 'search', query] as const,

    custom: (key: string, ...args: unknown[]) => 
      [resource, key, ...args] as const,
  };
};

