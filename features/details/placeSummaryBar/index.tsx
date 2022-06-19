import IconChip from "@/components/iconChip";
import useFavorites from "@/hooks/useFavorites";
import { PlaceApiEntity } from "@/types/api/foursquare/places";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
import { IconButton, Rating, Stack } from "@mui/material";

type Props = Pick<PlaceApiEntity, "categories" | "fsq_id" | "rating">;

export default function PlaceSummaryBar({ categories, fsq_id, rating }: Props) {
  const { favorites, toggleFavourite } = useFavorites();

  return (
    <Stack alignItems="center" direction="row" mb={1}>
      <IconButton
        aria-label="add to favorites"
        color="primary"
        onClick={() => toggleFavourite(fsq_id)}
      >
        {favorites.includes(fsq_id) ? (
          <FavoriteRounded />
        ) : (
          <FavoriteBorderRounded />
        )}
      </IconButton>

      <Rating readOnly value={Math.round(rating / 2)} />
      <Stack direction="row" ml={1.5} spacing={1}>
        {categories.map(({ icon, id, name }) => (
          <IconChip
            iconSrc={`${icon.prefix}32${icon.suffix}`}
            key={`${fsq_id}-${id}`}
            label={name}
          />
        ))}
      </Stack>
    </Stack>
  );
}
