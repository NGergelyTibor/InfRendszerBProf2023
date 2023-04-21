import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.scss']
})
export class RepoSearchComponent implements OnInit {

  repos!: any[];
  repoName: string = " ";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchRepo() {
    this.http.get('https://api.github.com/search/repositories?q=' + this.repoName).subscribe((data: any) => {
      this.repos = data.items;
    });
  }

}
