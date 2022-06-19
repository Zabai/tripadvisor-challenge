import { getPlacesByLocationAndCategory } from "@/api/foursquare/places";
import FOURSQUARE_PLACES from "@/constants/api/foursquare/places";
import useSearchStore from "@/stores/useSearchStore";
import { PlaceSearchApiResponse } from "@/types/api/foursquare/places";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryObserver, useQueryClient } from "react-query";

export default function useSearch() {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const { setSearchQuery } = useSearchStore();

  useEffect(() => {
    const observer = new QueryObserver<PlaceSearchApiResponse["results"]>(
      queryClient,
      {
        enabled: false,
        queryKey: FOURSQUARE_PLACES.QUERIES.PLACE_SEARCH,
      }
    );
    setSearchQuery(observer.getCurrentResult());
    const unsubscribe = observer.subscribe((result) => {
      setSearchQuery(result);
    });

    return () => {
      unsubscribe();
      observer.destroy();
    };
  }, []);

  async function search(searchTerm: string, categories: Array<number>) {
    if (!searchTerm) return;

    const queryString = new URLSearchParams({
      categories: categories.length ? categories.toString() : "",
      term: searchTerm,
    }).toString();
    push(`/?${queryString}`, undefined, {
      shallow: true,
    });

    queryClient.fetchQuery(FOURSQUARE_PLACES.QUERIES.PLACE_SEARCH, () =>
      getPlacesByLocationAndCategory(searchTerm, categories)
    );
  }

  return { search };
}
