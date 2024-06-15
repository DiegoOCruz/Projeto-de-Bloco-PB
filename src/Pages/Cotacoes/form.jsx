import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import TextfieldComponent from "../../Components/TextField";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { createSvgIcon } from "@mui/material/utils";

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

export default function CotacoesForm() {
  const [fields, setFields] = useState([
    { produto: "", fornecedor: "", quantidade: "", preco: "", total: "" }
  ]);

  const handleChange = (index, field, value) => {
    const newFields = fields.slice();
    newFields[index][field] = value;
    setFields(newFields);
  };

  const handleAddFields = () => {
    setFields([
      ...fields,
      { produto: "", fornecedor: "", quantidade: "", preco: "", total: "" }
    ]);
  };

  const handleRemoveFields = (index) => {
    const newFields = fields.slice();
    newFields.splice(index, 1);
    setFields(newFields);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            padding: "20px",
            "@media (max-width: 600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Cadastro Cotações
        </Typography>
        {fields.map((field, index) => (
          <Grid
            key={index}
            container
            spacing={2}
            sx={{
              width: "75%",
              border: "1px solid #ccc",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id={`produto-select-label-${index}`}>Produto</InputLabel>
                <Select
                  labelId={`produto-select-label-${index}`}
                  id={`produto-select-${index}`}
                  value={field.produto}
                  label="Produto"
                  onChange={(e) => handleChange(index, "produto", e.target.value)}
                >
                  <MenuItem value="Produto 1">Produto 1</MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id={`fornecedor-select-label-${index}`}>Fornecedor</InputLabel>
                <Select
                  labelId={`fornecedor-select-label-${index}`}
                  id={`fornecedor-select-${index}`}
                  value={field.fornecedor}
                  label="Fornecedor"
                  onChange={(e) => handleChange(index, "fornecedor", e.target.value)}
                >
                  <MenuItem value="Fornecedor 1">Fornecedor 1</MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextfieldComponent
                label="Quantidade"
                value={field.quantidade}
                onChange={(e) => handleChange(index, "quantidade", e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextfieldComponent
                label="Preço"
                value={field.preco}
                onChange={(e) => handleChange(index, "preco", e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextfieldComponent
                label="Total"
                value={field.total}
                onChange={(e) => handleChange(index, "total", e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="outlined" startIcon={<PlusIcon />} onClick={handleAddFields}></Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveFields(index)}
                ></Button>
              </Stack>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="contained">Cadastrar</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

