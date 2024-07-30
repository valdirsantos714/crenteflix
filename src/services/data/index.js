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

export const save = async (apiKey ,nome, imgUrl, descricao, linkAssistir, duracaoFilme, anoLancamento, faixaEtaria) => {

    /*if (duracaoFilme === null || duracaoFilme === "" || anoLancamento === null || anoLancamento === "" || faixaEtaria === null || faixaEtaria === "") {
        
    }*/

    try {
        const response = await fetch(`${api}/conteudo`, 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}` 

        }, body: JSON.stringify({
            categoria: "FILME",
            nome: nome,
            imgUrl: imgUrl,
            descricao: descricao,
            linkAssistir: linkAssistir,
            duracaoFilme: duracaoFilme,
            anoLancamento: anoLancamento,
            faixaEtaria: faixaEtaria
        })
    });

        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao salvar conteúdo " + e);
    }
}
