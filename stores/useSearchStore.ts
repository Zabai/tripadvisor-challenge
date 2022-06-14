import { PlaceSearchApiResponse } from "@/types/api/foursquare/places";
import { QueryObserverResult } from "react-query";
import create from "zustand";

type FilterState = {
  searchQuery: QueryObserverResult<PlaceSearchApiResponse["results"]>;
  setSearchQuery: (
    queryState: QueryObserverResult<PlaceSearchApiResponse["results"]>
  ) => void;
};

export default create<FilterState>((set) => ({
  searchQuery: {} as QueryObserverResult<PlaceSearchApiResponse["results"]>,
  setSearchQuery: (searchQuery) => set(() => ({ searchQuery })),
}));
