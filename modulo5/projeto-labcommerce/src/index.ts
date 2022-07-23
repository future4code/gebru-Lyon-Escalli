import { app } from "./app";
import { createProduct, createPurchaseRegister, createUser, getAllProducts, getAllUsers, getUserPurchase } from "./endpoints/endpoints";

//rotas para usuários
app.post("/users", createUser);
app.get("/users", getAllUsers);

//rotas para produtos
app.post("/products", createProduct);
app.get("/products", getAllProducts);

//rotas para compras
app.post("/purchases", createPurchaseRegister);
app.get("/users/:user_id/purchases", getUserPurchase);