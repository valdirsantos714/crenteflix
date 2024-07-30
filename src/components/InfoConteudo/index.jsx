import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const InfoConteudo = () => {

    const params = useParams()

    const [conteudo, setConteudo] = useState([])

    const conteudoCerto = 

    useEffect(() => {
        dados()
    }, [])

    const dados = async () => {
        try {
            const data = await findAll();

            setConteudo(data);
            console.log(conteudo);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/yL3lJfpenAc?si=HxEk9zfq5jOhbwea" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </main>
    )
}