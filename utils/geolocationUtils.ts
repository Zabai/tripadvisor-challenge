function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

/**
 * Calculate distance in km between two coordinates using Haversine formula
 */
export function getDistanceBetweenCoords(
  latitude1: number,
  longitude1: number,
  latitude2: number,
  longitude2: number
) {
  const EARTH_RADIUS = 6371;
  const latitudeDistance = degreesToRadians(latitude2 - latitude1);
  const longitudeDistance = degreesToRadians(longitude2 - longitude1);

  const archaversine =
    Math.sin(latitudeDistance / 2) * Math.sin(latitudeDistance / 2) +
    Math.cos(degreesToRadians(latitude1)) *
      Math.cos(degreesToRadians(latitude2)) *
      Math.sin(longitudeDistance / 2) *
      Math.sin(longitudeDistance / 2);
  const distance =
    EARTH_RADIUS *
    (2 * Math.atan2(Math.sqrt(archaversine), Math.sqrt(1 - archaversine)));

  return distance;
}
