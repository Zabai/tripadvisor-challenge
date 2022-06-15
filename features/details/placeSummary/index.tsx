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
        <LocationOnRounded fontSize="small" sx={{ ml: 0.25 }} />
        <Typography mb={1} ml={1} variant="subtitle2">
          {address}
        </Typography>
      </Stack>
    </Box>
  );
}
