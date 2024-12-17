import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Box, Card, Button, Stack, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '500px',
  margin: 'auto',
}));

const CheckPageContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  background: 'radial-gradient(circle, rgba(25,25,60,1) 0%, rgba(0,0,0,1) 100%)',
}));

const CheckPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const devisi = queryParams.get('devisi') || 'Account Management';
  const subDevisi = queryParams.get('subDevisi') || 'FrontEnd';

  const user = {
    idTele: '12345678',
    email: 'aldoronaldo38@gmail.com',
    nama: 'Joshua Ronaldo',
    telepon: '08123456789',
    devisi: devisi,
    subDevisi: subDevisi,
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CheckPageContainer>
        <StyledCard>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: 'white', textAlign: 'center', marginBottom: 2 }}
          >
            User Information
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 1.5,
            }}
          >
            <Typography sx={{ color: 'white' }}>
              <strong>ID Telegram:</strong> {user.idTele}
            </Typography>
            <Typography sx={{ color: 'white' }}>
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography sx={{ color: 'white' }}>
              <strong>Nama:</strong> {user.nama}
            </Typography>
            <Typography sx={{ color: 'white' }}>
              <strong>Telepon:</strong> {user.telepon}
            </Typography>
            <Typography sx={{ color: 'white' }}>
              <strong>Devisi:</strong> {user.devisi}
            </Typography>
            <Typography sx={{ color: 'white' }}>
              <strong>Sub-Devisi:</strong> {user.subDevisi}
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              '&:hover': { backgroundColor: '#f0f0f0' },
              marginTop: 2,
            }}
            onClick={() => navigate(`/interview?idTele=${encodeURIComponent(user.idTele)}`)}
          >
            CONFIRM
          </Button>
        </StyledCard>
      </CheckPageContainer>
    </ThemeProvider>
  );
};

export default CheckPage;