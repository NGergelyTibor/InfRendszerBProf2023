import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GitHubService } from './services/git-hub-service.service';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepoProfileComponent } from './repo-profile/repo-profile.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent },
  { path: 'repo-search', component: RepoSearchComponent },
  { path: 'user/:username', component: UserProfileComponent },
  { path: 'repos/:owner/:name', component: RepoProfileComponent },
  { path: '', redirectTo: '/user-search', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    RepoSearchComponent,
    UserProfileComponent,
    RepoProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Configure the routes
  ],
  providers: [
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
