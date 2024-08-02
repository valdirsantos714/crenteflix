import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../../../context/GlobalContext"

export const Banner = () => {

    const {apiKey} = useContext(GlobalContext)
    return (
        <section>
            <div className="bg-[url('/imgs/filmes.jpg')] bg-no-repeat bg-cover bg-center p-[1rem] flex flex-col h-[90vh] justify-center items-center">
                <div className="bg-preto/70 flex-col flex gap-[0.7rem] rounded-lg p-[1rem]">
                    <h2 className=" bg-transparent  text-[1.8rem] text-center 2xl:text-[2.5rem] font-bold">Filmes e séries gospel, grátis e sem limites</h2>
                    <p className=" bg-transparent text-[1.6rem] 2xl:text-[2rem] text-center">Assista onde quiser. Totalmente de graça </p>

                    <Link className="hover:cursor-pointer bg-preto text-branco hover:opacity-[85%]  2xl:text-[1.8rem] p-[0.5rem] rounded-lg  text-[1.5rem] text-center" to={"/filmes"}>Ver Filmes </Link>

                    <Link to={"/series"} className=" hover:cursor-pointer bg-branco/80 text-preto hover:opacity-[85%]  2xl:text-[1.8rem] p-[0.5rem] rounded-lg  text-[1.5rem] text-center ">Ver Séries </Link>

                    {apiKey === "" ? (
                        <Link to={"/login"} className="hover:cursor-pointer bg-vermelho text-branco hover:opacity-[85%]  2xl:text-[1.8rem] p-[0.5rem] rounded-lg  text-[1.5rem] text-center">Adicionar mais filmes ou séries</Link>
                    ): (
                        <Link to={"/cadastroconteudo"} className="hover:cursor-pointer bg-vermelho text-branco hover:opacity-[85%]  2xl:text-[1.8rem] p-[0.5rem] rounded-lg  text-[1.5rem] text-center">Adicionar mais filmes ou séries</Link>
                    )}
                    
                </div>
            </div>
        </section>
    )
}