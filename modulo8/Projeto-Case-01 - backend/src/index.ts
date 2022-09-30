import { app } from "./app";
import { userRouter } from "./controller/routes/UserRouter"
import { productRouter } from "./controller/routes/ProductRouter"

app.use('/user/', userRouter)
app.use('/product/', productRouter)



