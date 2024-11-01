import { trigger, transition, style, animate } from '@angular/animations';

export const taskAnimations = [
  trigger('taskAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
  ]),
  trigger('errorMessageAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
  ]),
];
