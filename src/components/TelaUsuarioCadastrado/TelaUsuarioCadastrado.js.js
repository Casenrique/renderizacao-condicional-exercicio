import { BackToLoginButton, Div, Titulo } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BackToLoginButton onClick={props.voltarTelaInicial}>Voltar</BackToLoginButton>

        </Div>
    )
}

export default TelaUsuarioCadastrado;