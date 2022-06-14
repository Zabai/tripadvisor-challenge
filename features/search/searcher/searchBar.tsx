import { SearchRounded } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";

type Props = Pick<TextFieldProps, "disabled" | "value"> & {
  onChangeTerm?: (term: string) => void;
  search?: () => void;
};

export default function SearchBar({
  disabled,
  onChangeTerm,
  search,
  value,
}: Props) {
  return (
    <TextField
      disabled={disabled}
      id="search"
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled={disabled} onClick={() => search?.()}>
              <SearchRounded />
            </IconButton>
          </InputAdornment>
        ),
        sx: { borderRadius: "50px" },
      }}
      fullWidth
      label="Looking for something in"
      onChange={(event) => onChangeTerm?.(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && search?.()}
      placeholder="Las Palmas de Gran Canaria"
      value={value}
    />
  );
}
