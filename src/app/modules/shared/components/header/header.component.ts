import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';
import { Observable } from 'rxjs';
import { getHeaderTitle } from '../../../../store/app.selectors';
import { CommonModule } from '@angular/common';
import * as AppActions from '../../../../store/app.actions'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  @Input() isMobile :any
  store= inject(Store<AppState>);
  title$!:Observable<string>

  ngOnInit(): void {
    this.title$ = this.store.select(getHeaderTitle)
  }

  openSidebar(){
    this.store.dispatch(AppActions.toggleSidebar())
  }
}
