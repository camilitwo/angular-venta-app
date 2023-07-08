import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('bounceAnimation', [
      state('Monos', style({})),
      state('Chinos', style({})),
      transition('Monos <=> Chinos', [
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(5px)', offset: 0.25 }),
          style({ transform: 'translateY(0)', offset: 0.5 }),
          style({ transform: 'translateY(2px)', offset: 0.75 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ]),
    trigger('fallAnimation', [
      state('Monos', style({ opacity: 0, top: '-10px' })),
      state('Chinos', style({ opacity: 0, top: '-10px' })),
      transition('Monos <=> Chinos', [
        animate('0.5s', style({ opacity: 1, top: '0' })),
        animate('0.5s', style({ opacity: 0, top: '10px' }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  text: string = 'Monos';
  isTextVisible: boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      this.toggleText();
    }, 2500);
  }

  toggleText(): void {
    this.text = (this.text === 'Monos') ? 'Chinos' : 'Monos';
  }

  constructor(private router: Router) {}

  signup() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  contact() {
    this.router.navigate(['/contact']);
  }

  hideText(event: any): void {
    this.isTextVisible = false;
  }

  showText(event: any): void {
    this.isTextVisible = true;
  }
}