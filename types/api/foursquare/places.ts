export interface PlaceApiEntity {
  categories: Array<{
    icon: {
      prefix: string;
      suffix: string;
    };
    id: number;
    name: string;
  }>;
  chains: Array<{
    id: string;
    name: string;
  }>;
  description: string;
  distance: number;
  email: string;
  fsq_id: string;
  geocodes: { main: { latitude: number; longitude: number } };
  location: {
    address: string;
    admin_region: string;
    country: string;
    cross_street: string;
    formatted_address: string;
    locality: string;
    postcode: string;
    region: string;
  };
  name: string;
  photos: Array<{ id: string; prefix: string; suffix: string }>;
  popularity: number;
  price: number;
  rating: number;
  tel: string;
  verified: boolean;
  website: string;
}

export interface PlaceSearchApiResponse {
  results: Array<
    Pick<
      PlaceApiEntity,
      | "categories"
      | "fsq_id"
      | "geocodes"
      | "location"
      | "name"
      | "photos"
      | "popularity"
      | "rating"
    >
  >;
}
