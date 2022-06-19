import { Chip, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  iconSrc: string;
  label: string;
};

export default function IconChip({ iconSrc, label }: Props) {
  return (
    <Tooltip title={label}>
      <Chip
        color="primary"
        icon={<Image alt="icon" height={20} src={iconSrc} width={20} />}
        label={
          <Typography sx={{ fontSize: ".55rem" }} variant="caption">
            {label}
          </Typography>
        }
        size="small"
        sx={{
          "& .MuiChip-label": { paddingLeft: ".25em" },
        }}
      />
    </Tooltip>
  );
}
