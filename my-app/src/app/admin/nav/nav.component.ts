import { Component,  EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'vamsi';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }
}
