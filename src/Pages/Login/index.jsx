import { Grid, Box, TextField, Button, Typography } from "../../Components";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({setLogar}) {
  function login(){
    setLogar("usuario@usuario.com");
  }
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container={true} xs={12}>
      <Grid
        item={true}
        xs={6}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          "@media screen and (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <img src="https://cardpress.com.br/img/login.png" alt="" />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media screen and (max-width: 600px)": {
            height: "100vh",
          },
        }}
      >
        <Box mb={2}>
          <Typography variant="h4">Login</Typography>
        </Box>
        <Box sx={{ width: "80%", mb: 2 }}>
          <TextField label="Email" fullWidth={true} />
        </Box>
        <Box sx={{ width: "80%", mb: 2 }}>
          <TextField
            label="Senha"
            type={showPassword ? "text" : "password"}
            fullWidth={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid
          container={true}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Grid item={true}>
            <Button
              variant="contained"
              fullWidth={true}
              component={Link}
              to={"/register"}
            >
              cadastre-se
            </Button>
          </Grid>
          <Grid item={true}>
            <Button variant="contained" fullWidth={true} onClick={login}>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
