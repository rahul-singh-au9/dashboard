/* eslint-disable linebreak-style */
import {
  Box,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const Textfield = (props) => (
  <Box {...props}>
    <TextField
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon fontSize="small" color="action">
              <SearchIcon />
            </SvgIcon>
          </InputAdornment>
        )
      }}
      placeholder="Global Search"
      variant="outlined"
    />
  </Box>
);

export default Textfield;
