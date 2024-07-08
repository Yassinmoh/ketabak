import { Component } from '@angular/core';
import { SubjectCardComponent } from '../subject-card/subject-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-subjects',
  standalone: true,
  imports: [CommonModule,SubjectCardComponent],
  templateUrl: './all-subjects.component.html',
  styleUrl: './all-subjects.component.scss'
})
export class AllSubjectsComponent {

}
