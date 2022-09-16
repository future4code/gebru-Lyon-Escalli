import { app } from "./controller/app"
import { userRouter } from "./controller/routes/UserRouter"

app.use('/user/', userRouter)
