import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [geolocation, setGeolocation] = useState<GeolocationPosition>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setGeolocation(position)
      );
    }
  }, []);

  return geolocation;
}
