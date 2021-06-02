import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Article,
  ArticlesService,
  User,
  UserService
} from '../core';

@Component({
  selector: 'app-article-page',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
  article: Article;
  currentUser: User;
  canModify: boolean;
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
      }
    );

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.username === this.article.author.username);
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

}
