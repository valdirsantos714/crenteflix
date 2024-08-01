import { useProcuraConteudo } from "../../hooks/useProcuraConteudo"

export const Filmes = () => {

    const {amostraFilmes} = useProcuraConteudo()

    return (
        <main>
            <section className="p-[1rem]" >
                <div className="flex flex-col gap-[1rem] items-center">
                    <h2 className="text-[2rem] lg:text-[2.3rem]">Filmes</h2>
                    <p className="text-[1.4rem] text-center lg:text-[1.6rem]2xl:text-[2rem]">Filmes cristãos totalmente grátis</p>
                </div>
            </section>


            <section className="" >
                <ul className=" flex flex-row items-center justify-center   w-full flex-wrap text-center p-[1rem]">
                    {amostraFilmes()}
                </ul>

            </section>
        </main>
    )
}