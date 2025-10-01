import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../shared/models/menu.model';

@Component({
  selector: 'app-menu',
  imports: [ AsyncPipe ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  public menuService = inject(MenuService);

  public onMenuItemClick(itemId: MenuItem) {
    this.menuService.activateMenuItem(itemId);
  }
}
