
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mr-iq',
  templateUrl: './mr-iq.component.html',
  styleUrls: ['./mr-iq.component.css']
})
export class MrIQComponent {
  @Output() vote = new EventEmitter<boolean>();

  private hasVoted = false;

  onAgree() {
    if (!this.hasVoted) {
      this.hasVoted = true;
      this.vote.emit(true);
    }
  }

  onDisagree() {
    if (!this.hasVoted) {
      this.hasVoted = true;
      this.vote.emit(false);
    }
  }

  isDisabled(): boolean {
    return this.hasVoted;
  }
}
