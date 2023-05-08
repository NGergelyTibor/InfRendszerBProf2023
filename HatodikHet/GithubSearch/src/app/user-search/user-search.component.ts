import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  user: any;
  username: string = '';

  constructor(private githubService: GitHubService) { }

  ngOnInit(): void {
  }

  searchUser() {
    this.githubService.searchUsers(this.username).subscribe((data: any) => {
      this.user = data.items;
    });
  }
}
