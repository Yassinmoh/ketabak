import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';
import * as AppActions from '../../../../store/app.actions'
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  activeTab: number = 1;
  activeMenuItem: number = 1
  store= inject(Store<AppState>)
  labels =[
    {id:1,title:'اسحب نوع السؤال',type:''},
    {id:2,title:'اختيار من متعدد',type:'multiple-choice'},
    {id:3,title:'اختيار من فردي',type:'single-choice'},
    {id:4,title:'نص',type:'text'},
  ]

  selectTab(tabIndex: number,menuItem:number =0): void {
    this.activeTab = tabIndex;
    this.activeMenuItem =menuItem
    this.activeTab == 1
    ? this.store.dispatch(AppActions.setHeaderTitle({title:'المواد'}))
    : this.store.dispatch(AppActions.setHeaderTitle({title:'كل التمارين'}))
  }



  dragStart(event: DragEvent) {
    if (event.target instanceof HTMLElement) {
      event.dataTransfer?.setData('text/plain', event.target.dataset['type']!);
    }
  }

  dragOver(event: DragEvent) {
    event.preventDefault();
    const dropArea = event.target as HTMLElement;
    dropArea.classList.add('hover');
  }

  dragLeave(event: DragEvent) {
    const dropArea = event.target as HTMLElement;
    dropArea.classList.remove('hover');
  }

  drop(event: DragEvent) {
    event.preventDefault();
    const dropArea = event.target as HTMLElement;
    dropArea.classList.remove('hover');
    const type = event.dataTransfer?.getData('text/plain')!;
    this.addItemToDropArea(type, dropArea);
  }

  addItemToDropArea(type: string, dropArea: HTMLElement) {
    let itemHtml = '';

    if (type === 'multiple-choice') {
      itemHtml = `
        <div class="question">
          <button class="delete-button" onclick="this.parentElement.remove()">×</button>
          <p>نص السؤال...</p>
          <label><input type="radio" name="choice"> اختيار 1</label>
          <label><input type="radio" name="choice"> اختيار 2</label>
        </div>
      `;
    } else if (type === 'single-choice') {
      itemHtml = `
        <div class="question">
                  <button class="delete-button" onclick="this.parentElement.remove()">×</button>
          <p>نص السؤال...</p>
          <label><input type="radio" name="choice"> اختيار فردي</label>
        </div>
      `;
    }

    const newItem = document.createElement('div');
    const dropContainer = document.querySelector('.drop__container');
    newItem.innerHTML = itemHtml;
    if(dropContainer){
      dropContainer.appendChild(newItem);
    }
  }
}
