import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  imports: [],
  templateUrl: './menu-header.html',
  styleUrl: './menu-header.scss'
})
export class MenuHeader {
  private router = inject(Router);

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
