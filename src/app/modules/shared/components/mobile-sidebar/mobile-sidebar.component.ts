import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { fadeInRight } from '../../../core/animations';
import { AppState } from '../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as AppActions from '../../../../store/app.actions'

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss',
  animations:[fadeInRight]
})
export class MobileSidebarComponent {
  store= inject(Store<AppState>)
  activeItem: number = 0;
  menu = [
    { title: 'الرئيسية' ,icon:'#chart'},
    { title: 'المواد الدراسية' ,icon:'#chart'},
  ];

  selectMenuItem(index: number) {
    this.activeItem = index;
  }

  closeSidebar(){
    this.store.dispatch(AppActions.toggleSidebar())
  }
}
