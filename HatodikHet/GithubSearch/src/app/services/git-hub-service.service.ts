import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repository } from '../models/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  searchUsers(username: string) {
    return this.http.get(`https://api.github.com/search/users?q=${username}`);
  }

  getUser(username: string): Observable<User> {
    const url = `${this.apiUrl}/users/${username}`;
    return this.http.get<User>(url);
  }

  searchRepositories(repoName: string) {
    return this.http.get(`https://api.github.com/search/repositories?q=${repoName}`);
  }
  
  getRepository(repoOwner: string, repoName: string): Observable<Repository> {
    const url = `${this.apiUrl}/repos/${repoOwner}/${repoName}`;
    return this.http.get<Repository>(url);
  }
}
