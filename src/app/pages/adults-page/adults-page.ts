import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-adults-page',
  imports: [ Card ],
  templateUrl: './adults-page.html',
  styleUrl: './adults-page.scss'
})
export class AdultsPage {
  public therapyThemes: any[] = [
    {
      imageSrc: 'assets/image-career-transition.jpg',
      title: 'Transição de carreira',
      description: [
        'Apoio em mudanças profissionais e superação de desafios relacionados à carreira (Burnout, estresse, conflitos, inseguranças, etc...).'
      ]
    },
    {
      imageSrc: 'assets/image-career-transition.jpg',
      title: 'Transtornos alimentares',
      description: [
        'Apoio especializado para lidar com questões alimentares e promover uma relação saudável com a comida.'
      ]
    }
  ];
}
