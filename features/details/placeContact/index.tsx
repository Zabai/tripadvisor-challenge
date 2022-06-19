import { PlaceDetailsApiResponse } from "@/types/api/foursquare/places";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = Pick<PlaceDetailsApiResponse, "email" | "fax" | "tel" | "website">;

const Label = ({ children }: { children: ReactNode }) => (
  <Typography mb={1} ml={1} variant="subtitle2">
    {children}
  </Typography>
);
const Value = ({ children }: { children: ReactNode }) => (
  <Typography variant="body2" variantMapping={{ body2: "span" }}>
    {children}
  </Typography>
);

export default function PlaceContact({ email, fax, tel, website }: Props) {
  return (
    <Box>
      <Typography mb="4px" variant="h4">
        Contact
      </Typography>
      <Label>
        Email: <Value>{email ?? "-"}</Value>
      </Label>
      <Label>
        Fax: <Value>{fax ?? "-"}</Value>
      </Label>
      <Label>
        Telephone: <Value>{tel ?? "-"}</Value>
      </Label>
      <Label>
        Website:{" "}
        {website ? (
          <a href={website} rel="noreferrer" target="_blank">
            <Value>{website}</Value>
          </a>
        ) : (
          "-"
        )}
      </Label>
    </Box>
  );
}
