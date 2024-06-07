import { Link  } from "react-router-dom";
import { Grid, Box, Button, Typography } from "../../Components";
import TextfieldComponent from "../../Components/TextField";

export default function FornecedorForm() {
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
      xs={12}
    >
      <Typography variant="h3">Cadastro Forncedores</Typography>

      <Grid
        item={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "80%",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextfieldComponent
            label="Razão Social"
            sx={{
              width: "80%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextfieldComponent
            label="CNPJ"
            sx={{
              width: "80%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextfieldComponent
            label="CEP"
            sx={{
              width: "80%",
            }}
          />
        </Box>
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
          <Button variant="contained" component={Link} to="/fornecedores">
            Voltar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
