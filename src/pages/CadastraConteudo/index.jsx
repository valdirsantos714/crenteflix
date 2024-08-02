import { useContext } from "react"
import { Input } from "../../components/Input"
import { useCadastroConteudo } from "../../hooks/useCadastroConteudo"
import { GlobalContext } from "../../context/GlobalContext"
import { Footer } from "../../components/Footer"

export const CadastraConteudo = () => {

    const {atualizaAnoLancamento, atualizaDescricao, atualizaDuracaoFilme, atualizaImgUrl, atualizaLinkAssistir, atualizaNome, atualizaFaixaEtaria, salvaConteudo, setCategoria} = useCadastroConteudo()

    const {apiKey} = useContext(GlobalContext)

    const mudaPraFilme = () => {
        setCategoria("FILME")
    }

    const mudaPraSerie = () => {
        setCategoria("SERIE")
    }


    return (
        <>
        {apiKey ? (
        <main >
        <section className="" >
        <div className="flex flex-col gap-[1rem] p-[1rem] items-center justify-center lg:w-[50%] lg:m-auto">
            <h2 className="text-[2rem] text-center 2xl:text-[2.4rem]">Cadastro de conteúdo</h2>
            <p className="text-[1.4rem] text-center 2xl:text-[2rem]">Cadastre filmes ou séries</p>
            
            <form onSubmit={salvaConteudo} className="flex flex-col flex-wrap gap-[0.5rem] p-[0.5rem]">

                <div className="flex flex-row gap-[1rem] items-center pt-[1rem]">
                <label className="text-[1.2rem] 2xl:text-[1.6rem]" >Tipo: *Obrigatório</label>
                <label className="text-[1.4rem] 2xl:text-[1.6rem]">

                    <input className="mr-[0.3rem]" type="radio" name="conteudo" id="filme" onClick={mudaPraFilme} />
                    Filme
                </label>

                <label className="text-[1.4rem] lg:text-[1.6rem]">
                    <input className="mr-[0.3rem]" type="radio" name="conteudo" id="serie" onClick={mudaPraSerie}/>
                    Série
                </label>
                </div>

                <Input textoLabel={"Nome do Conteúdo: *Obrigatório"} idInput={"nome"} placeholder={"Digite o nome do conteúdo"} onChange={atualizaNome} required/>

                <Input textoLabel={"URL da imagem do conteúdo: *Obrigatório"} idInput={"imgUrl"} placeholder={"Digite a URL da imagem do conteúdo"} onChange={atualizaImgUrl} required/>
                <p className="bg-yellow-500 text-preto p-[0.3rem] mb-[0.5rem] text-[1rem] lg:text-[1.4rem] 2xl:text-[1.5rem]">Digite uma url que foi feita upload, de preferência na imgur</p>

                <Input textoLabel={"Descrição do Conteúdo"} idInput={"descricao"} placeholder={"Digite a descrição do Conteúdo"} onChange={atualizaDescricao}/>

                <Input textoLabel={"Link para assistir o conteúdo: *Obrigatório"} idInput={"linkAssistir"} placeholder={"Digite o Link para assistir o conteúdo"} onChange={atualizaLinkAssistir} required/>
                <p className="bg-yellow-500 text-preto p-[0.3rem] mb-[0.5rem] text-[1rem] lg:text-[1.4rem] 2xl:text-[1.5rem]">Se for do Youtube, clique em compartilhar e em incorporar e copie e cole o link que está depois do atributo src</p>

                <Input textoLabel={"Duração do filme"} idInput={"duracaoFilme"} placeholder={"Digite a Duração do filme"} onChange={atualizaDuracaoFilme}/>

                <Input textoLabel={"Ano de lançamento do conteúdo"} idInput={"anoLancamento"} placeholder={"Digite o Ano de lançamento do conteúdo"} onChange={atualizaAnoLancamento}/>

                <Input textoLabel={"Classificação etária"} idInput={"classificacaoEtaria"} placeholder={"Digite a Classificação etária"} onChange={atualizaFaixaEtaria}/>

                <button type="submit" className="bg-vermelho text-branco rounded-[2rem] w-[50%] m-auto mt-[1rem] p-[0.7rem] text-[1.4rem] 2xl:text-[1.6rem]">
                    Cadastrar Conteúdo
                </button>
                </form>
                </div>
            </section>
        </main>

        ): (
            <div className="flex flex-col gap-[1rem] p-[1rem] items-center justify-center min-h-[95vh] lg:w-[50%] lg:m-auto">
                <p className="text-[1.5rem] 2xl:text-[1.8rem] 2xl:w-[50%] text-center cursor-not-allowed m-auto">Você não pode cadastrar conteúdo, porque você não está cadastrado no sistema, cadastre-se e tente novamente</p>
            </div>
        )}
        
        <Footer/>
               
        </>

    )
}