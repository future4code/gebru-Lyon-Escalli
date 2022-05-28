const userAdmin: Array<users> = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}  
]

type users = {
    name: string,
    email: string,
    role: string
}

const retornarAdmin = (userAdmin:Array<users>) => {
    const admin = userAdmin.filter((c) => {
        if(c.role === "admin") {
            return c.email
        }
    })
    return admin
}