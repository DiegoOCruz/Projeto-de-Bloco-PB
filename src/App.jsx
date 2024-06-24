import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from 'react';
import './App.css';
import { Loading, Navbar } from "./Components";
import Login from "./Pages/Login";

const Home = lazy(() => import('./Pages/Home'));
const CotacoesForm = lazy(() => import('./Pages/Cotacoes/form'));
const CotacoesList = lazy(() => import('./Pages/Cotacoes/list'));
const FornecedorForm = lazy(() => import('./Pages/Forncedores/form'));
const FornecedorList = lazy(() => import('./Pages/Forncedores/list'));
const ContatoForm = lazy(() => import('./Pages/Contato/form'));
const ContatoList = lazy(() => import('./Pages/Contato/list'));
const ProdutoForm = lazy(() => import('./Pages/Produtos/form'));
const ProdutoList = lazy(() => import('./Pages/Produtos/list'));
const Registro = lazy(() => import('./Pages/Registro'));

function App() {
  const [logar, setLogar] = useState("");
  
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {logar === "" ? (
          <Login setLogar={setLogar} />
        ) : (
          <>
            <Navbar setLogar={setLogar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cotacoes" element={<CotacoesList />} />
              <Route path="/cotacoes/form" element={<CotacoesForm />} />
              <Route path="/fornecedores" element={<FornecedorList />} />
              <Route path="/fornecedores/form" element={<FornecedorForm />} />
              <Route path="/contato" element={<ContatoList />} />
              <Route path="/contato/form" element={<ContatoForm />} />
              <Route path="/produtos" element={<ProdutoList />} />
              <Route path="/produtos/form" element={<ProdutoForm />} />
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/login" element={<Login setLogar={setLogar} />} />
              <Route path="/register" element={<Registro />} />
            </Routes>
          </>
        )}
      </Suspense>
    </Router>
  );
}

export default App;

