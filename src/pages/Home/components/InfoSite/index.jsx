import { Div } from "./components/Div"

export const InfoSite = () => {
    return (
        <main>
            <section className="mt-[1rem]">
                <Div srcImg={"/imgs/filmes.jpg"} alt={"Capas de filmes"} ladoImg={"Direito"} h2={"Assista filmes e séries gospel de qualidade"} p={"Basta somente escolher o conteúdo que deseja assistir"}/>
                <Div srcImg={"/imgs/pessoas-na-igreja.jpg"} alt={"Pessoas na igreja"} ladoImg={"Esquerdo"} h2={"Aprenda mais sobre Deus"} p={"Através dos filmes e séries aprendemos mais rápido sobre Deus"}/>
                
                <Div srcImg={"/imgs/pessoas_rindo.jpg"} ladoImg={"Direito"} h2={"Assista onde e quando quiser"} p={"Com o CrenteFlix você pode assistir seus filmes e séries onde e quando quiser"}/>

                <Div srcImg={"/imgs/assistindo.jpeg"} ladoImg={"Esquerdo"} h2={"Totalmente grátis"} p={"Assista totalmente grátis e sem limites os nossos conteúdos"}/>
            </section>
        </main>
    )
}