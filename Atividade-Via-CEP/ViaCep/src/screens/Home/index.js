import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm, UfView } from "./style";
import axios from "axios";


export function Home(){
    
    //hooks - states
    const [endereco, setEndereco] = useState ({})
    const [cep, setCep] = useState ('')
    //hooks - effect

        //chamada da API
    async function getCep () {
        try {

            const promise = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(promise.data)
            
        } catch (e) {
            
        }
    }
    function clearCep () {
        setEndereco({})
    }

    return(

        //ScrollForm
        //ContainerForm
        //BoxInput
            //Label
            //Input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                     textLabel= "Informe o CEP:"
                     placeholder= "Cep..."
                     keyType= "numeric"
                     maxLength={9}
                     editable={true}
                     fieldValue={cep}
                     onChangeText={setCep}
                     onBlur={cep ? getCep : clearCep}
                />

                <BoxInput
                     textLabel= "Logradouro:"
                     placeholder= "Logradouro..."
                     fieldValue={endereco.logradouro}
                />

                <BoxInput
                     textLabel= "Bairro:"
                     placeholder= "Bairro..."
                     fieldValue={endereco.bairro}
                />

                <BoxInput
                     textLabel= "Cidade:"
                     placeholder= "Cidade..."
                     fieldValue={endereco.localidade}
                />

                <UfView>
                    <BoxInput
                        textLabel= "Estado:"
                        placeholder= "Estado..."
                        fieldValue={endereco.uf}
                        fieldWidth={70}
                    />
                
                    <BoxInput
                        textLabel= "UF:"
                        placeholder= "UF..."
                        fieldValue={endereco.uf}
                        fieldWidth={25}
                    />
                </UfView>

            </ContainerForm>
        </ScrollForm>

    )
}