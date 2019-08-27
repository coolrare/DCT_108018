import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Articles, Article } from 'src/app/articles';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  articles: Articles;
  // articles$: Observable<Articles>;
  articles$: Observable<Article[]>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    // this.postService.getArticles().subscribe(data => {
    //   this.articles = data;
    // });
    // this.articles$ = this.postService.getArticles().pipe(
    //   map(data => {
    //     // .......
    //     //
    //     return data.articles;
    //   })
    // );
    this.articles$ = this.postService.getArticles().pipe(
      map(data => data.articles)
    );
  }
}
