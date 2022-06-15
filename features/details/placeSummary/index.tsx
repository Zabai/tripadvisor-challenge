import { LocationOnRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

type Props = {
  address?: string;
  name?: string;
};

export default function PlaceSummary({ address, name }: Props) {
  return (
    <Box>
      <Typography marginBottom="4px" variant="h3">
        {name}
      </Typography>
      <Stack direction="row">
        <LocationOnRounded fontSize="small" />
        <Typography mb="8px" variant="subtitle2">
          {address}
        </Typography>
      </Stack>
    </Box>
  );
}
