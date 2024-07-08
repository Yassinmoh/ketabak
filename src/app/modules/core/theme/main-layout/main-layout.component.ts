import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';
import { toggleSidebar } from '../../../../store/app.selectors';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SharedModule, RouterModule, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  isMobile!: boolean
  showMobileSidebar$!: Observable<boolean>

  store = inject(Store<AppState>)
  breakpointObserver = inject(BreakpointObserver)

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe(result => this.isMobile = result.matches);

    this.showMobileSidebar$ = this.store.select(toggleSidebar)
  }
}
