import { Link } from "react-router-dom";
import { Grid, Box, Button, Typography } from "../../Components";
import TextfieldComponent from "../../Components/TextField";
import BuscaEndereco from "../../Infra/BuscaEndereco";
import { useState } from "react";

export default function FornecedorForm() {
  let cep = "";
  const [endereco, setEndereco] = useState({});

  async function handleChange(e) {
    if (e.target.value.length == 8) {
      cep = e.target.value;
      let retorno = await BuscaEndereco({ cep });
      //console.log(retorno);
      setEndereco(retorno);
    }
  }

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
        Cadastro Forncedores
      </Typography>
      <Grid
        item={true}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "80%",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <Grid
          container={true}
          spacing={2}
          sx={{
            padding: "10px",
            

          }}
        >
          <Grid item={true} xs={12} sm={6}>
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
                label="CNPJ"
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
          <Grid item={true} xs={12} sm={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextfieldComponent
                label="CEP - (apenas números)"
                sx={{
                  width: "50%",
                }}
                onChange={handleChange}
              />
            </Box>
          </Grid>

          <Grid item={true} xs={12} sm={12}>
            {endereco.logradouro && (
              <Grid
                container={true}
                spacing={2}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Grid item={true} xs={12} sm={6}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextfieldComponent
                      label="Logradouro"
                      value={endereco.logradouro}
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
                      label="Número"
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
                      label="Bairro"
                      value={endereco.bairro}
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
                      label="Cidade"
                      value={endereco.localidade}
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
                      label="Estado"
                      value={endereco.uf}
                      sx={{
                        width: "100%",
                        marginBottom: "10px",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid container={true} xs={12} sm={12}
          sx={{
            gap: "10px",
          }}>
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
