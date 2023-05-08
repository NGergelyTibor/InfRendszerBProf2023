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

  options = ['Agree', 'Disagree', 'Would not say'];
  voteCounts: number[] = Array(this.options.length).fill(0);

  get agreeCount(): number {
    return this.voteCounts[0];
  }

  get disagreeCount(): number {
    return this.voteCounts[1];
  }

  onVote(optionIndex: number, voter: Voter) {
    if (!voter.voted) {
      this.voteCounts[optionIndex]++;
      voter.voted = true;
    }
  }
}
