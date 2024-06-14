import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "../../Components";
import TextfieldComponent from "../../Components/TextField";
import BuscaEndereco from "../../Infra/BuscaEndereco";
import { useState } from "react";

export default function ContatoForm() {
  const [fornecedor, setFornecedor] = useState("");

  const handleChange = (event) => {
    setFornecedor(event.target.value);
  };

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
        <Typography
          variant="h3"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Cadastro Contatos
        </Typography>
        <Grid
          container={true}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "20px",
            width: "75%",
            border: "1px solid #ccc",
          }}
        >
          <Grid item={true} xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TextfieldComponent
                label="Nome"
                sx={{
                  width: "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextfieldComponent
                label="E-mail"
                sx={{
                  width: "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextfieldComponent
                label="Telefone"
                sx={{
                  width: "100%",
                }}
              />
            </Box>
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Fornecedor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fornecedor}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"Fornecedor 1"}>Fornecedor 1</MenuItem>
              </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained">Cadastrar</Button>
            </Box>
          </Grid>
        </Grid>
        
      </Grid>

  );
}
