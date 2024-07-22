import { Grid, Typography } from "../../Components";

export default function Requisicoes() {
  return (
    <>
      <Grid
        xs={12}
        container={true}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "100vh",
          gap: "10px",
          padding: "20px",
        }}
      >
        <Grid item>
          <Typography variant="h3">Requisições</Typography>
        </Grid>
      </Grid>
    </>
  );
}
