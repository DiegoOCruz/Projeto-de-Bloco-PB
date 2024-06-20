import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "../../Services/firebaseConfig";
  
  export async function addCotacao(novoCotacao) {
    try {
      const docRef = await addDoc(collection(db, "cotacao"), novoCotacao);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  export async function getCotacao() {
    try {
      const querySnapshot = await getDocs(collection(db, "cotacao"));
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      return products;
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  }
  
  export async function updateCotacao(updatedCotacao) {
    try {
      const docRef = doc(db, "cotacao", updatedCotacao.id);
      const contatoData = {
        nome: updatedCotacao.nome,
        email: updatedCotacao.email,
        telefone: updatedCotacao.telefone,
      };
      if (updatedCotacao.fornecedor) {
        contatoData.fornecedor = updatedCotacao.fornecedor;
      }
      await updateDoc(docRef, contatoData);
      console.log("Document updated with ID: ", updatedCotacao.id);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
  
  export async function deleteCotacao(id) {
    try {
      await deleteDoc(doc(db, "cotacao", id));
      console.log("Document deleted with ID: ", id);
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  }
  
  //Pegar os dados do fornecedor
  export async function getFornecedor() {
    try {
      const querySnapshot = await getDocs(collection(db, "fornecedor"));
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      return products;
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  }

  export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}