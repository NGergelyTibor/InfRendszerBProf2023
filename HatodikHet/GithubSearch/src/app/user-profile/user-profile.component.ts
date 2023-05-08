import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../services/git-hub-service.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private githubService: GitHubService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.fetchUser(username);
    });
  }

  fetchUser(username: string): void {
    this.githubService.getUser(username).subscribe(user => {
      this.user = user;
    });
  }
}
