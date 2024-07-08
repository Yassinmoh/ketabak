import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from '../../../core/models/Subject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-card.component.html',
  styleUrl: './subject-card.component.scss'
})
export class SubjectCardComponent implements OnChanges {
  @Input() subject!: Subject
  colors={text:'',background:''}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['subject']) {
      this.getStatusColor(this.subject.status);
    }
  }
  getStatusColor(status: string) {
    switch(status) {
      case 'مكتمل':
        this.colors = {text: '#00C614', background: '#e0f8e2'};
        break;
      case 'غير مكتمل':
        this.colors = {text: '#FFC11A', background: '#fff3d6'};
        break;
      default:
        this.colors = {text: '', background: ''};
        break;
    }
  }
}
