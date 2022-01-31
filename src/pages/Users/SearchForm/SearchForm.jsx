import { TextField, Box, MenuItem } from "@mui/material";
import { CloseButton, Button } from "../components/Buttons";
import { useState } from 'react';
import { TOGGLES_ACTIONS } from 'store/Toggles';
import { useDispatch } from 'react-redux';


const SearchForm = () => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState('');

  const close = () => dispatch(TOGGLES_ACTIONS.setSearchForm())

  return (
    <Box
      sx={{
        margin: "0 16px",
        display: 'grid',
        gridTemplateColumns: { sm: '1fr' },
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr' },
          borderRadius: '4px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr 1fr 1fr' },
            borderBottom: '1px solid #E0E0E0',
            padding: "15px",
            gap: 2
          }}
        >
          <TextField
            label="Ad Soyad"
          />
          <TextField
            label="İstifadəçi adı"
          />
          <TextField
            label="Vəzifə"
          />
          <TextField select label="Rollar" fullWidth
            value={position}
            onChange={e => setPosition(e.target.value)}
          >
            <MenuItem value='User'>User</MenuItem>
            <MenuItem value='Reporter'>Reporter</MenuItem>
            <MenuItem value='Admin'>Admin</MenuItem>
            <MenuItem value='Manager'>Manager</MenuItem>
          </TextField>

        </Box >

        <Box
          component="div"
          textAlign="right"
          sx={{
            padding: '15px',
          }}>
          <CloseButton text="Təmizlə" onClick={close} />
          <Button text="Axtar" />
        </Box>
      </Box>
    </Box>
  );
}

export default SearchForm;