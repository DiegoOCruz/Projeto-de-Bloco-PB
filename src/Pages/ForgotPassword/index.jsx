import { Avatar } from "@mui/material";
import {
  Button,
  Grid,
  HeaderSecundario,
  TextField,
  Typography,
} from "../../Components";

export default function ForgotPassword() {
  return (
    <Grid container xs={12} gap={6} justifyContent="center">
      <HeaderSecundario />
      <Grid
        container
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Alinha os itens horizontalmente ao centro
          justifyContent: "center", // Alinha os itens verticalmente ao centro
          padding: "50px",
          gap: 5,
          "@media screen and (max-width: 600px)": {
            width: "80%",
          },
        }}
      >
        <Grid item>
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
            }}
          />
        </Grid>
        <Grid item sx={{}}>
          <Typography variant="h5" textAlign="center">
            Problemas para entrar no sistema?
          </Typography>
          <Typography textAlign="center">
            Insira seu e-mail no campo abaixo e iremos te enviar um e-mail para
            que recupere sua senha.
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "100%",
          }}
        >
          <TextField label="Email" fullWidth></TextField>
        </Grid>
        <Grid>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => alert("Em desenvolvimento")}
          >
            recuperar minha senha
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
