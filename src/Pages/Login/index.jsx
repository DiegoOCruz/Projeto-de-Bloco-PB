import { Grid, Box, TextField, Button, Typography, Alert } from "../../Components";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Services/firebaseConfig";

export default function Login({ setLogar, setAdmin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  {/* 
  useEffect(() => {
    alert("Email: email@email.com\nSenha: 123456");
  },[]);
*/}
  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setLogar(user.email);
        if(user.email){
          setAdmin(isAdmin(user.email));
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  }

  function isAdmin(user) {
    //console.log(user.endsWith("@admin.com"));
    return user.endsWith("@admin.com");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };
  return (
    <Grid container={true} xs={12}>
      <Grid
        item={true}
        xs={6}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          "@media screen and (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <img src="https://cardpress.com.br/img/login.png" alt="" />
      </Grid>

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
        {error && 
          <Alert severity="error">{error == "Firebase: Error (auth/invalid-email)." ? "ERRO! Usuário e/ou senha inválidos!" : error }</Alert>}

        <Box mb={2}>
          <Typography variant="h4">Login</Typography>
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
            onKeyDown={handleKeyDown}
          />
        </Box>
        <Grid
          container={true}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid
            item={true}
            sx={{
              width: "30%",
            }}
          >
            <Button variant="contained" fullWidth onClick={login}>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
