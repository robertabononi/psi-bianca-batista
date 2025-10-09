import { Component, inject } from '@angular/core';

import { HomeButton } from '../../components/home-button/home-button';
import { Menu } from '../../components/menu/menu';
import { MenuService } from '../../services/menu.service';
import { MenuItem, MenuItemModel } from '../../shared/models/menu.model';
import { AboutMePage } from '../about-me-page/about-me-page';
import { FaqPage } from '../faq-page/faq-page';
import { ChildrenPage } from '../children-page/children-page';

@Component({
  selector: 'app-menu-page',
  imports: [
    HomeButton,
    AboutMePage,
    ChildrenPage,
    FaqPage,
    Menu
  ],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss'
})
export class MenuPage {
  public readonly MenuItem = MenuItem;
  private menuService = inject(MenuService);

  public activeMenuPage: MenuItem = MenuItem.EU;

  ngOnInit() {
    this.menuService.menuItem$.subscribe((item) => {
      this.activeMenuPage = item.find((i: MenuItemModel) => i.active)?.id || MenuItem.EU;
    });
  }
}
