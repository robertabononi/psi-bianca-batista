import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  imports: [],
  templateUrl: './home-button.html',
  styleUrl: './home-button.scss'
})
export class HomeButton {
  private router = inject(Router);

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
