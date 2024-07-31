import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {useProcuraConteudo} from "../../hooks/useProcuraConteudo"

export const InfoConteudo = () => {

    const [video, setVideo]= useState([])

    const params = useParams()

    const {procuraConteudoPorId} = useProcuraConteudo();

    useEffect(() => {
        atualizaVideo()
    },[])

    const atualizaVideo = async() => {
        const data = await procuraConteudoPorId(params.id)
        setVideo(data)
        
        console.log(video.nome);
    }

    const amostraVideo = () => {
            return (
            <iframe 
            className="w-full h-[70vh]"
            src={`${video.linkAssistir}`}
            title={`${video.nome}`}
           frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )
        
        
    }

    return (
        <main>
            <section className="flex justify-center items-center pt-[1rem] flex-col">
                <img src={`${video.imgUrl}`} alt="Capa do filme" className="w-[50%]" />
                <h2 className="text-[2rem] font-bold pt-[1rem] pb-[0.5rem] text-center">{video.nome}</h2>

                {video.duracaoFilme && (
                    <p className="text-[1.3rem] pb-[0.7rem]">Ano de lançamento: {video.duracaoFilme}</p>
                )}

                {video.faixaEtaria && (
                    <p className="text-[1.3rem] pb-[0.7rem]">{video.faixaEtaria}</p>
                )}

                <p className="text-[1.2rem] w-[90%] pb-[1rem] text-center">{video.descricao}</p>

            </section>
            <section className="pb-[1rem]">
                {amostraVideo()}

            </section>
        </main>
    )
}