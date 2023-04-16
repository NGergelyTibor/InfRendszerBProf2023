
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agreeCount = 0;
  disagreeCount = 0;

  onVote(vote: boolean) {
    if (vote) {
      this.agreeCount++;
    } else {
      this.disagreeCount++;
    }
  }
}
