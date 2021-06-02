import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig, TagsService,  UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        if (authenticated) {
          const username = this.userService.getCurrentUser().username;
          this.setListTo('author', {author: username});
        } else {
          this.setListTo('all');
        }
      }
    );

    this.tagsService.getAll()
    .subscribe(tags => {
      this.tags = tags;
      this.tagsLoaded = true;
    });
  }

  setListTo(type: string = '', filters: Object = {}) {

    if (type === 'author' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    if (type === 'author') {
      const username = this.userService.getCurrentUser().username;
      this.listConfig = {type: type, filters: {author: username}};
      return;
    }

    this.listConfig = {type: type, filters: filters};
  }
}
