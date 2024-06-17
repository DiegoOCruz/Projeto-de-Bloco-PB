import { Link } from "react-router-dom";
import { 
  Box, 
  Grid, 
  Button, 
  Typography, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Checkbox,
  TextField,
} from "../../Components";

import { 
  useEffect, 
  useState,   
} from "react";

import { faker } from "@faker-js/faker";

export default function ProdutosList() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para a consulta de busca

  const db = () => {
    const tempRows = [];
    for (let i = 0; i < 100; i++) {
      const newRow = {
        id: i,
        nome: faker.commerce.product(),
        descricao: faker.commerce.productDescription(),
        ncm: faker.datatype.uuid(),
      };
      tempRows.push(newRow);
    }
    setRows(tempRows);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleSearchChange = (event) => { // Função para atualizar a consulta de busca
    setSearchQuery(event.target.value);
  };

  // Filtrar rows com base na consulta de busca
  const filteredRows = rows.filter(
    (row) =>
      row.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.ncm.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    db();
  }, []);

  return (
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
      <Typography variant="h3">Lista de Produtos</Typography>

      <Grid item={true} xs={12}>
        <Grid container xs={12} sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
          with: "80%",
        
        }}>

      <TextField        
        label="Buscar Produto"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{  
          width: "80%"
        }}
      />
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: "80%",
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        indeterminate={
                          selected.length > 0 && selected.length < rows.length
                        }
                        checked={rows.length > 0 && selected.length === rows.length}
                        onChange={handleSelectAllClick}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      PRODUTO
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      DESCRIÇÃO
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      NCM
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const isItemSelected = isSelected(row.id);
                      return (
                        <TableRow
                          key={row.id}
                          hover
                          onClick={(event) => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox checked={isItemSelected} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.nome}
                          </TableCell>
                          <TableCell align="left">{row.descricao}</TableCell>
                          <TableCell align="center">{row.ncm}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredRows.length} // Atualizar a contagem com base nas linhas filtradas
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
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
          <Button variant="contained" component={Link} to="/produtos/form">
            Adicionar novo produto
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

