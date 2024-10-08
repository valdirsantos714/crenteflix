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

export const findFilmes = async () => {
    try {
        const response = await fetch(`${api}/conteudo/filmes`);

        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao procurar conteúdo " + e);
    }
}

export const findSeries= async () => {
    try {
        const response = await fetch(`${api}/conteudo/series`);

        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao procurar conteúdo " + e);
    }
}

export const save = async (apiKey, categoria, nome, imgUrl, descricao, linkAssistir, duracaoFilme, anoLancamento, faixaEtaria) => {

    if (nome === "" || imgUrl === "" || linkAssistir === "") {
        alert("Preencha os campos corretamente")
    } else if (categoria === "") {
        alert("Selecione o Tipo de conteúdo a ser cadastrado!")
    } else {
        try {
            const response = await fetch(`${api}/conteudo`, 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` 

            }, body: JSON.stringify({
                categoria: categoria,
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
            alert("Conteúdo cadastrado com sucesso!")
            return data;

        } catch (e) {
            alert("Erro! Não foi possível salvar conteúdo! Tente novamente")
            console.log("Deu erro ao salvar conteúdo " + e);
        }
    }
}


export const findById = async (id) => {
    try {
        const response = await fetch(`${api}/conteudo/${id}`);

        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao procurar conteúdo pelo id " + e);
    }
}