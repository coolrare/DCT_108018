import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Articles, SingleArticle } from './articles';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getArticles() {
    console.log(environment);
    return this.httpClient.get<Articles>(environment.apiUrl + '/api/articles');
  }

  getArticle(slug: string) {
    return this.httpClient.get<SingleArticle>(environment.apiUrl + '/api/articles/' + slug);
  }
}
