
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent {
  @Input() agreeCount!: number;
  @Input() disagreeCount!: number;
}
