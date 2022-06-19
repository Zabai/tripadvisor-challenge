import {
  EventRounded,
  FlightRounded,
  LandscapeRounded,
  LocalActivityRounded,
  RestaurantMenuRounded,
  SportsSoccerRounded,
} from "@mui/icons-material";

const CATEGORIES = [
  {
    icon: <LocalActivityRounded />,
    id: 10000,
    label: "Activities",
  },
  {
    icon: <EventRounded />,
    id: 14000,
    label: "Events",
  },
  {
    icon: <LandscapeRounded />,
    id: 16000,
    label: "Landmarks",
  },
  {
    icon: <RestaurantMenuRounded />,
    id: 13000,
    label: "Restaurants",
  },
  {
    icon: <SportsSoccerRounded />,
    id: 18000,
    label: "Sports",
  },
  {
    icon: <FlightRounded />,
    id: 19000,
    label: "Travelling",
  },
];

export default CATEGORIES;
