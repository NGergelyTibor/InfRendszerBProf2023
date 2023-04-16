
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ms-universe',
  templateUrl: './ms-universe.component.html',
  styleUrls: ['./ms-universe.component.css']
})
export class MsUniverseComponent {
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
