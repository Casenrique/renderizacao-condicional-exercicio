import { Form, FormContainer, Input, SendButton, StyledLabel } from "./styled";


function TelaCadastroEndereco(props) {
    return(
<FormContainer>
      <h1>Cadastro Endereço</h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input type={"text"} id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numeroResidencia">
          Número da residencia:
          <Input type={"text"} id="numeroResidencia" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input type={"text"} id="telefone" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input type={"text"} id="complemento" />
        </StyledLabel>
        <SendButton onClick={props.telaCadastroFinal}>Cadastrar</SendButton>
      </Form>
    </FormContainer>
    );
}

export default TelaCadastroEndereco;