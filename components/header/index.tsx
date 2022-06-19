import APP from "@/constants/app";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <Stack alignItems="center" mt={2} mb={1}>
      <Link href="/">
        <Typography
          component="div"
          gutterBottom
          sx={{
            borderBottom: "2px solid",
            borderTop: "2px solid",
            color: "primary.main",
            cursor: "pointer",
            fontFamily: "oswald",
            letterSpacing: ".15em",
            textAlign: "center",
            textTransform: "uppercase",
            userSelect: "none",
          }}
          variant="h2"
        >
          {APP.NAME}
        </Typography>
      </Link>
    </Stack>
  );
}
