class DateGenerator {
    public generateDate = () => {
        const date = new Date()

        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const ano = String(date.getFullYear());

        const currentDate = `${dia}/${mes}/${ano}`

        return currentDate
    }
}

export default new DateGenerator();