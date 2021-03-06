const FOURSQUARE_HOST = "https://api.foursquare.com";

const FOURSQUARE_PLACES = {
  ENDPOINTS: {
    PLACE_DETAILS: `${FOURSQUARE_HOST}/v3/places/{id}`,
    PLACE_SEARCH: `${FOURSQUARE_HOST}/v3/places/search`,
  },
  FIELDS: {
    PLACE_DETAILS: [
      "categories",
      "email",
      "fax",
      "fsq_id",
      "geocodes",
      "location",
      "name",
      "photos",
      "rating",
      "tel",
      "website",
    ],
    PLACE_SEARCH: [
      "categories",
      "fsq_id",
      "geocodes",
      "location",
      "name",
      "photos",
      "rating",
    ],
  },
  QUERIES: {
    PLACE_DETAILS: "PLACE_DETAILS",
    PLACE_SEARCH: "PLACE_SEARCH",
  },
};

export default FOURSQUARE_PLACES;
