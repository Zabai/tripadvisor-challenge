import { fetchPlaceDetailsById } from "@/api/foursquare/places";
import FOURSQUARE_PLACES from "@/constants/api/foursquare/places";
import { PlaceDetailsApiResponse } from "@/types/api/foursquare/places";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function useDetails() {
  const {
    query: { id = "" },
  } = useRouter();

  return useQuery<PlaceDetailsApiResponse>(
    [FOURSQUARE_PLACES.QUERIES.PLACE_DETAILS, id.toString()],
    () => fetchPlaceDetailsById(id.toString()),
    { enabled: !!id }
  );
}
