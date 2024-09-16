import { Injectable } from '@angular/core';
import { MENU_ITEMS } from '../../utils/navbar-menu.constant';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  get MenuItems() {
    return MENU_ITEMS;
  }
}
