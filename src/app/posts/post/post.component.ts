import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { Article } from 'src/app/articles';
import { Observable } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // article: Article;
  article$: Observable<Article>;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(paramMap => {
    //   const slug = paramMap.get('slug');
    //   this.postService.getArticle(slug).subscribe(article => {
    //     this.article = article.article;
    //   });
    // });

    this.article$ = this.route.paramMap.pipe(
      switchMap(paramMap => this.postService.getArticle(paramMap.get('slug'))),
      map(data => data.article),
      shareReplay(1)
      // map(paramMap => this.postService.getArticle(paramMap.get('slug')))
    );
    // .subscribe(data => {});
  }
}
