import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';
import * as AppActions from '../../../../store/app.actions'
import { AllExercisesComponent } from '../../components/all-exercises/all-exercises.component';
import { SubjectService } from '../../../core/services/subject.service';
import { AllSubjectsComponent } from '../../components/all-subjects/all-subjects.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,AllExercisesComponent,AllSubjectsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{
  activeTab: number = 1;

  store= inject(Store<AppState>);


  selectTab(tabIndex: number,menuItem:number =0): void {
    this.activeTab = tabIndex;
    this.activeTab == 1
    ? this.store.dispatch(AppActions.setHeaderTitle({title:'المواد'}))
    : this.store.dispatch(AppActions.setHeaderTitle({title:'كل التمارين'}))
  }

}
