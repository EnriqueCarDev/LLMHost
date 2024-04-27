import { Component, OnInit } from '@angular/core';
import { NavElementComponent } from '../nav-element/nav-element.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavElementComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isMobile: boolean;

  constructor() {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }
}
