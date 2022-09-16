import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserController } from "../UserController";
import {UserDatabase} from "../../data/UserDatabase";
import { HashGenerator } from "../../services/hashGenerator";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenGenerator } from "../../services/tokenGenerator";


const hashGenerator = new HashGenerator()
const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase, hashGenerator, idGenerator, tokenGenerator)
const userController = new UserController(userBusiness)

export const userRouter = express.Router();

userRouter.post("/signup", (req, res) => userController.signup(req, res));
userRouter.post("/login", (req, res) => userController.login(req, res));
