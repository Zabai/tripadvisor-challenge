import CATEGORIES from "@/constants/static/categories";
import { Button, Grid } from "@mui/material";

type Props = {
  activeCategories: Array<number>;
  onClickCategory: (categoryId: number) => void;
};

export default function CategoryFiltersBar({
  activeCategories,
  onClickCategory,
}: Props) {
  return (
    <Grid container justifyContent="center" mt={0} spacing={2}>
      {CATEGORIES.map(({ icon, id, label }) => (
        <Grid item key={id}>
          <Button
            onClick={() => onClickCategory(id)}
            sx={{
              padding: "1em",
              width: "10em",
              "& .MuiSvgIcon-root": { marginRight: ".25em" },
            }}
            variant={activeCategories.includes(id) ? "contained" : "outlined"}
          >
            {icon}
            {label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
