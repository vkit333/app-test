import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleResolver } from './article-resolver.service';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent,
    MarkdownPipe
  ],

  providers: [
    ArticleResolver
  ]
})
export class ArticleModule {}
