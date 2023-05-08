import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {
  @Input() name!: string;
  @Input() options!: string[];
  @Output() vote = new EventEmitter<string>();

  voted = false;

  onVote(option: string) {
    if (!this.voted) {
      this.vote.emit(option);
      this.voted = true;
    }
  }
}
