enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type movie = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

const ordenaFilmes = (nomeFilme: string, anoLancamentoFilme:number,generoFilme:GENERO,pontuacaoFilme?:number): movie => {
    const filme: movie = {
        nome: nomeFilme,
        anoLancamento: anoLancamentoFilme,
        genero: generoFilme,
        pontuacao: pontuacaoFilme
    }
    return filme
}