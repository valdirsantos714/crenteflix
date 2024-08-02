export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center m-auto p-[1rem] bg-preto border-t-[1px] border-branco/20">
            <img src="/imgs/logo.png" alt="logo" className="w-[40%] lg:w-[15%]" />
            <h2 className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.8rem]bg-transparent">
                Desenvolvido por  
                <a href="https://www.linkedin.com/in/valdir-santos-8553002a4/" target="_blank" className=" text-vermelho bg-transparent 2xl:text-[1.8rem]"> Valdir Santos
                </a>
            </h2>
                <a href="" target="_blank"  className="bg-transparent text-vermelho text-center text-[1.2rem] lg:text-[1.4rem]">Clique aqui para ver o repositório deste projeto</a>
        </footer>
    )
}