import {  useEffect, useState } from "react"
import { findAll, findById, findFilmes, findSeries } from "../services/data"
import { Link } from "react-router-dom"

export const useProcuraConteudo = () => {

    const [filmes, setFilmes] = useState([])
    const [series, setSeries] = useState([])


    useEffect(() => {
        
        procuraFilmes(),
        procuraSeries()
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

    const procuraFilmes = async () => {
    
        try {
            
            const data = await findFilmes();

            setFilmes(data)
            console.log(data);

        } catch (error) {
            console.log("Não conseguiu achar nenhum conteudo");
        }
    }

    const procuraSeries = async () => {
    
        try {
            const data = await findSeries();

            setSeries(data)
            console.log(series);

        } catch (error) {
            console.log("Não conseguiu achar nenhum conteudo");
        }
    }

    const procuraConteudoPorId = async (id) => {
        
        try {
            
            const data = await findById(id)
            return data

        } catch (error) {
            console.log("Não conseguiu achar nenhum conteudo");
        }
    }

    const amostraFilmes = () => {
        
        if (Array.isArray(filmes)) {
            return filmes.map((f) => (
                    
                <li key={f.id} className=" w-[50%]">
                    <Link to={`/conteudo/${f.id}`}>
                        <img src={`${f.imgUrl}`} alt="Imagem do filme" className="w-[80%] m-auto mb-[0.7rem]" />
                    </Link>
                </li>

            
            
        )) 
        } else {
            return (
                <div className="items-center justify-center flex flex-col">
            <div className="w-[24px] h-[24px] p-[1rem] animate-spin  border-[10px] border-vermelho border-b-transparent bg-transparent rounded-[50%]"></div>
            <p className="pt-[1rem] text-center text-[1.2rem] 2xl:text-[1.6rem]">Carregando...</p>
            </div>
        )
        }
    }

    const amostraSeries = () => {
        
        if (Array.isArray(series)) {
            return series.map((s) => (
                    
                <li key={s.id} className=" w-[50%]">
                    <Link to={`/conteudo/${s.id}`}>
                        <img src={`${s.imgUrl}`} alt="Imagem do filme" className="w-[80%] m-auto mb-[0.7rem]" />
                    </Link>
                </li>

            
            
        )) 
        } else {
            return (
                <div className="items-center justify-center flex flex-col">
            <div className="w-[24px] h-[24px] p-[1rem] animate-spin  border-[10px] border-vermelho border-b-transparent bg-transparent rounded-[50%]"></div>
            <p className="pt-[1rem] text-center text-[1.2rem] 2xl:text-[1.6rem]">Carregando...</p>
            </div>
        )
        }
    }

    return {
        amostraFilmes, procuraConteudoPorId, procuraTodosOsConteudos, procuraFilmes, amostraSeries
    }

}
