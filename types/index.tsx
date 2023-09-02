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

interface Metadata  {
  seo_url: string | null;
  title: string;
  description: string;
  keywords: string;
  canonical_url: string | null;
};
export interface Recomended {
  id: string;
  attributes: Record<string, unknown>; // Você pode especificar um tipo mais específico aqui se necessário
  amount: number;
  title: string;
  slug: string;
  orderable: boolean;
  value: number;
  spot_value: number;
  condition: string;
  thumb: Thumb;
  images: Image[];
  item: Item;
  metadata: Metadata;
  variations: any[]; // Você pode especificar um tipo mais específico aqui se necessário
  brand: string;
  desc: string;
  short_desc: string;
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

export interface FullProductInterface {
  id: string;
  attributes: {};
  amount: number;
  title: string;
  slug: string;
  orderable: boolean;
  value: number;
  spot_value: number;
  condition: string;
  thumb: Thumb;
  images: Image[];
  item: Item;
  metadata: Metadata;
  variations: [];
  brand: string;
  desc: string;
  short_desc: string;
  recomended: Recomended;
}
