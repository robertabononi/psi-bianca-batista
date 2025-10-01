import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  imports: [],
  templateUrl: './collapse.html',
  styleUrl: './collapse.scss'
})
export class Collapse {
  @Input() question: string = '';
  @Input() answer: string = '';
  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
