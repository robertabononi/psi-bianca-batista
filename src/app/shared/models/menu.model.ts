export enum MenuItem {
  EU = 'EU',
  CRIANCAS = 'CRIANCAS',
  ADULTOS = 'ADULTOS',
  FAQ = 'FAQ',
}

export interface MenuItemModel {
  id: MenuItem;
  label: string;
  icon: string;
  active: boolean;
}