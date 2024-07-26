import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  HomeButton,
  AddButton,
} from "../../Components";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Services/firebaseConfig";

export default function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleClick() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        if (user) {
          alert(`Usuário ${user.email} cadastrado com sucesso!`);
        }
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Erro ao cadastrar usuário: ${errorCode} - ${errorMessage}`);
      });
  }
  return (
    <Grid
      container={true}
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        "@media screen and (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media screen and (max-width: 600px)": {
            height: "100vh",
          },
        }}
      >
        <Box mb={2}>
          <Typography variant="h4">Cadastro de novos usuários</Typography>
        </Box>
        <Box sx={{ width: "80%", mb: 2 }}>
          <TextField label="Nome" fullWidth />
        </Box>
        <Box sx={{ width: "80%", mb: 2 }}>
          <TextField label="Email" fullWidth={true} onChange={handleEmail} />
        </Box>
        <Box sx={{ width: "80%", mb: 2 }}>
          <TextField
            label="Senha"
            type={showPassword ? "text" : "password"}
            fullWidth={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={handlePassword}
          />
        </Box>
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
            <HomeButton />
          </Box>
          <Box>
            <AddButton onClick={handleClick}>
              adicionar usuário
            </AddButton>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
