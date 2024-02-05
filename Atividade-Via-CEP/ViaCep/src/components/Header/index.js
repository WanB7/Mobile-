import { HeaderContainer, HeaderContent, TextHeader } from "./style";

        // HeaderContainer = View
        // HeaderContent = SafeAreaView
        // TextHeader = Text

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <TextHeader>Consumo da API ViaCep</TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}