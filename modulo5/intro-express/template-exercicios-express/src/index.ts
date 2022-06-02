import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("https://jsonplaceholder.typicode.com/todos/1", (req: Request, res: Response) => {          
    res.send("Olá mundo!")
})

type usuarios = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

const users: Array<usuarios> = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
    }]

app.get("http://localhost:3003/", (req: Request, res: Response) => {
    try {
        res.status(200).send(users)
    }
    catch (error) {
        console.log(error)
    }       
})

type posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

const postagens: Array<posts> = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 2,
      id: 1,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      userId: 3,
      id: 1,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      userId: 4,
      id: 1,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }]

app.get("http://localhost:3003/posts/", (req: Request, res: Response) => {
    try {
        res.status(200).send(postagens)
    }
    catch (error) {
        console.log(error)
    }       
})

app.get("http://localhost:3003/posts/:id", (req: Request, res: Response) => {
    try {
        const postagemUser: {} [] = []
        for(let element of postagens) {
            if (req.params.id === element.id) {
                res.push(postagemUser).send(postagemUser)
            }
        }
    }
    catch (error) {
        console.log(error)
    }       
})




