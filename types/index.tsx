export interface BannerInterface {
  id: string;
  file_url: string;
  folder_id: string;
  file: string;
  name: string;
}

export interface Thumb {
  file_url: string;
  file: string;
}

export interface Image {
  id: string;
  file_url: string;
  file: string;
}

export interface Item {
  attributes: {};
  brand: string;
  short_desc: string;
  thumb: Thumb;
  images?: Image[];
}

interface Metadata {
  seo_url: string | null;
  title: string;
  description: string;
  keywords: string;
  canonical_url: string | null;
}
export interface ProductCardInterface {
  id: string;
  title: string;
  slug: string;
  value: number;
  spot_value: number;
  sales: number;
  condition: string;
  thumb: Thumb;
  item: Item;
  variations: [];
  brand: string;
  short_desc: string;
}

export interface Recomended extends ProductCardInterface {
  attributes: Record<string, unknown>; // Você pode especificar um tipo mais específico aqui se necessário
  amount: number;
  orderable: boolean;
  images: Image[];
  metadata: Metadata;
  desc: string;
}

export interface FullProductInterface extends ProductCardInterface {
  attributes: {};
  amount: number;
  images: Image[];
  metadata: Metadata;
  desc: string;
  recomended?: Recomended;
  card?: null;
  categories?: [];
}

export interface PaginationInterface {
  total: number;
  page: number;
  perPage: number;
  lastPage: number;
}

export interface CategoriesInterface {
  id: string,
  name: string
}
