import { Grid, Paper, Typography } from "../../Components";

export default function Home() {
  return (
    <Grid container={true}>
      <Grid
        container={true}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >

        <Grid>
          <img src=".\public\ACME_Logo.png" alt="ACME" />
        </Grid>

        <Grid>
          <Typography variant="h3">Sistema de Compras</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
