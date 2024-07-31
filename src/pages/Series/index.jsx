import { useProcuraConteudo } from "../../hooks/useProcuraConteudo"

export const Series = () => {

    const {amostraSeries} = useProcuraConteudo()
    return (
        <main>
        
            <section className="p-[1rem]" >
                <div className="flex flex-col gap-[1rem] items-center">
                    <h2 className="text-[2rem]">Séries</h2>
                    <p className="text-[1.4rem] text-center">Séries cristãs totalmente grátis</p>
                </div>
            </section>


            <section className="" >
                <ul className=" flex flex-row items-center justify-center   w-full flex-wrap text-center p-[1rem]">
                    {amostraSeries()}
                </ul>

            </section>
        </main>

    )
}