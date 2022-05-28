const colaboradores: Array<func> = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
]

enum SETOR {
	MARKETING="marketing",
	VENDAS="vendas",
	FINANCEIRO="financeiro"
}

type func = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const mostrarFuncMkt = (colaboradores: Array<func>) => {
    const funcionario = colaboradores.filter((c) => {
            if (c.setor === "marketing" && c.presencial === true) {
                return c.nome
            }
        })
    return funcionario
}