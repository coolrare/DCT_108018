import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Articles } from 'src/app/articles';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  articles: Articles;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

}
