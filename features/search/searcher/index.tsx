import useFilters from "@/hooks/useFilters";
import useSearch from "@/hooks/useSearch";
import useSearchStore from "@/stores/useSearchStore";
import { Container } from "@mui/material";
import CategoryFiltersBar from "./categoryFilterBar";
import SearchBar from "./searchBar";

export default function Searcher() {
  const { categories, searchTerm, setSearchTerm, toggleCategory } =
    useFilters();
  const { search } = useSearch();
  const { isFetching } = useSearchStore((state) => state.searchQuery);

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "1rem" }}>
        <SearchBar
          disabled={isFetching}
          onChangeTerm={(term) => setSearchTerm(term)}
          search={() => search(searchTerm, categories)}
          value={searchTerm}
        />
      </Container>
      <CategoryFiltersBar
        activeCategories={categories}
        onClickCategory={(categoryId) => toggleCategory(categoryId)}
      />
    </>
  );
}
