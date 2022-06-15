const FOURSQUARE_HOST = "https://api.foursquare.com";

const FOURSQUARE_PLACES = {
  ENDPOINTS: {
    PLACE_DETAILS: `${FOURSQUARE_HOST}/v3/places/{id}`,
    PLACE_SEARCH: `${FOURSQUARE_HOST}/v3/places/search`,
  },
  FIELDS: {
    PLACE_DETAILS: [
      "categories",
      "fsq_id",
      "location",
      "name",
      "photos",
      "rating",
    ],
    PLACE_SEARCH: [
      "categories",
      "fsq_id",
      "geocodes",
      "location",
      "name",
      "photos",
      "rating",
      "tel",
      "website",
    ],
  },
  QUERIES: {
    PLACE_DETAILS: "PLACE_DETAILS",
    PLACE_SEARCH: "PLACE_SEARCH",
  },
};

export default FOURSQUARE_PLACES;
