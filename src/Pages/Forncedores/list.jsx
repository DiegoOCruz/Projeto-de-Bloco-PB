import { Link } from 'react-router-dom';
import { Box, Grid, Button, Typography } from '../../Components';
export default function FornecedorList() {
    return(
        <Grid container={true} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            gap: "10px",
            padding: "20px",

        }}>
            <Typography variant="h3">Lista de Forncedores</Typography>
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