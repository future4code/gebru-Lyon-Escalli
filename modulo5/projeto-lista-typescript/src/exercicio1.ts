const converterString = (nome: string, dataNascimento: string): string => {
    const minhaData = dataNascimento.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${minhaData[0]} do mês de ${minhaData[1]} do ano de ${minhaData[2]}`
}