import { app } from "./app";
import { getAllUsers, getUserByType, getAllUsersOrd, getAllUsersPag, getAllDataUsers } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)
app.get("/users/:type", getUserByType)
app.get("/usersOrd", getAllUsersOrd)
app.get("/usersPag", getAllUsersPag)
app.get("/usersData", getAllDataUsers)