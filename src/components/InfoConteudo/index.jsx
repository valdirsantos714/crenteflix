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
    }

    const amostraVideo = () => {
            return (
            <iframe 
            className="w-full h-[70vh] lg:w-[70%] lg:flex lg:justify-center lg:items-center lg:m-auto"
            src={`${video.linkAssistir}`}
            title={`${video.nome}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            )
        
        
    }

    return (
        <main>
            <section className="flex justify-center items-center pt-[1rem] flex-col">
                <img src={`${video.imgUrl}`} alt="Capa do conteúdo" className="w-[50%] lg:w-[25%] 2xl:w-[15%]" />
                <h2 className="text-[2rem] font-bold pt-[1rem] pb-[0.5rem] text-center lg:text-[2.2rem]">{video.nome}</h2>

                {video.duracaoFilme && (
                    <p className="text-[1.3rem] pb-[0.7rem] lg:text-[1.4rem] 2xl:text-[1.6rem]">Ano de lançamento: {video.duracaoFilme}</p>
                )}

                {video.faixaEtaria && (
                    <p className="text-[1.3rem] pb-[0.7rem] lg:text-[1.4rem] 2xl:text-[1.6rem] ">{video.faixaEtaria}</p>
                )}

                <p className="text-[1.2rem] w-[90%] pb-[1rem] text-center lg:text-[1.4rem] 2xl:text-[1.6rem] 2xl:w-[50%]">{video.descricao}</p>

            </section>
            <section className="pb-[1rem]">
                <h2 className="text-[1.5rem] 2xl:text-[1.8rem] font-bold text-center p-[1rem]">Clique no conteúdo abaixo e assista agora mesmo</h2>
                {amostraVideo()}

                <div className="p-[1rem] w-[50%] flex flex-col m-auto ">
                    <p className="bg-yellow-500 text-[1.3rem] text-preto p-[1rem] text-center rounded-lg 2xl:text-[1.6rem]">Se quiser assistir em tela cheia clique no botão de assistir na plataforma oficial</p>
                </div>
            </section>
        </main>
    )
}