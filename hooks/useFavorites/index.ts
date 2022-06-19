import { useEffect, useState } from "react";

const LS_FAVORITE_KEY = "favorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<Array<string>>([]);

  useEffect(() => {
    const localFavorites = localStorage.getItem(LS_FAVORITE_KEY);

    if (localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }
  }, []);

  const toggleFavourite = (placeId: string) => {
    const updatedFavorites = favorites.includes(placeId)
      ? favorites.filter((placeIdx) => placeIdx !== placeId)
      : [...favorites, placeId];

    localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return { favorites, toggleFavourite };
}
