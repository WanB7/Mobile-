import styled from "styled-components";

//Componente que contem a label + input
export const FieldContent = styled.View`

    /* Define o valor da largura como o valor da props.fieldWidth */
    width: ${props => `${props.fieldWidth}%`};
`