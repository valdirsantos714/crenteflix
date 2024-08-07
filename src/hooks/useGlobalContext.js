import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext"
import {cadastre, login} from "../services/auth/index"

export const useGlobalContext = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("");

    const {apiKey, setApiKey} = useContext(GlobalContext)

    const logar = async (e) => {
        if (email === "" || senha === "") {
            alert("Preencha os campos!")
            
        } else {
            e.preventDefault()
            try {
                const token = await login(email, senha);

                setApiKey(token)
                
                if (apiKey != "") {
                    navigate("/cadastroconteudo")
                } 
                


            } catch (e) {
                console.log("Deu erro ao fazer login: " + e);
            }
        }
    }

    const cadastrar = async (e) => {
        if (email === "" || senha === "") {
            alert("Preencha os campos!")

        } else {
            e.preventDefault()
            try {
                const response = await cadastre(email, senha);
                
                console.log(response);
                navigate("/login")


            } catch (e) {
                console.log("Deu erro ao fazer cadastro: " + e);
            }
        }
    }



    const atualizaEmail = (e) => {
        setEmail(e.target.value)
    }

    const atualizaSenha = (e) => {
        setSenha(e.target.value)
    }

    return {
        atualizaEmail, atualizaSenha, logar, cadastrar
    };

}