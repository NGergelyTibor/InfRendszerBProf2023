
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bombasto',
  templateUrl: './bombasto.component.html',
  styleUrls: ['./bombasto.component.css']
})
export class BombastoComponent {
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
