import styled from "styled-components";

        // HeaderContainer = View
        // HeaderContent = SafeAreaView
        // TextHeader = Text

export const HeaderContainer = styled.View`
    background-color: gold ;
    height: 20%;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 0px 0px 15px 15px;

    box-shadow: 0px 0px 10px  #00000030;
    /* shadow-color: red ;
    shadow-offset: 0px ;
    shadow-opacity: 0.15;
    shadow-radius: 15px;
    elevation: 5; */
`

export const HeaderContent = styled.SafeAreaView`
    margin-top: 45px;
`

export const TextHeader = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 24px;
    color: #333E33;
    text-align: center;
`