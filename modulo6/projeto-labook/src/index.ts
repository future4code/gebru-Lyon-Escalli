import { app } from "./app"

import {userRouter} from "./routes/UserRouter"
import {postRouter} from "./routes/PostsRouter"

app.use("/users", userRouter)
app.use("/post", postRouter)
app.use("/posts/:id", postRouter)

app.use("/friendship/:id", userRouter)
app.use("/endfriendship/:id", userRouter)
app.use("/feed", postRouter)