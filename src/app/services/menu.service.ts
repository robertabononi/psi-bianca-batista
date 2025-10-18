import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MenuItem, MenuItemModel } from '../shared/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuItems: MenuItemModel[] = [
    {
      id: MenuItem.EU,
      label: 'Eu',
      icon: 'assets/icon-about-me.png',
      active: true
    },
    {
      id: MenuItem.CRIANCAS,
      label: 'At. Infantil',
      icon: 'assets/icon-cubes.png',
      active: false
    },
    {
      id: MenuItem.ADULTOS,
      label: 'At. Adulto',
      icon: 'assets/icon-adults.png',
      active: false
    },
    {
      id: MenuItem.FAQ,
      icon: 'assets/icon-faq.png',
      label: 'FAQ',
      active: false
    }
  ];
  public menuItemSubject = new BehaviorSubject<MenuItemModel[]>(this.menuItems);
  public menuItem$ = this.menuItemSubject.asObservable();


  public activateMenuItem(itemId: MenuItem) {
    this.menuItems.forEach(item => {
      item.active = (item.id === itemId);
    });

    this.menuItemSubject.next(this.menuItems);
  }
}
