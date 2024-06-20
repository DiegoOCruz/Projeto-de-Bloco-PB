import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Stack,
  InputAdornment,
  Paper,
} from "../../Components";

import { Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";
import { getFornecedor, getProducts } from "./Cotacoes";

//TODO: Importar os componentes necessários delete icon/add 
//TODO: pensar em como caputarar os dos textfields e select

export default function CotacoesForm() {
  const [fields, setFields] = useState([
    { produto: "", fornecedor: "", quantidade: "", preco: "", total: "" },
  ]);
  const [produtoList, setProdutoList] = useState([]);
  const [fornecedorList, setFornecedorList] = useState([]);

  const loadProdutos = async () => {
    const produtos = await getProducts();
    setProdutoList(produtos);
  };

  const loadFornecedores = async () => {
    const fornecedores = await getFornecedor();
    setFornecedorList(fornecedores);
  };

  const handleChange = (index, field, value) => {
    const newFields = fields.slice();
    newFields[index][field] = value;

    if (field === "quantidade" || field === "preco") {
      const quantidade = parseFloat(newFields[index].quantidade) || 0;
      const preco = parseFloat(newFields[index].preco) || 0;
      newFields[index].total = (quantidade * preco).toFixed(2);
    }

    setFields(newFields);
  };

  const handleAddFields = () => {
    setFields([
      ...fields,
      { produto: "", fornecedor: "", quantidade: "", preco: "", total: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    if (fields.length <= 1) {
      return;
    }
    const newFields = fields.slice();
    newFields.splice(index, 1);
    setFields(newFields);
  };

  useEffect(() => {
    loadProdutos();
    loadFornecedores();
  }, []);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
        Cadastro Cotações
      </Typography>
      <Paper
        sx={{
          padding: "20px",
          width: "100%",
          maxWidth: "800px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Defina o produto desta cotação:
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="produto-select-label">Produto</InputLabel>
          <Select labelId="produto-select-label" id="produto-select" label="Produto">
            {produtoList.map((produto, index) => (
              <MenuItem key={index} value={produto.nome}>
                {produto.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
      {fields.map((field, index) => (
        <Paper
          key={index}
          sx={{
            padding: "20px",
            width: "100%",
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id={`fornecedor-select-label-${index}`}>Fornecedor</InputLabel>
                <Select
                  labelId={`fornecedor-select-label-${index}`}
                  id={`fornecedor-select-${index}`}
                  value={field.fornecedor}
                  label="Fornecedor"
                  onChange={(e) => handleChange(index, "fornecedor", e.target.value)}
                >
                  {fornecedorList.map((fornecedor, idx) => (
                    <MenuItem key={idx} value={fornecedor.razaoSocial}>
                      {fornecedor.razaoSocial}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Quantidade"
                value={field.quantidade}
                onChange={(e) => handleChange(index, "quantidade", e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Preço"
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
                value={field.preco}
                onChange={(e) => handleChange(index, "preco", e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Total"
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                  readOnly: true,
                }}
                value={field.total}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Button onClick={handleAddFields} variant="outlined" startIcon={<AddIcon />}>
                  Adicionar
                </Button>
                <Button
                  color="error"
                  onClick={() => handleRemoveFields(index)}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Remover
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>
    </Grid>
  );
}
