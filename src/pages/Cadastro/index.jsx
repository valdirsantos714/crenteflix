import { Link } from "react-router-dom"
import { useGlobalContext } from "../../hooks/useGlobalContext"

export const Cadastro = () => {
    const {atualizaEmail, atualizaSenha, cadastrar} = useGlobalContext()


    return (
        <main >
        <section className="p-[1rem]" >
        <div className="flex flex-col gap-[1rem] min-h-[80vh] items-center justify-center">
            <h2 className="text-[2rem]">Cadastro</h2>
            <p className="text-[1.4rem] text-center">Se cadastre antes de enviar o filme ou série</p>
            
            <form className="flex flex-col flex-wrap gap-[0.5rem] ">

                <label className="text-[1.4rem]" htmlFor="email" >Email:</label>
                <input type="text" onChange={atualizaEmail} placeholder="Digite seu email" className="p-[0.3rem] text-[1.2rem] mb-[0.5rem]" required/>

                <label htmlFor="senha" className="text-[1.4rem]">Senha:   </label>
                <input type="password" onChange={atualizaSenha} placeholder="Digite sua senha" className="p-[0.3rem] text-[1.2rem]" required/>

                <button type="submit" onClick={cadastrar}  className="bg-vermelho text-branco rounded-[2rem] w-[50%] m-auto mt-[1rem] p-[0.7rem] text-[1.4rem]">
                    Cadastrar-se
                </button>

                <Link to={"/login"}>Já tem conta então faça Login</Link>
            </form>
            </div>
        </section>
    </main>
    )

}