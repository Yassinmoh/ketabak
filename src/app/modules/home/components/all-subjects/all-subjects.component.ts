import { Component, inject, OnInit } from '@angular/core';
import { SubjectCardComponent } from '../subject-card/subject-card.component';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../../core/services/subject.service';
import { Observable } from 'rxjs';
import { Subject } from '../../../core/models/Subject';

@Component({
  selector: 'app-all-subjects',
  standalone: true,
  imports: [CommonModule,SubjectCardComponent],
  templateUrl: './all-subjects.component.html',
  styleUrl: './all-subjects.component.scss'
})
export class AllSubjectsComponent implements OnInit{

  subjectService= inject(SubjectService);
  subjects$!:Observable<Subject[]>
  ngOnInit(): void {
    this.subjects$ = this.subjectService.getSubjects()
  }
}
