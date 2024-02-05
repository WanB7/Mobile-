import { ContainerApp } from './styles';
//Import fonts
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header/index';
import { Home } from './src/screens/Home';

export default function App() {

  //hooks para usefonts (fontes)
  const [fontLoad, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  //validação de carregamento de fontes
  if(!fontLoad && !fontError)
  {
    return null;
  }

  return (
    <ContainerApp>
      <Header/>
      <Home/>
    </ContainerApp>
  );
}