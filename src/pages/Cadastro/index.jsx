import { Link } from "react-router-dom"
import {useGlobalContext} from "../../hooks/useGlobalContext"

export const Cadastro = () => {
    const {atualizaEmail, atualizaSenha, cadastrar} = useGlobalContext()


    return (
        <main >
        <section className="p-[1rem]" >
        <div className="flex flex-col gap-[1rem] min-h-[80vh] items-center justify-center">
            <h2 className="text-[2rem] 2xl:text-[2.5rem] font-bold">Cadastro</h2>
            <p className="text-[1.4rem] text-center 2xl:text-[2rem]">Se cadastre antes de enviar o filme ou série</p>
            
            <form className="flex flex-col flex-wrap gap-[0.5rem] ">

                <label className="text-[1.4rem] 2xl:text-[1.8rem]" htmlFor="email" >Email:</label>
                <input type="text" onChange={atualizaEmail} placeholder="Digite seu email" className="p-[0.3rem] text-[1.2rem] mb-[0.5rem] 2xl:text-[1.5rem]" required/>

                <label htmlFor="senha" className="text-[1.4rem] 2xl:text-[1.8rem]">Senha:   </label>
                <input type="password" onChange={atualizaSenha} placeholder="Digite sua senha" className="p-[0.3rem] text-[1.2rem] 2xl:text-[1.5rem]" required/>

                <button type="submit" onClick={cadastrar}  className="bg-vermelho text-branco rounded-[2rem] w-[50%] m-auto mt-[1rem] p-[0.7rem] text-[1.4rem] 2xl:text-[2rem] 2xl:mt-[1rem] 2xl:mb-[1rem]">
                    Cadastrar-se
                </button>

                <Link to={"/login"} className="mt-[0.5rem] text-[1.2rem] text-center 2xl:text-[1.8rem]">Já tem conta então <span className="bg-vermelho text-branco p-[0.2rem] rounded-lg 2xl:p-[0.5rem]">Faça Login</span></Link>
            </form>
            </div>
        </section>
    </main>
    )

}