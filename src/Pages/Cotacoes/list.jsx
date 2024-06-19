import { Link } from "react-router-dom";
import { Box, Grid, Button, Typography, List, ListItem, Paper, Container } from "../../Components";

export default function CotacoesList() {
  const db = () => ([
    {
      id: 1,
      data: "01/01/2021",
      produto: "Produto 1",
      fornecedores: [
        { fornecedor: "Empresa 1", preco: 100 },
        { fornecedor: "Empresa 2", preco: 200 },
        { fornecedor: "Empresa 3", preco: 300 },
      ],
    },
    {
      id: 2,
      data: "02/01/2021",
      produto: "Produto 2",
      fornecedores: [
        { fornecedor: "Empresa 1", preco: 100 },
        { fornecedor: "Empresa 2", preco: 200 },
        { fornecedor: "Empresa 3", preco: 300 },
      ],
    }
  ]);

  return (
    <Container sx={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>Lista de Cotações</Typography>

      <Grid container spacing={3} justifyContent="center">
        {db().map((row) => (
          <Grid item xs={12} sm={6} md={4} key={row.id}>
            <Paper elevation={3} sx={{ padding: "20px" }}>
              <Typography variant="h6">{row.data}</Typography>
              <Typography variant="subtitle1">{row.produto}</Typography>
              <List>
                {row.fornecedores.map((fornecedor) => (
                  <ListItem key={fornecedor.fornecedor}>
                    {fornecedor.fornecedor} - R$ {fornecedor.preco}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/" sx={{ marginRight: "10px" }}>
          Home
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/cotacoes/form">
          Adicionar nova Cotação
        </Button>
      </Box>
    </Container>
  );
}