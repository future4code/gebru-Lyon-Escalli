import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQGhhlN7Tl1oOg/profile-displayphoto-shrink_200_200/0/1642083469926?e=1648684800&v=beta&t=TeOYuWJOFA4pJSrxF4ZHotbViGJaBlvNCNECj9iKHYQ" 
          nome="Lyon Heitor Escalli" 
          descricao="Formado em Administração pela UNIASSELVI; atualmente estudante de Engenharia de Software pela UNICESUMAR e Desenvolvimento Web pela LABENU."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQFsNda_rg-h_w/company-logo_100_100/0/1635968029310?e=1651104000&v=beta&t=1qHKpZoWpO9or38Ikte2Wba6INb7zYxzBQLTstnlqhE" 
          nome="Gestor de Polo - UNIASSELVI" 
          descricao="Gestão de unidade presencial da faculdade, acompanhamento de indicadores e metas." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGL_rBgIhaT8g/company-logo_100_100/0/1619968878855?e=1651104000&v=beta&t=1EvFFIxf4zS3w9dTixPFGEwS5Hh8dsjphjumBtAOK4M" 
          nome="Assistente Administrativo - IERGS" 
          descricao="Atendimento a alunos na secretaria da faculdade." 
        />
      </div>

      <div className="section_contact">
        <h2>Meus Dados de Contato</h2>
        <CardPequeno
        imagem="https://homeoffice.com.br/wp-content/uploads/2020/06/telefone-icon.png"
        email="lyonescalli@gmail.com"
        endereco="Rua Vereador Moisés Bonetti, 332, Jardim Aparecida, Alvorada/RS"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
