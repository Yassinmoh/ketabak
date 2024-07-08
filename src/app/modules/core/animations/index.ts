
import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export const fadeInRight = trigger('fadeInRight', [
  transition(':enter', [
    animate('0.3s ease-out', keyframes([
      style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
    ]))
  ])
]);

