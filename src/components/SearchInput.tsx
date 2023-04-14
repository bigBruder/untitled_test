import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@mui/icons-material/Tune";

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      display: "flex",
      justifyContent: "center",
      margin: "50px 0 40px 40px",
      width: "93vw",
      backgroundColor: "#f3f3f3",
      opacity: "0.5",
      borderRadius: "none",
    },
  });
});

const SearchInput: React.FC = () => {
  const { search } = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <FormControl className={search}>
      <TextField
        value={inputValue}
        size="small"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
              Search
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <TuneIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchInput;
