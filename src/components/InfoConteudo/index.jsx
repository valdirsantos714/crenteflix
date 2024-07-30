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
        
            <iframe width="560"
            height="315"
            src={`${video.linkAssistir}`}
            title={`${video.nome}`}
           frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        
        
    }

    return (
        <main>

            {amostraVideo()}
        </main>
    )
}