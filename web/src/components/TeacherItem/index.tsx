import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/33496399?s=460&u=13845319fdcd3a86bb7089cd3d533604e7203efa&v=4" alt="Jordevá Lucas"/>
        <div>
          <strong>Jordevá Lucas</strong>
          <span>Informáticas</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de informática avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora 
          <strong>R$ 100</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;