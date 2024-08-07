import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import "./App.css";
import { Loading, Navbar, Typography } from "./Components";
import Login from "./Pages/Login";

const Home = lazy(() => import("./Pages/Home"));
const CotacoesForm = lazy(() => import("./Pages/Cotacoes/form"));
const CotacoesList = lazy(() => import("./Pages/Cotacoes/list"));
const FornecedorForm = lazy(() => import("./Pages/Forncedores/form"));
const FornecedorList = lazy(() => import("./Pages/Forncedores/list"));
const ContatoForm = lazy(() => import("./Pages/Contato/form"));
const ContatoList = lazy(() => import("./Pages/Contato/list"));
const ProdutoForm = lazy(() => import("./Pages/Produtos/form"));
const ProdutoList = lazy(() => import("./Pages/Produtos/list"));
const Registro = lazy(() => import("./Pages/Registro"));
const Requisicoes = lazy(() => import("./Pages/Requisicoes"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));
const FirstAccess = lazy(() => import("./Pages/FirstAccess"));

function App() {
  const [logar, setLogar] = useState(""); //TODO mudar para vazio ""
  const [admin, setAdmin] = useState(false); //TODO mudar para false

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {logar && <Navbar setLogar={setLogar} admin={admin} />}
        <Routes>
          {/* Rotas acessíveis independentemente do estado de login */}
          <Route path="/" element={<Login setLogar={setLogar} setAdmin={setAdmin} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/first-access" element={<FirstAccess />} />
          <Route path="/register" element={<Registro />} />

          {/* Rotas protegidas: acessíveis apenas para usuários logados */}
          {logar && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/cotacoes" element={<CotacoesList />} />
              <Route path="/cotacoes/form" element={<CotacoesForm />} />
              <Route path="/fornecedores" element={<FornecedorList />} />
              <Route path="/fornecedores/form" element={<FornecedorForm />} />
              <Route path="/contato" element={<ContatoList />} />
              <Route path="/contato/form" element={<ContatoForm />} />
              <Route path="/produtos" element={<ProdutoList />} />
              <Route path="/produtos/form" element={<ProdutoForm />} />

              {/* Rota protegida: acessível apenas para administradores */}
              {admin ? (
                <Route path="/requisicoes" element={<Requisicoes />} />
              ) : (
                <Route
                  path="/requisicoes"
                  element={
                    <Typography variant="h3" align="center">
                      Acesso não autorizado!
                    </Typography>
                  }
                />
              )}
            </>
          )}

          {/* Rota de fallback para páginas não encontradas */}
          <Route
            path="*"
            element={
              <Typography variant="h3" align="center">
                Not Found
              </Typography>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
