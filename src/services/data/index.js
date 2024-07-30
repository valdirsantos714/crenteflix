import { api } from "../api"

export const findAll = async () => {
    try {
        const response = await fetch(`${api}/conteudo/all`);

        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao procurar conteúdo " + e);
    }
}