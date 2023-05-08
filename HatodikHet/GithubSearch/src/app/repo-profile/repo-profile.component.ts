import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../services/git-hub-service.service';
import { Repository } from '../models/repo.model';

@Component({
  selector: 'app-repo-profile',
  templateUrl: './repo-profile.component.html',
  styleUrls: ['./repo-profile.component.scss']
})
export class RepoProfileComponent implements OnInit {
  repository!: Repository;

  constructor(
    private route: ActivatedRoute,
    private githubService: GitHubService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const repoOwner = params['owner'];
      const repoName = params['name'];
      this.fetchRepository(repoOwner, repoName);
    });
  }

  fetchRepository(repoName: string, repoOwner : string): void {
    this.githubService.getRepository(repoName, repoOwner).subscribe(repo => {
      this.repository = repo;
    });
  }
}
