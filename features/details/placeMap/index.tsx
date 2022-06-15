import LOCAL from "@/constants/local";
import useScriptsStore from "@/stores/useScriptsStore";
import { PlaceApiEntity } from "@/types/api/foursquare/places";
import { Box, Typography } from "@mui/material";
import Script from "next/script";
import { useEffect } from "react";

type Props = Pick<PlaceApiEntity, "geocodes"> & {
  id: string;
};

export default function PlaceMap({ geocodes: { main }, id }: Props) {
  const scripts = useScriptsStore((state) => state);

  useEffect(() => {
    if (main && scripts.hasGoogleMaps) {
      const coords: google.maps.LatLngLiteral = {
        lat: main.latitude,
        lng: main.longitude,
      };
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 12,
          center: coords,
        }
      );

      new google.maps.Marker({
        position: coords,
        map: map,
      });
    }
  }, [main, scripts]);

  return (
    <Box>
      <Typography marginBottom="4px" variant="h6">
        Location
      </Typography>
      {main ? (
        <Box id={id} height={500} />
      ) : (
        <Typography>Not available</Typography>
      )}
      <Script
        async
        onLoad={() => scripts.setGoogleMaps(true)}
        src={`https://maps.googleapis.com/maps/api/js?key=${LOCAL.GOOGLE_MAPS_API_KEY}`}
      />
    </Box>
  );
}
