import './App.css';

import Foto from './components/Foto'
import Secao from './components/Secao'
import Dado from './components/Dado'

function App() {
  return (
    <div className="App">
      <Foto img_src="https://avatars.githubusercontent.com/u/7028783?v=4"></Foto>
      <Secao titulo="Dados pessoais:">
        <Dado chave="Nome" valor="Antonio carlos"></Dado>
        <Dado chave="RA" valor="F342018"></Dado>
        <Dado chave="Github" tipo="link" valor="https://github.com/antonio-cajueiro-campos/"></Dado>
        <Dado chave="Linkedin" tipo="link" valor="https://www.linkedin.com/in/antonio-carlos-cajueiro-0135b21bb/"></Dado>
      </Secao>
      <Secao titulo="Formação:">
        <Dado chave="Tecnólogo" valor="Análise e Desenvolvimento de Sistemas (Em andamento)"></Dado>
        <Dado chave="Tecnico" valor="Análise e Desenvolvimento de Sistemas (Finalizado)"></Dado>
      </Secao>
      <Secao titulo="Experiência:">
        <Dado chave="GFT Brasil Consultoria Informatica LTDA (2021-2022)" valor="Desenvolvedor Backend"></Dado>
        <Dado chave="Barazal Sistemas Tecnologicos (2020-2021)" valor="Desenvolvedor Full-stack"></Dado>
      </Secao>
      <Secao titulo="Projetos:">
        <Dado chave="GFT Brasil" valor="XP Investimentos: RV - Whitelabel (back)"></Dado>
        <Dado chave="Barazal ST" valor="Portal Barazal (front e back)"></Dado>
        <Dado chave="Barazal ST" valor="Rastreador (front)"></Dado>
        <Dado chave="Barazal ST" valor="Motoristas (app front e back)"></Dado>
        <Dado chave="Barazal ST" valor="Auth Service (back)"></Dado>
        <Dado chave="Barazal ST" valor="MailManager Service (back)"></Dado>
        <Dado chave="Barazal ST" valor="ContractManager Service (back)"></Dado>
        <Dado chave="Barazal ST" valor="Landpage (front)"></Dado>
        <Dado chave="ETEC TCC" valor="Oil Rescue"></Dado>
      </Secao>
    </div>
  );
}

export default App;
