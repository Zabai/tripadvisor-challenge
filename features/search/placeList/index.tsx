import IconChip from "@/components/iconChip";
import IMAGES from "@/constants/static/images";
import useFavorites from "@/hooks/useFavorites";
import useGeolocation from "@/hooks/useGeolocation";
import useSearchStore from "@/stores/useSearchStore";
import { getDistanceBetweenCoords } from "@/utils/geolocationUtils";
import { Grid, Stack } from "@mui/material";
import PlaceCard from "./placeCard";

export default function PlaceList() {
  const { data, isFetching } = useSearchStore((state) => state.searchQuery);
  const { favorites, toggleFavourite } = useFavorites();
  const location = useGeolocation();

  return (
    <Grid container justifyContent="space-evenly" marginY=".5rem" spacing={2}>
      {!isFetching &&
        data?.map(
          ({
            categories,
            fsq_id,
            geocodes: { main },
            name,
            photos,
            rating,
          }) => (
            <Grid item key={fsq_id} xs={12} sm={6} md={4} lg={3}>
              <PlaceCard
                distance={
                  location && main
                    ? getDistanceBetweenCoords(
                        location.coords.latitude,
                        location.coords.longitude,
                        main.latitude,
                        main.longitude
                      ).toFixed(2)
                    : undefined
                }
                faded={isFetching}
                favorite={favorites.includes(fsq_id)}
                imageSrc={
                  photos[0]
                    ? `${photos[0].prefix}original${photos[0].suffix}`
                    : IMAGES.NO_IMAGE
                }
                onClickFavorite={() => toggleFavourite(fsq_id)}
                rating={Math.round(rating / 2)}
                title={name}
                to={`/places/${fsq_id}`}
              >
                <Stack direction="row" spacing={1}>
                  {categories.map(({ icon, id, name }) => (
                    <IconChip
                      iconSrc={`${icon.prefix}32${icon.suffix}`}
                      key={`${fsq_id}-${id}`}
                      label={name}
                    />
                  ))}
                </Stack>
              </PlaceCard>
            </Grid>
          )
        )}
    </Grid>
  );
}
