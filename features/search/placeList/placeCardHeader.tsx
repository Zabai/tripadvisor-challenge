import {
  CardHeader,
  CardHeaderProps,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

type Props = Pick<CardHeaderProps, "title"> & {
  distance?: string;
  rating?: number;
  to: string;
};

export default function PlaceCardHeader({
  distance,
  title,
  rating,
  to,
}: Props) {
  return (
    <CardHeader
      title={
        <Link href={to}>
          <Typography
            sx={{
              cursor: "pointer",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            variant="h6"
          >
            {title}
          </Typography>
        </Link>
      }
      subheader={
        <Stack direction="row" justifyContent="space-between">
          <Rating readOnly size="small" value={rating} />
          {distance && (
            <Typography variant="body2">{distance}km away</Typography>
          )}
        </Stack>
      }
      sx={{
        padding: ".5rem",
        textAlign: "left",
        "& .MuiCardHeader-content": { minWidth: 0 },
      }}
    />
  );
}
