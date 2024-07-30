import {  useEffect, useState } from "react"
import { findAll, findById } from "../services/data"
import { Link } from "react-router-dom"

export const useProcuraConteudo = () => {

    const [filmes, setFilmes] = useState([])

    const [id, setId] = useState("")

    useEffect(() => {
        procuraTodosOsConteudos()
    },[])
    
    const procuraTodosOsConteudos = async () => {
    
        try {
            
            const data = await findAll();

            setFilmes(data)
            console.log(data);

        } catch (error) {
            console.log("Não conseguiu achar nenhum conteudo");
        }
    }

    const procuraConteudoPorId = async (e) => {
        e.preventDefault();
        try {
            
            const data = await findById(id);

            setFilmes(data)
            console.log(data);

        } catch (error) {
            console.log("Não conseguiu achar nenhum conteudo");
        }
    }

    const amostraFilmes = () => {
        if (Array.isArray(filmes)) {
            return filmes.map((f) => (
                    
                <li key={f.id} className=" w-[50%]">
                    <Link>
                        <img src={`${f.imgUrl}`} alt="Imagem do filme" className="w-[80%] m-auto mb-[0.7rem]" />
                    </Link>
                </li>
            
        )) 
        } else {
            return (
                <div className="items-center justify-center flex flex-col">
            <div className="w-[24px] h-[24px] p-[1rem] animate-spin  border-[10px] border-vermelho border-b-transparent bg-transparent rounded-[50%]"></div>
            <p className="pt-[1rem] text-center">Carregando...</p>
            </div>
        )
        }
    }

    return {
        amostraFilmes, procuraConteudoPorId, procuraTodosOsConteudos, id, setId, 
    }

}
