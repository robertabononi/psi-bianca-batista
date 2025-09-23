import { Component } from '@angular/core';
import { Menu } from '../../components/menu/menu';
import { AboutMePage } from '../about-me-page/about-me-page';

@Component({
  selector: 'app-menu-page',
  imports: [
    Menu,
    AboutMePage
  ],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss'
})
export class MenuPage {

}
