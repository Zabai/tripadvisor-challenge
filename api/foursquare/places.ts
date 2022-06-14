import FOURSQUARE_PLACES from "@/constants/api/foursquare/places";
import LOCAL from "@/constants/local";
import { PlaceSearchApiResponse } from "@/types/api/foursquare/places";

const { ENDPOINTS, FIELDS } = FOURSQUARE_PLACES;

const baseOptions: RequestInit = {
  headers: { Authorization: LOCAL.FOURSQUARE_API_KEY },
};

export async function getPlacesByLocationAndCategory(
  location: string,
  categories: Array<number>
) {
  const queryString = new URLSearchParams({
    categories: categories.join(","),
    fields: FIELDS.PLACE_SEARCH.join(","),
    limit: (20).toString(),
    near: location,
  }).toString();

  return await fetch(`${ENDPOINTS.PLACE_SEARCH}?${queryString}`, baseOptions)
    .then((response) => response.json())
    .then((response: PlaceSearchApiResponse) => response.results)
    .catch(() => []);
}

export async function fetchPlaceDetailsById(placeId: string) {
  const queryString = new URLSearchParams({
    fields: FIELDS.PLACE_DETAILS.join(","),
  }).toString();

  return await fetch(
    `${ENDPOINTS.PLACE_DETAILS.replace("{id}", placeId)}?${queryString}`,
    baseOptions
  )
    .then((response) => response.json())
    .catch(() => null);
}
