import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  user: any;
  username: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchUser() {
    this.http.get('https://api.github.com/users/' + this.username).subscribe((data) => {
      this.user = data;
    });
  }

}
