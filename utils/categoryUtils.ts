import CATEGORIES from "@/constants/static/categories";

function getCategoriesIds() {
  return CATEGORIES.map(({ id }) => id);
}

export function getCategoryIdsFromQueryString(categories: string) {
  return categories
    .split(",")
    .map((categoryId) => parseInt(categoryId))
    .filter((categoryId) => !isNaN(categoryId));
}

export function sanetizeCategoriesIds(categories: number[]) {
  const appCategoriesIds = getCategoriesIds();

  return categories.filter((categoryId) =>
    appCategoriesIds.includes(categoryId)
  );
}
