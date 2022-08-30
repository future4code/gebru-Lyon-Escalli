import { app } from "./app"
import { recipeRouter } from "./router/recipeRouter"
import { userRouter } from "./router/userRouter"

app.use('/user/', userRouter)
app.use('/recipe/', recipeRouter)