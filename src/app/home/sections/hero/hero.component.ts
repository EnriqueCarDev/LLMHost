import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
// import { hero_picture } from '../../../../assets/images';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
