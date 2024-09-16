import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuService } from '../../data/services/menu.service';
import { NavElementComponent } from '../nav-element/nav-element.component';
import { NavbarMenuItem } from './navbar-menu-items';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavElementComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isMobile: boolean;
  menuItems: NavbarMenuItem[] = [];

  constructor(private menuService: MenuService) {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });

    this.menuItems = this.menuService.MenuItems;
  }
}
