import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  activeItem: number = 0;
  menu = [
    { title: 'الرئيسية' ,icon:'#plane'},
    { title: 'المواد الدراسية' ,icon:'#plane'},
  ];

  selectMenuItem(index: number) {
    this.activeItem = index;
  }
}
