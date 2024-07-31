import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <section>
            <div className="bg-[url('/imgs/banner.jpg')] p-[1rem] flex flex-col h-[90vh] justify-center items-center">
                <div className="bg-preto/70 flex-col flex gap-[1rem] rounded-lg p-[1rem]">
                    <h2 className=" bg-transparent  text-[1.8rem] text-center 2xl:text-[2.2rem]">Filmes e séries gospel, grátis e sem limites</h2>
                    <p className=" bg-transparent text-[1.6rem] text-center">Assista onde quiser. Totalmente de graça </p>

                    <Link className="hover:cursor-pointer bg-preto text-branco hover:opacity-[85%]  2xl:text-[1.8rem] p-[0.5rem] rounded-lg  text-[1.5rem] text-center" to={"/filmes"}>Ver Filmes </Link>

                    <Link to={"/series"} className=" hover:cursor-pointer bg-branco/80 text-preto hover:opacity-[85%]  2xl:text-[1.8rem] p-[0.5rem] rounded-lg  text-[1.5rem] text-center ">Ver Séries </Link>

                    <Link to={"/login"} className="hover:cursor-pointer bg-vermelho text-branco hover:opacity-[85%]  2xl:text-[1.8rem] p-[0.5rem] rounded-lg  text-[1.5rem] text-center">Adicionar mais filmes ou séries</Link>
                </div>
            </div>
        </section>
    )
}