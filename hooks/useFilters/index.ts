import {
  getCategoryIdsFromQueryString,
  sanetizeCategoriesIds,
} from "@/utils/categoryUtils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useFilters() {
  const { isReady, query } = useRouter();
  const [categories, setCategories] = useState<Array<number>>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isReady) {
      query.categories &&
        setCategories(
          sanetizeCategoriesIds(
            getCategoryIdsFromQueryString(query.categories.toString())
          )
        );
      query.term && setSearchTerm(query.term.toString());
    }
  }, [isReady, query]);

  const toggleCategory = (categoryId: number) =>
    setCategories(
      categories.includes(categoryId)
        ? categories.filter((categoryIdx) => categoryIdx !== categoryId)
        : [...categories, categoryId]
    );

  return { categories, searchTerm, setSearchTerm, toggleCategory };
}
