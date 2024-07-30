import { useState } from "react"
import { atualizaValores } from "../services/data/atualizaValores";

export const useCadastroConteudo = () => {
    const [nome, setNome] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [descricao, setDescricao] = useState("");
    const [linkAssistir, setLinkAssistir] = useState("");
    const [duracaoFilme, setDuracaoFilme] = useState("");
    const [anoLancamento, setAnoLancamento] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");

    const atualizaNome = (e) => {
        atualizaValores(e, setNome)
    }

    const atualizaImgUrl = (e) => {
        atualizaValores(e, setImgUrl)
    }

    const atualizaDescricao = (e) => {
        atualizaValores(e, setDescricao)
    }

    const atualizaLinkAssistir = (e) => {
        atualizaValores(e, setLinkAssistir)
    }

    const atualizaDuracaoFilme = (e) => {
        atualizaValores(e, setDuracaoFilme)
    }

    const atualizaAnoLancamento= (e) => {
        atualizaValores(e, setAnoLancamento)
    }

    const atualizaFaixaEtaria= (e) => {
        atualizaValores(e, setFaixaEtaria)
        console.log(faixaEtaria);
    }

    return {
        atualizaNome, atualizaAnoLancamento, 
        atualizaDescricao,
        atualizaDuracaoFilme,
        atualizaImgUrl,
        atualizaLinkAssistir,
        atualizaFaixaEtaria
    }
}