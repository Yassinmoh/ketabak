import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-all-exercises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-exercises.component.html',
  styleUrl: './all-exercises.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AllExercisesComponent {
  constructor(private cdr: ChangeDetectorRef) { }
  private currentDraggedItem: HTMLElement | null = null;
  private touchStartPos: { x: number; y: number } | null = null;
  activeMenuItem: number = 1


  labels = [
    { id: 1, title: 'اسحب نوع السؤال', type: '' },
    { id: 2, title: 'اختيار من متعدد', type: 'multiple-choice' },
    { id: 3, title: 'اختيار من فردي', type: 'single-choice' },
    { id: 4, title: 'نص', type: 'text' },
  ]

  selectTab(tabIndex: number): void {
    this.activeMenuItem = tabIndex
  }

  dragStart(event: DragEvent) {
    if (event.target instanceof HTMLElement) {
      event.dataTransfer?.setData('text/plain', event.target.dataset['type']!);
    }
  }

  touchStart(event: TouchEvent) {
    if (event.target instanceof HTMLElement) {
      this.currentDraggedItem = event.target;
      this.touchStartPos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
  }

  touchMove(event: TouchEvent) {
    if (this.touchStartPos) {
      event.preventDefault();
      const touch = event.touches[0];
      const deltaX = touch.clientX - this.touchStartPos.x;
      const deltaY = touch.clientY - this.touchStartPos.y;
      this.currentDraggedItem!.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  }

  touchEnd(event: TouchEvent) {
    if (this.currentDraggedItem && this.touchStartPos) {
      const dropAreaElement = document.querySelector('#drop-area');
      if (!dropAreaElement) return;
      const dropAreaRect = dropAreaElement.getBoundingClientRect();
      const touch = event.changedTouches[0];
      if (touch.clientX >= dropAreaRect.left && touch.clientX <= dropAreaRect.right &&
        touch.clientY >= dropAreaRect.top && touch.clientY <= dropAreaRect.bottom) {
        const type = this.currentDraggedItem.dataset['type']!;
        this.addItemToDropArea(type);
        this.cdr.detectChanges();
      }
      this.currentDraggedItem.style.transform = '';
      this.currentDraggedItem = null;
      this.touchStartPos = null;
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
    this.addItemToDropArea(type);
    this.cdr.detectChanges();
  }

  addItemToDropArea(type: string) {
    let itemHtml = '';

    if (type === 'multiple-choice') {
      itemHtml = `
              <div class="question">
        <p class="title">اختيار من متعدد</p>
        <textarea name="" id="" placeholder="نص السؤال .."></textarea>
        <div class="difficulty">
          <div class="add_btn">
            <svg><use href="#plus"></use></svg>
            <span>خيار جديد</span>
          </div>
          <div>
            <div class="item">
              <label for="">سهل</label>
              <input type="radio" name="difficulty">
            </div>
            <div class="item">
              <label for="">متوسط</label>
              <input type="radio" name="difficulty">
            </div>
            <div class="item">
              <label for="">صعب</label>
              <input type="radio" name="difficulty">
            </div>
          </div>
        </div>

        <div class="que_container">
          <div>
            <input type="text" placeholder="الاختيار الأول">
            <input type="text" placeholder="الاختيار الثاني">
          </div>
          <div>
            <label><input type="checkbox" name="choice">تحديد اجابه صحيحة</label>
            <label><input type="checkbox" name="choice">تحديد اجابه صحيحة</label>
          </div>
        </div>

          <button class="save-button">حفظ كمسودة</button>
          <button class="delete-button" onclick="this.parentElement.remove()">الغاء</button>

      </div>
      `;
    } else if (type === 'single-choice') {
      itemHtml = `
              <div class="question">
        <p class="title">اختيار فردي</p>
        <textarea name="" id="" placeholder="نص السؤال .."></textarea>
        <div class="difficulty">
          <div class="add_btn">
            <svg><use href="#plus"></use></svg>
            <span>خيار جديد</span>
          </div>
          <div>
            <div class="item">
              <label for="">سهل</label>
              <input type="radio" name="difficulty">
            </div>
            <div class="item">
              <label for="">متوسط</label>
              <input type="radio" name="difficulty">
            </div>
            <div class="item">
              <label for="">صعب</label>
              <input type="radio" name="difficulty">
            </div>
          </div>
        </div>

        <div class="que_container">
          <div>
            <input type="text" placeholder="الاختيار الأول">
            <input type="text" placeholder="الاختيار الثاني">
          </div>
          <div>
            <label><input type="radio" name="choice">تحديد اجابه صحيحة</label>
            <label><input type="radio" name="choice">تحديد اجابه صحيحة</label>
          </div>
        </div>

          <button class="save-button">حفظ كمسودة</button>
          <button class="delete-button" onclick="this.parentElement.remove()">الغاء</button>

      </div>
      `;
    }

    const newItem = document.createElement('div');
    const dropContainer = document.querySelector('.drop__container');
    newItem.innerHTML = itemHtml;
    if (dropContainer) {
      dropContainer.appendChild(newItem);
    }
    this.cdr.detectChanges();
  }
}
