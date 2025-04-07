export type ResultDispatcherState = {
  items: {
    title: string;
    url: string;
    summary: string;
    breadcrumbs: string[];
  }[];
  query: string | null;
  totalResults: number | null;
  totalPages: number | null;
  lastPage: number | null;
  hasMore: boolean | null;
  loading: boolean | null;
};

export type ResultDispatcher =
  | { type: "reset"; value?: undefined }
  | { type: "loading"; value?: undefined }
  | { type: "update"; value: ResultDispatcherState }
  | { type: "advance"; value?: undefined };
