import { Box, Stack } from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#9B5AE1',
      light: 'red'
    },
    secondary: {
      main: '#EEEEEE'
    },
    transparent: {
      main: "transparent"
    },
    tableHead: {
      main: '#F5F5F5'
    },
    formSubmit: {
      main: "#4CAF50"
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <Stack
      direction="row"
      spacing={0}
    >
      <SideBar open={open} setOpen={setOpen} />
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
          <NavBar open={open} setOpen={setOpen} />
          <Box padding="16px">
            {children}
          </Box>
        </ThemeProvider>
      </Box>
    </Stack>
  );
};

export default MainLayout;
