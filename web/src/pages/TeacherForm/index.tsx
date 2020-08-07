import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm () {
  const [ scheduleItems, setScheduleItems ] = useState([
    { week_day: 0, from: '', to: '' }
  ]) 
  

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '', } 
    ])
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"  
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>
          <Textarea name="bio" label="Biografia"/>
        </fieldset>
        
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Potuguês', label: 'Potuguês' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula"/>
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
          </legend>

          { scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select 
                  name="week_day" 
                  label="Dia da semana"
                  options={[
                    { value: '6', label: 'Domingo-feita' },
                    { value: '0', label: 'Segunda-feita' },
                    { value: '1', label: 'Terça-feita' },
                    { value: '2', label: 'Quarta-feita' },
                    { value: '3', label: 'Quinta-feita' },
                    { value: '4', label: 'Sexta-feita' },
                    { value: '5', label: 'Sábado-feita' }
                  ]}
                />
                <Input name="from" label="Das" type="time"></Input>
                <Input name="to" label="Até" type="time"></Input>
              </div>
            )
          }) }
          
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;