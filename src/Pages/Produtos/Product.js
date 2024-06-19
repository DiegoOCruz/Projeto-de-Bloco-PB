import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../Services/firebaseConfig";

export async function addProduct(novoProduto) {
    try {
        const docRef = await addDoc(collection(db, "produtos"), novoProduto);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
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