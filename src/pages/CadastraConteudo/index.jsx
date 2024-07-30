import { Input } from "../../components/Input"
import { useCadastroConteudo } from "../../hooks/useCadastroConteudo"

export const CadastraConteudo = () => {

    const {atualizaAnoLancamento, atualizaDescricao, atualizaDuracaoFilme, atualizaImgUrl, atualizaLinkAssistir, atualizaNome, atualizaFaixaEtaria}= useCadastroConteudo()

    return (
        <main >
        <section className="" >
        <div className="flex flex-col gap-[1rem] p-[1rem] items-center justify-center">
            <h2 className="text-[2rem] text-center">Cadastro de conteúdo</h2>
            <p className="text-[1.4rem] text-center">Cadastre filmes ou séries</p>
            
            <form className="flex flex-col flex-wrap gap-[0.5rem] p-[0.5rem]">

                <div className="flex flex-row gap-[1rem] items-center pt-[1rem]">
                <label className="text-[1.4rem]" >Tipo:</label>
                <label className="text-[1.4rem]">

                    <input className="mr-[0.3rem]" type="radio" name="conteudo" id="filme" />
                    Filme
                </label>

                <label className="text-[1.4rem]">
                    <input className="mr-[0.3rem]" type="radio" name="conteudo" id="serie" />
                    Série
                </label>
                </div>

                <Input textoLabel={"Nome do Conteúdo"} idInput={"nome"} placeholder={"Digite o nome do conteúdo"} onChange={atualizaNome}/>

                <Input textoLabel={"URL da imagem do conteúdo"} idInput={"imgUrl"} placeholder={"Digite a URL da imagem do conteúdo"} onChange={atualizaImgUrl}/>

                <Input textoLabel={"Descrição do Conteúdo"} idInput={"descricao"} placeholder={"Digite a descrição do Conteúdo"} onChange={atualizaDescricao}/>

                <Input textoLabel={"Link para assistir o conteúdo"} idInput={"linkAssistir"} placeholder={"Digite o Link para assistir o conteúdo"} onChange={atualizaLinkAssistir}/>

                <Input textoLabel={"Duração do filme"} idInput={"duracaoFilme"} placeholder={"Digite a Duração do filme"} onChange={atualizaDuracaoFilme}/>

                <Input textoLabel={"Ano de lançamento do conteúdo"} idInput={"anoLancamento"} placeholder={"Digite o Ano de lançamento do conteúdo"} onChange={atualizaAnoLancamento}/>

                <Input textoLabel={"Classificação etária"} idInput={"classificacaoEtaria"} placeholder={"Digite a Classificação etária"} onChange={atualizaFaixaEtaria}/>

                <button type="submit"   className="bg-vermelho text-branco rounded-[2rem] w-[50%] m-auto mt-[1rem] p-[0.7rem] text-[1.4rem]">
                    Cadastrar Conteúdo
                </button>
                
            </form>
            </div>
        </section>
    </main>

    )
}