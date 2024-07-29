import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

export const Header = () => {

    const [abrirLista, setAbrirLista] = useState(false)

    const revelaLista = () => {
        if (abrirLista) {
            setAbrirLista(false)
        } else {
            setAbrirLista(true)
        }
    }
    return (
        <>
        {/*Header desktop */}
        <header className="hidden lg:relative lg:flex lg:justify-between lg:px-[1rem] lg:pt-[1rem] lg:items-center lg:h-[auto]">
        <img src="./imgs/logo.png" alt="Logo" className="w-[25%] h-[10%]" />

            <nav>
                <ul className="flex flex-row flex-wrap items-center gap-[1.5rem] 2xl:gap-[2rem]" >
                    <li className="hover:cursor-pointer hover:opacity-[85%] text-[1.4rem] 2xl:text-[1.8rem]">Filmes</li>
                    <li className="hover:cursor-pointer hover:opacity-[85%] text-[1.4rem] 2xl:text-[1.8rem]">Séries</li>
                    <li className="hover:cursor-pointer bg-vermelho text-branco hover:opacity-[85%] text-[1.4rem] 2xl:text-[1.8rem] p-[0.5rem] rounded-lg text-center">Adicionar filmes ou séries</li>
                </ul>
            </nav>

            {abrirLista && (
                <nav className="absolute top-full left-[70%] p-[0.2rem]">
                    <ul className="flex flex-col flex-wrap gap-[0.5rem] bg-blue-600 p-[0.5rem] rounded-[0.7rem] text-center">
                        
                        <li className="hover:cursor-pointer hover:opacity-[83%] text-[1.4rem] 2xl:text-[1.8rem] border-[2px] border-blue-950 rounded-[0.4rem] p-[0.3rem]" onClick={revelaLista} >
                            oi
                            
                        </li>
                    </ul>
                </nav>

            )}
        </header>
        
        {/*Header mobile */}
        <header className="flex gap-[1.5rem] items-center relative lg:hidden pl-[0.7rem] ">
            <span onClick={revelaLista} className="w-[50px] h-[50px] bg-[url('./imgs/barras.svg')]  bg-cover bg-center bg-no-repeat lg:hidden"></span>
            <img src="./imgs/logo.png" alt="Logo" className="w-[50%] h-[10%]" />

            {abrirLista && (
                <nav className="absolute top-full left-2 p-[0.2rem] w-[70%]">
                    <ul className="flex flex-col flex-wrap gap-[0.5rem] bg-blue-600 p-[0.5rem] rounded-[0.7rem] text-center">
                        
                        <li className="hover:cursor-pointer hover:opacity-[83%] text-[1.4rem] 2xl:text-[1.8rem] border-[2px] border-blue-950 rounded-[0.4rem] p-[0.3rem]" onClick={revelaLista} >
                            <Link to={"/"} onClick={revelaLista}>Ir para o início</Link>
                        </li>

                    </ul>
                </nav>
            )}
                
            </header>

            <Outlet/>
        </>
    )
}