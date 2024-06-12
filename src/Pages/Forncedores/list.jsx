import { Link } from "react-router-dom";
import { Box, Grid, Button, Typography } from "../../Components";
import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";



export default function FornecedorList() {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const novoFornecedor = [];
    for (let i = 0; i < 10; i++) {
      novoFornecedor.push({
        id: faker.string.uuid(),
        razaoSocial: faker.company.name(),
        cnpj: faker.internet.ip(),
        email: faker.internet.email(),
        telefone: faker.phone.number(),
        endereco: faker.location.street(),
      });
    }
    setFornecedores(novoFornecedor);
  }, []);

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
      <Typography variant="h3">Lista de Forncedores</Typography>

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
          <Button variant="contained" component={Link} to="/fornecedores/form">
            Adicionar novo fornecedor
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
