import { Component } from '@angular/core';

interface Voter {
  name: string;
  voted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  voters: Voter[] = [
    { name: 'Mr. IQ', voted: false },
    { name: 'Ms. Universe', voted: false },
    { name: 'Bombasto', voted: false }
  ];

  questionText = "Should mankind colonize the Universe?";

  agreeCount = 0;
  disagreeCount = 0;

  onVote(vote: string, voter: Voter) {
    if (!voter.voted) {
      if (vote === 'Agree') {
        this.agreeCount++;
      } else if (vote === 'Disagree') {
        this.disagreeCount++;
      }
      voter.voted = true;
    }
  }
}
