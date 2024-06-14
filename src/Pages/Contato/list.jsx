import { Link } from "react-router-dom";
import { Box, Grid, Button, Typography } from "../../Components";
import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";



export default function ContatoList() {


  return (
    <Grid
      container={true}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
        padding: "20px",
      }}
    >
      <Typography variant="h3">Lista de Contatos</Typography>

      <Grid container={true}>
       
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Box>
          <Button variant="contained" component={Link} to="/">
            Home
          </Button>
        </Box>
        <Box>
          <Button variant="contained" component={Link} to="/contato/form">
            Adicionar novo Contato
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
