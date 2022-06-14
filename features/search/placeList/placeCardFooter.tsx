import {
  ChevronRight,
  FavoriteBorderRounded,
  FavoriteRounded,
  ShareOutlined,
} from "@mui/icons-material";
import { CardActions, IconButton, Link, Stack } from "@mui/material";
import NextLink from "next/link";

type Props = {
  favorite?: boolean;
  onClickFavorite?: () => void;
  onClickShare?: () => void;
  to: string;
};

export default function PlaceCardFooter({
  favorite,
  onClickFavorite,
  onClickShare,
  to,
}: Props) {
  return (
    <CardActions disableSpacing sx={{ paddingTop: 0 }}>
      <IconButton
        aria-label="add to favorites"
        color="primary"
        onClick={onClickFavorite}
      >
        {favorite ? <FavoriteRounded /> : <FavoriteBorderRounded />}
      </IconButton>
      <IconButton aria-label="share" color="default" onClick={onClickShare}>
        <ShareOutlined />
      </IconButton>

      <NextLink href={to} passHref>
        <Stack direction="row" sx={{ cursor: "pointer", marginLeft: "auto" }}>
          <Link>View more</Link>
          <ChevronRight color="primary" />
        </Stack>
      </NextLink>
    </CardActions>
  );
}
