import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,

} from "../../Components";
import TextfieldComponent from "../../Components/TextField";


export default function ProdutoForm() {
    return(
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
          Cadastro de Produtos
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
                label="Descrição"
                multiline={true}
                rows={4}
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
                label="NCM"
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
              <Button variant="contained">Cadastrar</Button>
            </Box>
          </Grid>
        </Grid>
        
      </Grid>
    );
}