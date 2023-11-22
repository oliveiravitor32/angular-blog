import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input() newsId: number = 0;
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
}
