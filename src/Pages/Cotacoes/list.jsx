import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Button,
  Typography,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TextField,
  Stack,
  HomeButton,
} from "../../Components";
import {
  AddIcon,
  DeleteIcon,
  FileIcon,
  RequisicaoIcon,
} from "../../Components/Icons";
import { useEffect, useState } from "react";
import {
  deleteCotacao,
  getCotacao,
  addRequisicao,
  getRequisicao,
} from "./Cotacoes";

//todo: importar o ícone HomeIcon
import HomeIcon from '@mui/icons-material/Home';
import { saveAs } from "file-saver";


export default function CotacoesList() {
  const [cotacoeslist, setCotacoesList] = useState([]);
  const [filteredCotacoesList, setFilteredCotacoesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [requisicoesList, setRequisicoesList] = useState([]);

  const db = async () => {
    const cotacoes = await getCotacao();
    setCotacoesList(cotacoes);
    setFilteredCotacoesList(cotacoes);
    const requisicoes = await getRequisicao();
    setRequisicoesList(requisicoes);
    //console.log(requisicoes);
  };

  useEffect(() => {
    db();
  }, []);

  useEffect(() => {
    
    {
    /*
      antes de chamar toString() ou toLowerCase(), o código verifica se a propriedade existe. Se a propriedade for undefined, a expressão correspondente avaliará como false, e o código não tentará chamar um método nela, evitando assim o erro.
    */
    }
    setFilteredCotacoesList(
      cotacoeslist.filter(
        (cotacao) =>
          (cotacao.id ? cotacao.id.toString().includes(searchTerm) : false) ||
          (cotacao.produto
            ? cotacao.produto.toLowerCase().includes(searchTerm.toLowerCase())
            : false) ||
          (cotacao.data ? cotacao.data.toString().includes(searchTerm) : false)
      )
    );
  }, [searchTerm, cotacoeslist]);

  const handleDelete = async (id) => {
    await deleteCotacao(id);
    db(); // Atualiza a lista de produtos após a exclusão
  };

  // Função para encontrar o fornecedor com o menor valor total dentro de cada cotação
  const getMinFornecedorId = (fornecedores) => {
    return Object.values(fornecedores).reduce(
      (min, curr) =>
        parseFloat(curr.total) < parseFloat(min.total) ? curr : min,
      { total: Infinity }
    );
  };

  // Função para gerar o JSON e imprimir no console e enviar para o Firebase
  const handleGenerateRequisicao = async (row) => {
    const minFornecedor = getMinFornecedorId(row.fornecedores);
    let requisicaoExistente = false;

    requisicoesList.forEach((requisicao) => {
      if (requisicao.cotacaoId === row.id) {
        alert("Requisição já gerada para esta cotação!");
        requisicaoExistente = true;
      }
    });

    if (!requisicaoExistente) {
      const data = {
        data: row.data,
        cotacaoId: row.id,
        produto: row.produto,
        quantidade: row.quantidade,
        fornecedor: minFornecedor.fornecedor,
        preco: minFornecedor.preco,
        total: minFornecedor.total,
      };
      console.log(JSON.stringify(data, null, 2));
      const requisicao = await addRequisicao(data);
      if (requisicao && requisicao.id) {
        // Verificar se requisicao não é null e tem um id
        alert("Requisição gerada com sucesso!");
      }
      db(); // Atualiza a lista de produtos após a adição
    }
  };

  const filterDataToCsv = (filteredCotacoesList) => {
    const header = "Cotacao_Id,Data,Fornecedor,Produto,Quantidade,Preco,Total\n";
    const rows = filteredCotacoesList.map((row) => {
      const data = {
        id: row.id,
        data: row.data,
        produto: row.produto,
        quantidade: row.quantidade,
        cotacoes: row.fornecedores,
      };
      return convertToCSV(data);
    }).join("\n");
    return header + rows;
  };
  
  const convertToCSV = (obj) => {
    const rows = Object.values(obj.cotacoes).map(cotacao => 
      `${obj.id},${obj.data},${cotacao.fornecedor},${obj.produto},${obj.quantidade},${cotacao.preco},${cotacao.total}`
    ).join("\n");
    return rows;
  };
  
  const handleCsv = (filteredCotacoesList) => {
    const csv = filterDataToCsv(filteredCotacoesList);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "cotacoes.csv");
  };


  

  return (
    <Container sx={{ padding: "40px", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Lista de Cotações
      </Typography>

      <TextField
        fullWidth
        label="Buscar Cotação"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: "20px" }}
      />

      <Grid container spacing={4} justifyContent="center">
        {filteredCotacoesList.map((row) => {
          const minFornecedor = getMinFornecedorId(row.fornecedores);

          return (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  minHeight: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Cotação ID: {row.id}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
                    Data: {row.data}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
                    Produto: {row.produto}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
                    Quantidade: {row.quantidade}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Fornecedores:
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Fornecedor</TableCell>
                          <TableCell>Valor Unitário</TableCell>
                          <TableCell>Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.values(row.fornecedores).map(
                          (fornecedor, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                backgroundColor:
                                  fornecedor.total === minFornecedor.total
                                    ? "#ffeb3b"
                                    : "transparent",
                              }}
                            >
                              <TableCell>{fornecedor.fornecedor}</TableCell>
                              <TableCell>
                                R$ {parseFloat(fornecedor.preco).toFixed(2)}
                              </TableCell>
                              <TableCell>R$ {fornecedor.total}</TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      sx={{
                        marginTop: "10px",
                      }}
                    >
                      <Button
                        variant="outlined"
                        startIcon={<RequisicaoIcon />}
                        onClick={() => handleGenerateRequisicao(row)}
                      >
                        Gerar Requisição
                      </Button>
                      <Button
                        color="error"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(row.id)}
                      >
                        Remover
                      </Button>
                    </Stack>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Box mt={4}>
        <HomeButton />
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/cotacoes/form"
          sx={{ marginRight: "10px" }}
          startIcon={<AddIcon />}
        >
          Adicionar nova Cotação
        </Button>
        <Button 
          variant="contained" 
          color="warning" 
          startIcon={<FileIcon />}
          onClick={() => handleCsv(filteredCotacoesList)}
          >
          exportar para csv
        </Button>
      </Box>
    </Container>
  );
}
