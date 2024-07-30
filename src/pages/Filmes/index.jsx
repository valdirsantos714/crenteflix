import { useState } from "react";
import { findAll } from "../../services/data"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Filmes = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        dados()
    },[])


    const dados = async () => {
        try {
            const data = await findAll();

            setFilmes(data);
            console.log(filmes);
        } catch (error) {
            console.log(error);
        }
    }

    const amostraFilmes = () => {
        if (Array.isArray(filmes)) {
            return filmes.map((f) => (
                    
                <li key={f.id} className=" w-[80%] ">
                    <Link>
                        <img src={`${f.imgUrl}`} alt="Imagem do filme" className="" />
                    </Link>
                </li>
            
        )) 
        } else {
            return (
                <div className="items-center justify-center flex flex-col">
            <div className="w-[24px] h-[24px] p-[1rem] animate-spin  border-[10px] border-vermelho border-b-transparent bg-transparent rounded-[50%]"></div>
            <p className="pt-[1rem] text-center">Carregando...</p>
            </div>
        )
        }
    }

    return (
        <main>
            <section className="p-[1rem]" >
                <div className="flex flex-col gap-[1rem] items-center">
                    <h2 className="text-[2rem]">Filmes</h2>
                    <p className="text-[1.4rem] text-center">Filmes cristãos totalmente grátis</p>
                </div>
            </section>


            <section className="">
                <ul className=" flex flex-row items-center justify-center  p-[1rem] gap-[0.5rem]">
                    {amostraFilmes()}
                </ul>
            </section>
        </main>
    )
}