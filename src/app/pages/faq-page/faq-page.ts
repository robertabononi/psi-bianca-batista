import { Component } from '@angular/core';

import { Collapse } from '../../components/collapse/collapse';

@Component({
  selector: 'app-faq-page',
  imports: [ Collapse ],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.scss'
})
export class FaqPage {
  public questionsAndAnswers = [
    {
      question: 'Quanto tempo dura a sessão?',
      answer: '50 minutos.'
    },
    {
      question: 'Qual é o valor da consulta?',
      answer: 'O Conselhor Federal de Psicologia não permite a divulgação do valor. Para saber mais, basta entrar em contato.'
    },
    {
      question: 'Atende por convênio?',
      answer: 'Não. Porém posso emitir recibo para reembolso do seu convênio de saúde.'
    },
    {
      question: 'Posso fazer quinzenalmente?',
      answer: 'Não atendo de forma quinzenal, exceto em casos de alta onde as sessões começam a se espaçar.'
    },
    {
      question: 'Atendimento online é mesmo efetivo?',
      answer: 'As sessões online permitem a continuidade do cuidado terapêutico com a mesma qualidade e ética das sessões presenciais, preservando o espaço de acolhimento e construção de sentido, permitindo que o paciente se sinta seguro e à vontade para se expressar e se ouvir.'
    },
    {
      question: 'Do que preciso para fazer atendimento online?',
      answer: 'Escolha um local tranquilo e livre de interrupções;<br>Utilize fones de ouvido para maior concentração e privacidade;<br>Garanta uma conexão estável de internet;'
    }
  ];
}
