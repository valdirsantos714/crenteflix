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
                console.log(apiKey);
                console.log("O email: " + email);
                console.log("A senha: " + senha);
                
                if (apiKey != "") {
                    navigate("/cadastroconteudo")
                } else {
                    alert("Login ou senha inválidos!")
                    throw new Error("Login ou senha inválidos!")
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
                console.log("O email: " + email);
                console.log("A senha: " + senha);
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