import {
  Card,
  CardContent,
  CardHeaderProps,
  CardMedia,
  Fade,
} from "@mui/material";
import Link from "next/link";
import PlaceCardFooter from "./placeCardFooter";
import PlaceCardHeader from "./placeCardHeader";

type Props = Pick<CardHeaderProps, "title"> & {
  children?: JSX.Element;
  distance?: string;
  faded?: boolean;
  favorite?: boolean;
  imageSrc?: string;
  onClickFavorite?: () => void;
  onClickShare?: () => void;
  rating?: number;
  to: string;
};

export default function PlaceCard({
  children,
  distance,
  faded,
  favorite,
  imageSrc,
  onClickFavorite,
  onClickShare,
  rating,
  title,
  to,
}: Props) {
  return (
    <Fade in={!faded}>
      <Card>
        <Link href={to}>
          <CardMedia
            alt={"Place image"}
            component="img"
            height="194"
            image={imageSrc}
            sx={{ cursor: "pointer" }}
          />
        </Link>

        <PlaceCardHeader
          distance={distance}
          rating={rating}
          title={title}
          to={to}
        />

        <CardContent sx={{ padding: ".5rem" }}>{children}</CardContent>

        <PlaceCardFooter
          favorite={favorite}
          onClickFavorite={onClickFavorite}
          onClickShare={onClickShare}
          to={to}
        />
      </Card>
    </Fade>
  );
}
