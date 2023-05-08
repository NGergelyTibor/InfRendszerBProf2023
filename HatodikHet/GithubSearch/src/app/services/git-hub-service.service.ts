import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor(private http: HttpClient) { }

  searchUsers(username: string) {
    return this.http.get(`https://api.github.com/search/users?q=${username}`);
  }

  searchRepositories(repoName: string) {
    return this.http.get(`https://api.github.com/search/repositories?q=${repoName}`);
  }
}
